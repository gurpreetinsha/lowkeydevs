"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

const newsletterSchema = zod.object({
  email: zod.string().email({ message: "Please enter a valid email address." }),
});

type NewsletterFormValues = zod.infer<typeof newsletterSchema>;

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubscribed(true);
    reset();
  };

  return (
    <div className="relative rounded-2xl border border-border bg-card/60 p-6 md:p-8 overflow-hidden shadow-md">
      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {!subscribed ? (
          <motion.div
            key="subscribe-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-left space-y-2 max-w-md">
              <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Productivity Newsletter</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Stay updated, stay optimized
              </h3>
              <p className="text-sm text-muted-foreground">
                Get monthly roundups of new developer resources, optimization tools, and cheat-sheets. No spam, unsubscribe anytime.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full md:w-auto md:min-w-[340px] space-y-2 shrink-0"
              noValidate
            >
              <div className="relative flex rounded-xl border border-border bg-input/50 p-1 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all duration-200">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none border-none"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 active:scale-95 transition-all duration-200 gap-1.5 disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Join</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
              {errors.email && (
                <p className="text-xs text-destructive pl-2 font-medium" id="email-error">
                  {errors.email.message}
                </p>
              )}
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-4 space-y-3"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500">
              <CheckCircle2 className="w-6 h-6 animate-bounce" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">You&apos;re on the list!</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                Thank you for subscribing! We&apos;ll keep you posted with the latest tools and features.
              </p>
            </div>
            <button
              onClick={() => setSubscribed(false)}
              className="text-xs text-primary font-semibold hover:underline"
            >
              Subscribe another email
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
