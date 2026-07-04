"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { calculate } from "./calculate";
import { History } from "lucide-react";
import confetti from "canvas-confetti";

export default function ScientificCalculator() {
  const { addHistory } = useTheme();
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("0");
  const [isRad, setIsRad] = useState(false);
  const [equationHistory, setEquationHistory] = useState<{ eq: string; res: string }[]>([]);

  const handleKeyPress = (val: string) => {
    setDisplay((prev) => prev + val);
  };

  const handleClear = () => {
    setDisplay("");
    setResult("0");
  };

  const handleBackspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const handleEvaluate = useCallback(() => {
    if (!display.trim()) return;

    const calcResult = calculate({ equation: display, mode: isRad ? "rad" : "deg" });
    setResult(calcResult.result);

    if (!calcResult.result.startsWith("Error")) {
      // Add to local state history
      setEquationHistory((prev) => [{ eq: display, res: calcResult.result }, ...prev].slice(0, 5));
      // Save in global history
      addHistory("scientific", { equation: display, mode: isRad ? "rad" : "deg" }, { result: calcResult.result }, `${display} = ${calcResult.result}`);
      
      // Trigger a mini success confetti burst for premium feel
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  }, [display, isRad, addHistory]);

  // Connect physical keyboard inputs
  useEffect(() => {
    const handlePhysicalKeys = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      // Skip if typing in an input or textarea
      if (activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA")) {
        return;
      }

      if (e.key >= "0" && e.key <= "9") {
        handleKeyPress(e.key);
      } else if (["+", "-", "*", "/", "(", ")", "."].includes(e.key)) {
        handleKeyPress(e.key);
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        handleEvaluate();
      } else if (e.key === "Backspace") {
        handleBackspace();
      } else if (e.key === "Escape") {
        handleClear();
      }
    };
    window.addEventListener("keydown", handlePhysicalKeys);
    return () => window.removeEventListener("keydown", handlePhysicalKeys);
  }, [display, isRad, handleEvaluate]);

  const btnGrid = [
    { label: "DEG", action: () => setIsRad(false), active: !isRad, category: "mode" },
    { label: "RAD", action: () => setIsRad(true), active: isRad, category: "mode" },
    { label: "(", action: () => handleKeyPress("("), category: "sci" },
    { label: ")", action: () => handleKeyPress(")"), category: "sci" },
    
    { label: "sin", action: () => handleKeyPress("sin("), category: "sci" },
    { label: "cos", action: () => handleKeyPress("cos("), category: "sci" },
    { label: "tan", action: () => handleKeyPress("tan("), category: "sci" },
    { label: "C", action: handleClear, category: "action" },
    
    { label: "log", action: () => handleKeyPress("log("), category: "sci" },
    { label: "ln", action: () => handleKeyPress("ln("), category: "sci" },
    { label: "√", action: () => handleKeyPress("sqrt("), category: "sci" },
    { label: "⌫", action: handleBackspace, category: "action" },
    
    { label: "π", action: () => handleKeyPress("π"), category: "sci" },
    { label: "e", action: () => handleKeyPress("e"), category: "sci" },
    { label: "^", action: () => handleKeyPress("^"), category: "sci" },
    { label: "/", action: () => handleKeyPress("/"), category: "operator" },
    
    { label: "7", action: () => handleKeyPress("7"), category: "num" },
    { label: "8", action: () => handleKeyPress("8"), category: "num" },
    { label: "9", action: () => handleKeyPress("9"), category: "num" },
    { label: "*", action: () => handleKeyPress("*"), category: "operator" },
    
    { label: "4", action: () => handleKeyPress("4"), category: "num" },
    { label: "5", action: () => handleKeyPress("5"), category: "num" },
    { label: "6", action: () => handleKeyPress("6"), category: "num" },
    { label: "-", action: () => handleKeyPress("-"), category: "operator" },
    
    { label: "1", action: () => handleKeyPress("1"), category: "num" },
    { label: "2", action: () => handleKeyPress("2"), category: "num" },
    { label: "3", action: () => handleKeyPress("3"), category: "num" },
    { label: "+", action: () => handleKeyPress("+"), category: "operator" },
    
    { label: "0", action: () => handleKeyPress("0"), category: "num" },
    { label: ".", action: () => handleKeyPress("."), category: "num" },
    { label: "=", action: handleEvaluate, category: "equals" },
  ];

  return (
    <div className="max-w-md mx-auto rounded-2xl border border-border bg-card p-5 shadow-lg space-y-4">
      {/* Display Block */}
      <div className="rounded-xl border border-border bg-input p-4 text-right space-y-1 shadow-inner relative overflow-hidden">
        <span className="absolute top-2 left-2 text-[8px] bg-primary/20 text-primary px-1 rounded font-bold uppercase tracking-wider font-sans select-none">
          {isRad ? "RAD MODE" : "DEG MODE"}
        </span>
        <div className="text-xs font-mono text-muted-foreground/80 truncate h-4 tracking-wide leading-none">
          {display || " "}
        </div>
        <div className="text-2xl font-black font-mono text-foreground truncate h-8 tracking-wider">
          {result}
        </div>
      </div>

      {/* Button Keypad */}
      <div className="grid grid-cols-4 gap-2">
        {btnGrid.map((btn, idx) => {
          let styleClass = "";
          
          if (btn.category === "mode") {
            styleClass = btn.active
              ? "bg-primary text-primary-foreground font-black shadow-md border-primary"
              : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted";
          } else if (btn.category === "sci") {
            styleClass = "bg-muted/40 text-foreground hover:bg-muted/70 font-mono font-bold text-xs";
          } else if (btn.category === "action") {
            styleClass = "bg-rose-500/10 text-rose-500 border-rose-500/20 hover:bg-rose-500/20 font-black";
          } else if (btn.category === "operator") {
            styleClass = "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 font-black";
          } else if (btn.category === "num") {
            styleClass = "bg-card text-foreground border-border hover:bg-muted font-bold";
          } else if (btn.category === "equals") {
            styleClass = "col-span-2 bg-gradient-to-r from-primary to-indigo-600 text-white border-transparent font-black shadow hover:opacity-90";
          }

          return (
            <button
              key={idx}
              onClick={btn.action}
              className={`h-12 rounded-xl border flex items-center justify-center text-xs select-none active:scale-95 transition-all duration-150 cursor-pointer ${styleClass}`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Expression History logs */}
      {equationHistory.length > 0 && (
        <div className="pt-3 border-t border-border/60 space-y-2">
          <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
            <History className="w-3.5 h-3.5" />
            <span>Keypad History</span>
          </h4>
          <div className="space-y-1">
            {equationHistory.map((item, index) => (
              <div
                key={index}
                onClick={() => { setDisplay(item.eq); setResult(item.res); }}
                className="flex items-center justify-between p-1.5 rounded-lg bg-muted/20 hover:bg-muted/40 font-mono text-[10px] cursor-pointer text-muted-foreground hover:text-foreground transition-all"
              >
                <span className="truncate max-w-[200px]">{item.eq}</span>
                <span className="font-bold text-primary">{item.res}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
