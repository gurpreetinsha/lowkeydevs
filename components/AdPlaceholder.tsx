"use client";

import { useTheme } from "./ThemeProvider";
import { Sparkles } from "lucide-react";

interface AdPlaceholderProps {
  slot?: string;
  type?: "banner" | "sidebar" | "inline";
}

export default function AdPlaceholder({ slot = "default", type = "banner" }: AdPlaceholderProps) {
  const { isPremium } = useTheme();

  if (isPremium) {
    return (
      <div className="flex items-center justify-center p-3 rounded-lg border border-primary/20 bg-primary/5 text-xs text-primary/80 font-medium select-none shadow-sm gap-2 transition-all duration-300">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-primary" />
        <span>Ad Space • Disabled via LowkeyDevs Premium</span>
      </div>
    );
  }

  const dimensions = {
    banner: "min-h-[90px] w-full md:min-h-[120px]",
    sidebar: "min-h-[250px] w-full",
    inline: "min-h-[100px] w-full",
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-xl border border-dashed border-muted-foreground/30 bg-muted/40 p-4 transition-all duration-300 ${dimensions[type]}`}
    >
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">
        Advertisement
      </span>
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-xs text-muted-foreground/80 font-mono">
          Ad slot #{slot} (Responsive)
        </p>
        <p className="text-[10px] text-muted-foreground/60 max-w-[200px]">
          Support us by joining Premium to remove all ads instantly.
        </p>
      </div>
      <div className="absolute right-2 bottom-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
    </div>
  );
}
