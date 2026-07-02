"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { ThumbsUp, ThumbsDown, AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const feedbackSchema = zod.object({
  comments: zod.string().min(5, { message: "Comments must be at least 5 characters long." }),
  email: zod.string().email({ message: "Please enter a valid email address." }).optional().or(zod.literal("")),
});

type FeedbackFormValues = zod.infer<typeof feedbackSchema>;

interface FeedbackProps {
  toolSlug: string;
  toolTitle: string;
}

export default function Feedback({ toolSlug, toolTitle }: FeedbackProps) {
  const [rating, setRating] = useState<"up" | "down" | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
  });

  const handleRating = (value: "up" | "down") => {
    setRating(value);
    setShowForm(true);
  };

  const onSubmit = async (data: FeedbackFormValues) => {
    setLoading(true);
    // Mock API post
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="rounded-xl border border-border bg-card/40 p-5 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-foreground">Was the {toolTitle} helpful?</h4>
          <p className="text-xs text-muted-foreground">Your feedback helps us refine our calculation engines.</p>
        </div>

        {!submitted && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleRating("up")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                rating === "up"
                  ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground border-transparent active:scale-95"
              }`}
              aria-label="Thumbs up, helpful"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span>Yes</span>
            </button>
            <button
              onClick={() => handleRating("down")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                rating === "down"
                  ? "bg-destructive/10 text-destructive border-destructive/30"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground border-transparent active:scale-95"
              }`}
              aria-label="Thumbs down, not helpful"
            >
              <ThumbsDown className="w-3.5 h-3.5" />
              <span>No</span>
            </button>
          </div>
        )}

        {submitted && (
          <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Feedback submitted. Thank you!</span>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showForm && !submitted && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="pt-2 border-t border-border/50 space-y-3">
              <div className="space-y-1">
                <label htmlFor="comments" className="text-xs font-semibold text-muted-foreground block">
                  {rating === "up" ? "What did you like about this tool?" : "What went wrong or can be improved?"}
                </label>
                <textarea
                  id="comments"
                  rows={3}
                  placeholder={
                    rating === "up"
                      ? "Explain what was helpful or request additional features..."
                      : "Report a bug, calculation issue, or suggest layout adjustments..."
                  }
                  {...register("comments")}
                  className="w-full rounded-lg border border-border bg-input/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                  disabled={loading}
                />
                {errors.comments && (
                  <p className="text-xs text-destructive font-medium pl-1">{errors.comments.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 space-y-1">
                  <input
                    type="email"
                    placeholder="Email address (optional)"
                    {...register("email")}
                    className="w-full rounded-lg border border-border bg-input/40 px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                    disabled={loading}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive font-medium pl-1">{errors.email.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-1.5 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all gap-1 self-end sm:self-auto h-8 shrink-0 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="w-3.5 h-3.5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Report</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-muted-foreground/60 flex items-center gap-1.5">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>Your device telemetry and tool inputs are not recorded.</span>
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
