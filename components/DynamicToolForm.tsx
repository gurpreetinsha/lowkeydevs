"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useTheme } from "./ThemeProvider";
import { exportToCSV, exportToText } from "@/lib/export";
import { 
  Copy, 
  Check, 
  Download, 
  Save, 
  Share2, 
  Sparkles, 
  Calculator, 
  ArrowRight,
  TrendingUp,
  History
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getToolModule } from "@/tools/registry";

interface DynamicToolFormProps {
  toolSlug: string;
  config: any;
  calculate?: (inputs: Record<string, any>) => Record<string, any>;
}

export default function DynamicToolForm({ toolSlug, config, calculate: propCalculate }: DynamicToolFormProps) {
  const { addHistory, isPremium } = useTheme();
  const toolModule = getToolModule(toolSlug);
  const calculate = propCalculate || toolModule?.calculate || (() => ({}));
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [copiedLink, setCopiedLink] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // 1. Build initial default values, seeding from URL parameters if available
  const defaultValues: Record<string, any> = {};
  config.inputs.forEach((input: any) => {
    const paramVal = searchParams.get(input.id);
    if (paramVal !== null) {
      if (input.type === "number") {
        defaultValues[input.id] = Number(paramVal);
      } else if (input.type === "checkbox") {
        defaultValues[input.id] = paramVal === "true";
      } else {
        defaultValues[input.id] = paramVal;
      }
    } else {
      defaultValues[input.id] = input.defaultValue;
    }
  });

  // 2. Build Zod validation schema programmatically
  const schemaFields: Record<string, any> = {};
  config.inputs.forEach((input: any) => {
    let fieldValidator: zod.ZodTypeAny = zod.any();

    if (input.type === "number" || input.type === "range") {
      let numValidator = zod.number({
        message: `${input.label} must be a number.`,
      });

      if (input.validation?.required) {
        numValidator = numValidator.refine((v) => v !== undefined && v !== null && !isNaN(v), {
          message: input.validation.message || `${input.label} is required.`,
        });
      }
      if (input.validation?.min !== undefined) {
        numValidator = numValidator.min(input.validation.min, {
          message: input.validation.message || `${input.label} must be at least ${input.validation.min}.`,
        });
      }
      if (input.validation?.max !== undefined) {
        numValidator = numValidator.max(input.validation.max, {
          message: input.validation.message || `${input.label} cannot exceed ${input.validation.max}.`,
        });
      }
      fieldValidator = numValidator;
    } else {
      let strValidator = zod.string();
      if (input.validation?.required) {
        strValidator = strValidator.min(1, {
          message: input.validation.message || `${input.label} is required.`,
        });
      }
      if (input.validation?.pattern) {
        strValidator = strValidator.regex(new RegExp(input.validation.pattern), {
          message: input.validation.message || `Invalid format for ${input.label}.`,
        });
      }
      fieldValidator = strValidator;
    }

    schemaFields[input.id] = fieldValidator;
  });

  const formSchema = zod.object(schemaFields);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  // Watch form inputs to run calculations in real-time
  const watchedValues = watch();
  const outputs = (isValid ? calculate(watchedValues) : {}) as Record<string, any>;

  // Debounced auto-saving to local history context
  const stringifiedInputs = JSON.stringify(watchedValues);
  useEffect(() => {
    if (!isValid || !stringifiedInputs) return;

    const timer = setTimeout(() => {
      const parsedInputs = JSON.parse(stringifiedInputs);
      const currentOutputs = calculate(parsedInputs) as Record<string, any>;
      if (Object.keys(currentOutputs).length === 0) return;

      let summaryText = "";
      if (currentOutputs.summaryText) {
        summaryText = String(currentOutputs.summaryText);
      } else if (currentOutputs.bmi) {
        summaryText = `BMI: ${Number(currentOutputs.bmi).toFixed(1)} (${currentOutputs.category})`;
      } else if (currentOutputs.monthlyPayment) {
        summaryText = `EMI: $${Number(currentOutputs.monthlyPayment).toFixed(2)}`;
      } else if (currentOutputs.result) {
        summaryText = `Result: ${Number(currentOutputs.result).toFixed(4)}`;
      }

      addHistory(toolSlug, parsedInputs, currentOutputs, summaryText);
    }, 2000);

    return () => clearTimeout(timer);
  }, [stringifiedInputs, isValid, addHistory, toolSlug, calculate]);

  // Copy shareable link (encodes inputs as search parameters)
  const handleCopyShareLink = async () => {
    try {
      const params = new URLSearchParams();
      Object.entries(watchedValues).forEach(([k, v]) => {
        params.set(k, String(v));
      });
      const shareUrl = `${window.location.origin}${pathname}?${params.toString()}`;
      await navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  // Trigger manual history save trigger
  const handleManualSave = () => {
    if (!isValid) return;
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 1500);
  };

  // Formatter helper
  const formatOutput = (val: any, outputDef: any) => {
    if (val === undefined || val === null || isNaN(Number(val))) return String(val);
    const num = Number(val);
    const precision = outputDef.precision !== undefined ? outputDef.precision : 2;

    if (outputDef.format === "currency") {
      return `$${num.toLocaleString(undefined, { minimumFractionDigits: precision, maximumFractionDigits: precision })}`;
    }
    if (outputDef.format === "percent") {
      return `${num.toLocaleString(undefined, { minimumFractionDigits: precision, maximumFractionDigits: precision })}%`;
    }
    return num.toLocaleString(undefined, { minimumFractionDigits: precision, maximumFractionDigits: precision });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 1. INPUT FORM COLUMN */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-border/50">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-primary" />
            <span>Configure Inputs</span>
          </h3>
          <span className="text-[10px] text-muted-foreground font-semibold">Real-time Calculation</span>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            {config.inputs.map((input: any) => {
              const error = errors[input.id];
              const gridSpanClass = input.gridSpan === "half" ? "col-span-1" : "col-span-2";

              return (
                <div key={input.id} className={`${gridSpanClass} space-y-1.5 text-left`}>
                  <label htmlFor={input.id} className="text-xs font-bold text-foreground block">
                    {input.label}
                  </label>

                  {/* Input Type Select */}
                  {input.type === "select" && (
                    <select
                      id={input.id}
                      {...register(input.id, { valueAsNumber: typeof input.defaultValue === "number" })}
                      className="w-full h-12 rounded-xl border border-border bg-input px-3 py-3 text-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer"
                    >
                      {input.options?.map((opt: any) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* Input Type Radio / Button Grid */}
                  {input.type === "radio" && (
                    <div className="grid grid-cols-2 gap-2">
                      {input.options?.map((opt: any) => {
                        const isChecked = watchedValues[input.id] === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setValue(input.id, opt.value, { shouldValidate: true })}
                            className={`p-3 h-12 rounded-xl border text-xs font-bold text-center cursor-pointer transition-all duration-200 ${
                              isChecked
                                ? "bg-primary/10 border-primary text-primary"
                                : "bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Input Type Text / Area */}
                  {input.type === "textarea" && (
                    <textarea
                      id={input.id}
                      rows={4}
                      placeholder={input.placeholder}
                      {...register(input.id)}
                      className="w-full rounded-xl border border-border bg-input px-3 py-3 text-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    />
                  )}

                  {/* Input Type Date */}
                  {input.type === "date" && (
                    <input
                      id={input.id}
                      type="date"
                      {...register(input.id)}
                      className="w-full h-12 rounded-xl border border-border bg-input px-3 py-3 text-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer"
                    />
                  )}

                  {/* Input Type Numbers (with optional slider integration) */}
                  {input.type === "number" && (
                    <div className="space-y-1.5">
                      <input
                        id={input.id}
                        type="number"
                        step={input.step || "any"}
                        {...register(input.id, { valueAsNumber: true })}
                        placeholder={input.placeholder}
                        className={`w-full h-12 rounded-xl border bg-input px-3 py-3 text-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all ${
                          error ? "border-destructive focus:ring-destructive" : "border-border"
                        }`}
                      />
                      
                      {/* Dynamic range slider linking for numeric variables with min & max defined */}
                      {input.validation?.min !== undefined && input.validation?.max !== undefined && (
                        <div className="flex items-center gap-3 pt-1 px-1">
                          <input
                            type="range"
                            min={input.validation.min}
                            max={input.validation.max}
                            step={input.step || 1}
                            value={Number(watchedValues[input.id]) || input.defaultValue}
                            onChange={(e) => setValue(input.id, Number(e.target.value), { shouldValidate: true })}
                            className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                          <span className="text-[10px] font-mono font-bold text-muted-foreground select-none shrink-0">
                            {input.validation.min} - {input.validation.max}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {input.description && (
                    <p className="text-[10px] text-muted-foreground/80 leading-relaxed px-1">
                      {input.description}
                    </p>
                  )}
                  {error && (
                    <p className="text-[10px] text-destructive font-medium pl-1">
                      {String(error.message)}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </form>
      </div>

      {/* 2. OUTPUT RESULTS COLUMN */}
      <div className="rounded-2xl border border-border bg-muted/20 p-5 flex flex-col gap-4 text-left">
        <div className="flex items-center justify-between pb-2 border-b border-border/50">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Calculated Output</span>
          </h3>
          <div className="flex items-center gap-1">
            <button
              onClick={handleCopyShareLink}
              className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              title="Copy shareable configuration link"
            >
              {copiedLink ? <Check className="w-4.5 h-4.5 text-emerald-500" /> : <Share2 className="w-4.5 h-4.5" />}
            </button>
            <button
              onClick={handleManualSave}
              className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              title="Save snapshot to history log"
            >
              {saveSuccess ? <Check className="w-4.5 h-4.5 text-emerald-500" /> : <Save className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Dynamic Outputs loop */}
        <div className="flex-1 space-y-4">
          {isValid ? (
            config.outputs.map((out: any) => {
              const val = outputs[out.id];
              
              // Custom Widget Render: BMI / Metric Gauge
              if (out.type === "gauge" && out.id === "gaugeVal") {
                const bmiVal = Number(val) || 0;
                const pct = Math.min(100, Math.max(0, ((bmiVal - 15) / 25) * 100)); // Map BMI 15-40 to 0-100%
                
                let markerColor = "bg-primary";
                if (bmiVal < 18.5) markerColor = "bg-sky-500";
                else if (bmiVal >= 18.5 && bmiVal < 25) markerColor = "bg-emerald-500";
                else if (bmiVal >= 25 && bmiVal < 30) markerColor = "bg-yellow-500";
                else markerColor = "bg-rose-500";

                return (
                  <div key={out.id} className="space-y-2">
                    <span className="text-xs font-bold text-muted-foreground block">{out.label}</span>
                    <div className="relative h-4 w-full rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-rose-400 p-0.5 shadow-inner">
                      {bmiVal > 0 && (
                        <motion.div
                          animate={{ left: `${pct}%` }}
                          transition={{ type: "spring", stiffness: 80 }}
                          className={`absolute -top-1 w-6 h-6 rounded-full border-2 border-white shadow flex items-center justify-center -ml-3 text-[9px] font-black text-white ${markerColor}`}
                        >
                          {bmiVal.toFixed(1)}
                        </motion.div>
                      )}
                    </div>
                    <div className="flex justify-between text-[9px] font-bold text-muted-foreground px-1 font-mono uppercase">
                      <span>Underweight</span>
                      <span>Normal</span>
                      <span>Overweight</span>
                      <span>Obese</span>
                    </div>
                  </div>
                );
              }

              // Custom Widget Render: Data Table (Amortization schedule etc)
              if (out.type === "table" && Array.isArray(val)) {
                if (val.length === 0) return null;
                const headers = Object.keys(val[0]);
                return (
                  <div key={out.id} className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-muted-foreground block">{out.label}</span>
                    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
                      <div className="overflow-x-auto max-h-[220px]">
                        <table className="w-full text-left border-collapse text-xs font-medium">
                          <thead className="bg-muted text-muted-foreground font-bold border-b border-border sticky top-0">
                            <tr>
                              {headers.map((h) => (
                                <th key={h} className="p-2.5 font-mono">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border/60 text-foreground font-mono">
                            {val.map((row, idx) => (
                              <tr key={idx} className="hover:bg-muted/30 transition-colors">
                                {headers.map((h) => (
                                  <td key={h} className="p-2">{row[h]}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              }

              // HTML Block Rendering (Swatch, Canvas etc)
              if (out.type === "html") {
                return (
                  <div key={out.id} className="space-y-1.5" dangerouslySetInnerHTML={{ __html: val }} />
                );
              }

              // Text output rendered as full-width code box for case converters
              if (out.id === "convertedText" || out.type === "textarea") {
                return (
                  <div key={out.id} className="space-y-1.5 w-full">
                    <label className="text-xs font-bold text-muted-foreground block">{out.label}</label>
                    <div className="relative rounded-xl border border-border bg-card p-3 shadow-sm min-h-[100px] flex flex-col justify-between">
                      <pre className="text-xs text-foreground font-mono whitespace-pre-wrap select-all focus:outline-none">{String(val)}</pre>
                      <button
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(String(val));
                            const btn = document.getElementById("copy-btn-" + out.id);
                            if (btn) btn.innerHTML = "Copied!";
                            setTimeout(() => { if (btn) btn.innerHTML = "Copy"; }, 1500);
                          } catch (e) { console.error(e); }
                        }}
                        id={"copy-btn-" + out.id}
                        className="inline-flex items-center self-end mt-2 px-4 py-2 rounded-lg border border-border hover:bg-muted text-xs font-bold text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-sm gap-1"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                );
              }

              // Standard numeric/text block rendering
              return (
                <div key={out.id} className="flex justify-between items-baseline py-2.5 border-b border-border/40 gap-4">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-foreground">{out.label}</span>
                    {out.description && <p className="text-[10px] text-muted-foreground">{out.description}</p>}
                  </div>
                  <span className="text-sm font-black font-mono text-primary select-all text-right shrink-0">
                    {out.type === "number" ? formatOutput(val, out) : String(val)}
                    {out.unit && <span className="text-[10px] text-muted-foreground pl-0.5 font-sans font-medium">{out.unit}</span>}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
              <p className="text-sm font-semibold">Inputs are invalid or empty.</p>
              <p className="text-xs mt-1">Please fill in correct numbers above to calculate results.</p>
            </div>
          )}
        </div>

        {/* 3. EXPORT FOOTER PANEL */}
        {isValid && Object.keys(outputs).length > 0 && (
          <div className="pt-4 border-t border-border/50 flex justify-between items-center gap-4">
            <span className="text-[10px] font-bold text-muted-foreground uppercase font-mono">Format Export:</span>
            <div className="flex gap-2">
              <button
                onClick={() => exportToCSV(config.title, watchedValues, outputs)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-bold text-muted-foreground hover:text-foreground shadow-sm transition-all cursor-pointer"
                title="Download CSV amortization log"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV</span>
              </button>
              <button
                onClick={() => exportToText(config.title, watchedValues, outputs)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-muted text-xs font-bold text-muted-foreground hover:text-foreground shadow-sm transition-all cursor-pointer"
                title="Download Plain Text calculation file"
              >
                <Download className="w-3.5 h-3.5" />
                <span>TXT Report</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
