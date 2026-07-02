"use client";

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";
import AdPlaceholder from "./AdPlaceholder";
import Feedback from "./Feedback";
import { useTheme } from "./ThemeProvider";
import { categories, getCategoryIcon } from "@/config/categories";
import { 
  Heart, 
  Printer, 
  Share2, 
  AlertTriangle,
  Copy,
  Check,
  Mail,
  Calendar,
  Eye,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CalculatorLayoutProps {
  children: React.ReactNode;
  toolConfig: any;
  explanationContent?: React.ReactNode;
}

export default function CalculatorLayout({ 
  children, 
  toolConfig,
  explanationContent 
}: CalculatorLayoutProps) {
  const { isFavorite, toggleFavorite, isPremium } = useTheme();
  const [copiedLink, setCopiedLink] = useState(false);
  const [shareDropdownOpen, setShareDropdownOpen] = useState(false);

  const matchedCategory = categories.find((c) => c.slug === toolConfig.category);
  const CategoryIcon = getCategoryIcon(matchedCategory?.iconName || "");
  const ToolIcon = getCategoryIcon(toolConfig.icon);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const shareText = `Check out the free ${toolConfig.title} on LowkeyDevs!`;
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`,
    email: `mailto:?subject=${encodeURIComponent(toolConfig.title)}&body=${encodeURIComponent(shareText + "\n" + (typeof window !== "undefined" ? window.location.href : ""))}`,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main Page Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Breadcrumbs */}
        <div className="flex items-center justify-between gap-4">
          <Breadcrumbs 
            category={matchedCategory ? { name: matchedCategory.name, slug: matchedCategory.slug } : undefined} 
            toolName={toolConfig.title} 
          />
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>12.4k views this week</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-2xl border border-border bg-card/40 p-6 md:p-8 overflow-hidden shadow-sm">
          <div className={`absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 rounded-full bg-gradient-to-tr ${matchedCategory?.bgGradient || "from-primary/5 to-indigo-500/5"} blur-3xl pointer-events-none`} />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl border flex items-center justify-center shrink-0 shadow-sm ${
                matchedCategory?.color || "text-foreground border-border"
              }`}>
                <ToolIcon className="w-7 h-7" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${matchedCategory?.color || "text-foreground border-border"}`}>
                    <CategoryIcon className="w-3 h-3 shrink-0" />
                    <span>{matchedCategory?.name || toolConfig.category}</span>
                  </span>
                  {toolConfig.featured && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] bg-primary/20 border border-primary/20 text-primary font-bold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                  {toolConfig.title}
                </h1>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  {toolConfig.description}
                </p>
              </div>
            </div>

            {/* Quick Actions (Share, Print, Favorite) */}
            <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(toolConfig.slug)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all-300 active:scale-95 flex items-center justify-center ${
                  isFavorite(toolConfig.slug)
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-500 hover:bg-rose-500/20"
                    : "bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                title={isFavorite(toolConfig.slug) ? "Remove from Favorites" : "Add to Favorites"}
              >
                <Heart className={`w-4 h-4 ${isFavorite(toolConfig.slug) ? "fill-rose-500" : ""}`} />
              </button>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-all-300 active:scale-95 flex items-center justify-center"
                title="Print Calculator Page"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Share Button Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShareDropdownOpen(!shareDropdownOpen)}
                  onBlur={() => setTimeout(() => setShareDropdownOpen(false), 200)}
                  className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-all-300 active:scale-95 flex items-center justify-center gap-1.5"
                  title="Share Calculator"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs font-bold hidden md:inline">Share</span>
                </button>

                {shareDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-card p-1.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <button
                      onClick={handleCopyLink}
                      className="w-full flex items-center justify-between p-2 rounded-lg text-left text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </span>
                      {copiedLink && <Check className="w-3.5 h-3.5 text-emerald-500" />}
                    </button>
                    <a
                      href={shareUrls.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-2 p-2 rounded-lg text-left text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      <span>Share on Twitter</span>
                    </a>
                    <a
                      href={shareUrls.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-2 p-2 rounded-lg text-left text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      <span>Share on Facebook</span>
                    </a>
                    <a
                      href={shareUrls.email}
                      className="w-full flex items-center gap-2 p-2 rounded-lg text-left text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Top Ad placement */}
        <AdPlaceholder slot="page-top-banner" type="banner" />

        {/* Main Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Main Content Pane */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* The interactive calculator block */}
            <div className="rounded-2xl border border-border bg-card/25 p-5 md:p-6 shadow-sm relative">
              {children}
            </div>

            {/* Explanation section */}
            {explanationContent}

            {/* Dynamic Formula Display */}
            {toolConfig.formula && (
              <div className="rounded-2xl border border-border bg-card/40 p-6 space-y-4">
                <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span>The Formula & Math Behind It</span>
                </h3>
                <div className="prose prose-sm dark:prose-invert max-w-none text-sm text-muted-foreground leading-relaxed space-y-3">
                  <p>{toolConfig.formula.description}</p>
                  {toolConfig.formula.latex && (
                    <div className="my-4 p-4 rounded-xl border border-border bg-muted/30 flex items-center justify-center overflow-x-auto text-foreground font-mono text-sm tracking-wide">
                      {toolConfig.formula.latex}
                    </div>
                  )}
                  {toolConfig.formula.steps && (
                    <div className="space-y-2">
                      <p className="font-bold text-foreground text-xs uppercase tracking-wider">
                        Calculation Steps:
                      </p>
                      <ol className="list-decimal list-inside space-y-1 text-xs">
                        {toolConfig.formula.steps.map((step: string, idx: number) => (
                          <li key={idx} className="pl-1"><span className="text-muted-foreground">{step}</span></li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Practical Examples */}
            {toolConfig.examples && toolConfig.examples.length > 0 && (
              <div className="rounded-2xl border border-border bg-card/40 p-6 space-y-4">
                <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <span>Practical Calculation Examples</span>
                </h3>
                <div className="space-y-4">
                  {toolConfig.examples.map((ex: any, idx: number) => (
                    <div key={idx} className="p-4 rounded-xl border border-border bg-muted/20 space-y-2 text-xs leading-relaxed text-muted-foreground">
                      <p className="font-bold text-foreground">Example #{idx + 1}:</p>
                      <div className="grid grid-cols-2 gap-4 my-2 text-xs font-mono">
                        <div className="bg-card p-2 rounded-lg border">
                          <span className="text-[10px] font-sans font-bold text-muted-foreground block uppercase">Inputs</span>
                          {Object.entries(ex.inputs).map(([k, v]: any) => (
                            <div key={k}>{k}: <span className="text-foreground">{String(v)}</span></div>
                          ))}
                        </div>
                        <div className="bg-card p-2 rounded-lg border border-primary/20">
                          <span className="text-[10px] font-sans font-bold text-primary block uppercase">Outputs</span>
                          {Object.entries(ex.outputs).map(([k, v]: any) => (
                            <div key={k}>{k}: <span className="text-primary font-bold">{String(v)}</span></div>
                          ))}
                        </div>
                      </div>
                      <p>{ex.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Block */}
            {toolConfig.faq && toolConfig.faq.length > 0 && (
              <div className="rounded-2xl border border-border bg-card/40 p-6 space-y-4">
                <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span>Frequently Asked Questions (FAQ)</span>
                </h3>
                <div className="space-y-3.5">
                  {toolConfig.faq.map((item: any, idx: number) => (
                    <div key={idx} className="space-y-1.5">
                      <h4 className="text-sm font-bold text-foreground">{item.question}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Feedback Widget */}
            <Feedback toolSlug={toolConfig.slug} toolTitle={toolConfig.title} />

            {/* Issue Report Notice */}
            <div className="flex items-center gap-2 justify-center p-3 rounded-xl border border-destructive/10 bg-destructive/5 text-[10px] font-semibold text-destructive/80 select-none">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>Calculation discrepancy? Please report a bug using the feedback box above.</span>
            </div>

          </div>

          {/* Right Sticky Sidebar Panel */}
          <div className="lg:col-sticky lg:top-24 space-y-6">
            <Sidebar 
              currentCategorySlug={toolConfig.category} 
              currentToolSlug={toolConfig.slug} 
              relatedSlugs={toolConfig.relatedTools} 
            />
          </div>

        </div>

        {/* Footer Ad banner */}
        <AdPlaceholder slot="page-bottom-banner" type="banner" />

        {/* Last updated tag & Author panel */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-border bg-card/20 text-[10px] text-muted-foreground font-semibold gap-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Last Updated: {toolConfig.publishDate || "July 2026"}</span>
          </div>
          <div>
            <span>Verified by: LowkeyDevs Math Editorial Board</span>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
