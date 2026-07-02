"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Sparkles, Command, ArrowRight, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getToolsByCategory, getToolBySlug, searchTools } from "@/tools/registry";
import { categories, getCategoryIcon } from "@/config/categories";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setActiveIndex(0);
      // Load recent searches
      try {
        const stored = localStorage.getItem("lowkeydevs-recent-searches");
        if (stored) setRecentSearches(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, [isOpen]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const matches = searchTools(query);
    setResults(matches);
    setActiveIndex(0);
  }, [query]);

  // Keyboard navigation inside search options
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : prev));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results.length > 0 && results[activeIndex]) {
        selectTool(results[activeIndex]);
      }
    }
  };

  const selectTool = (tool: any) => {
    // Add to recent searches
    const updated = [tool.title, ...recentSearches.filter((t) => t !== tool.title)].slice(0, 5);
    setRecentSearches(updated);
    try {
      localStorage.setItem("lowkeydevs-recent-searches", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    
    router.push(`/${tool.category}/${tool.slug}`);
    onClose();
  };

  const popularSearches = [
    { title: "Age Calculator", slug: "age", category: "time" },
    { title: "BMI Calculator", slug: "bmi", category: "health" },
    { title: "EMI Calculator", slug: "emi", category: "finance" },
    { title: "Scientific Calculator", slug: "scientific", category: "math" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            className="relative w-full max-w-xl mx-4 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-border px-4 py-3 gap-3">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search calculators (e.g. bmi, age, interest)..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground h-8"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results / Help panel */}
            <div className="max-h-[350px] overflow-y-auto p-4 space-y-4">
              {results.length > 0 ? (
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2">
                    Matching Calculators
                  </p>
                  {results.map((tool, idx) => {
                    const Icon = getCategoryIcon(categories.find(c => c.slug === tool.category)?.iconName || "");
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={tool.slug}
                        onClick={() => selectTool(tool)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-primary/5 border-primary/20 text-foreground"
                            : "bg-transparent border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg border bg-card shrink-0 ${
                            isActive ? "border-primary/30 text-primary" : "border-border"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-foreground capitalize">
                              {tool.title}
                            </p>
                            <p className="text-[10px] text-muted-foreground capitalize">
                              Category: {tool.category}
                            </p>
                          </div>
                        </div>
                        {isActive && (
                          <div className="flex items-center gap-1.5 text-[10px] text-primary font-semibold font-mono animate-fade-in shrink-0">
                            <span>Open</span>
                            <CornerDownLeft className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : query.trim() ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p className="text-sm font-semibold">No results found for &ldquo;{query}&rdquo;</p>
                  <p className="text-xs mt-1">Try searching for other terms like BMI, GST, Age or Loan.</p>
                </div>
              ) : (
                <>
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2">
                        Recent Searches
                      </p>
                      {recentSearches.map((searchTitle) => (
                        <button
                          key={searchTitle}
                          onClick={() => {
                            // Find tool slug by title
                            const matched = searchTools(searchTitle);
                            if (matched.length > 0) {
                              selectTool(matched[0]);
                            } else {
                              setQuery(searchTitle);
                            }
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/40 cursor-pointer"
                        >
                          <Command className="w-3.5 h-3.5 shrink-0" />
                          <span>{searchTitle}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Popular Searches */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2">
                      Popular Utilities
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {popularSearches.map((pop) => (
                        <button
                          key={pop.slug}
                          onClick={() => {
                            const match = getToolBySlug(pop.slug);
                            if (match) selectTool(match);
                          }}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 text-left text-xs font-bold text-foreground group cursor-pointer transition-all-300"
                        >
                          <span className="capitalize">{pop.title}</span>
                          <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Keyboard Shortcuts footer */}
            <div className="flex items-center justify-between border-t border-border px-4 py-2.5 bg-muted/30 text-[10px] text-muted-foreground font-semibold">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="bg-card border px-1 rounded">↑↓</kbd> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-card border px-1 rounded">Enter</kbd> Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="bg-card border px-1 rounded">Esc</kbd> Close
                </span>
              </div>
              <div className="flex items-center gap-1 text-primary">
                <Sparkles className="w-3 h-3" />
                <span>LowkeyDevs Engine</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
