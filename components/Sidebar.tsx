"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getToolsByCategory, getAllTools, getToolBySlug } from "@/tools/registry";
import { useTheme } from "./ThemeProvider";
import { categories, getCategoryIcon } from "@/config/categories";
import { 
  Sparkles, 
  History, 
  TrendingUp, 
  ArrowRight,
  BookOpen
} from "lucide-react";
import AdPlaceholder from "./AdPlaceholder";

interface SidebarProps {
  currentCategorySlug?: string;
  currentToolSlug?: string;
  relatedSlugs?: string[];
}

export default function Sidebar({ 
  currentCategorySlug, 
  currentToolSlug, 
  relatedSlugs = [] 
}: SidebarProps) {
  const { isPremium, setPremium } = useTheme();
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);

  // Load recently viewed tools from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("lowkeydevs-recently-viewed");
      if (stored) {
        const slugs = JSON.parse(stored) as string[];
        const tools = slugs
          .filter((s) => s !== currentToolSlug)
          .map((s) => getToolBySlug(s))
          .filter((t): t is any => !!t)
          .slice(0, 4);
        setRecentlyViewed(tools);
      }
      
      // Save current tool as recently viewed
      if (currentToolSlug) {
        const storedSlugs = localStorage.getItem("lowkeydevs-recently-viewed");
        const currentSlugs = storedSlugs ? (JSON.parse(storedSlugs) as string[]) : [];
        const updated = [currentToolSlug, ...currentSlugs.filter((s) => s !== currentToolSlug)].slice(0, 10);
        localStorage.setItem("lowkeydevs-recently-viewed", JSON.stringify(updated));
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentToolSlug]);

  // Load related tools or same category tools
  const relatedTools = relatedSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is any => !!t)
    .slice(0, 4);

  const categoryTools = currentCategorySlug
    ? getToolsByCategory(currentCategorySlug)
        .filter((t) => t.slug !== currentToolSlug)
        .slice(0, 4)
    : [];

  const trendingTools = getAllTools()
    .filter((t) => t.trending && t.slug !== currentToolSlug)
    .slice(0, 4);

  const recommendedTools = relatedTools.length > 0
    ? relatedTools
    : categoryTools.length > 0
    ? categoryTools
    : trendingTools;

  return (
    <aside className="space-y-6">
      {/* Monetization: Upgrade Card */}
      {!isPremium && (
        <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-indigo-500/10 p-5 shadow-sm overflow-hidden flex flex-col gap-3">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 rounded-full bg-primary/20 blur-xl pointer-events-none" />
          <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span>LowkeyDevs Pro</span>
          </div>
          <h4 className="text-sm font-bold text-foreground">Remove all ads forever</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Unlock advanced UI options, client-side history logs export, and premium console/midnight styling skins.
          </p>
          <button
            onClick={() => setPremium(true)}
            className="w-full inline-flex items-center justify-center p-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 active:scale-95 shadow transition-all duration-200 cursor-pointer"
          >
            Upgrade for $0 (Free simulation)
          </button>
        </div>
      )}

      {/* Sidebar Ad Placement */}
      <AdPlaceholder slot="sidebar-top" type="sidebar" />

      {/* Recommended Tools */}
      <div className="rounded-2xl border border-border bg-card/40 p-4 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 px-1">
          <TrendingUp className="w-3.5 h-3.5 text-primary" />
          <span>{relatedTools.length > 0 ? "Related Tools" : "Same Category"}</span>
        </h4>
        <div className="space-y-1.5">
          {recommendedTools.length > 0 ? (
            recommendedTools.map((tool) => {
              const matchedCat = categories.find((c) => c.slug === tool.category);
              const Icon = getCategoryIcon(matchedCat?.iconName || "");
              return (
                <Link
                  key={tool.slug}
                  href={`/${tool.category}/${tool.slug}`}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-muted/40 group transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`p-1.5 rounded-lg border ${matchedCat?.color || "text-foreground"} shrink-0`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                      {tool.title}
                    </span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-muted-foreground/60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })
          ) : (
            <p className="text-xs text-muted-foreground p-2">No related tools found.</p>
          )}
        </div>
      </div>

      {/* Recently Viewed */}
      {recentlyViewed.length > 0 && (
        <div className="rounded-2xl border border-border bg-card/40 p-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 px-1">
            <History className="w-3.5 h-3.5 text-primary" />
            <span>Recently Viewed</span>
          </h4>
          <div className="space-y-1.5">
            {recentlyViewed.map((tool) => {
              const matchedCat = categories.find((c) => c.slug === tool.category);
              const Icon = getCategoryIcon(matchedCat?.iconName || "");
              return (
                <Link
                  key={tool.slug}
                  href={`/${tool.category}/${tool.slug}`}
                  className="flex items-center justify-between p-2 rounded-xl hover:bg-muted/40 group transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="p-1.5 rounded-lg border border-border text-muted-foreground shrink-0 bg-card">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                      {tool.title}
                    </span>
                  </div>
                  <ArrowRight className="w-3 h-3 text-muted-foreground/60 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Support Info Card */}
      <div className="rounded-2xl border border-border bg-card/40 p-4 space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 px-1">
          <BookOpen className="w-3.5 h-3.5 text-primary" />
          <span>Accuracy Guarantee</span>
        </h4>
        <p className="text-[10px] text-muted-foreground leading-relaxed px-1">
          LowkeyDevs utilities are tested against thousands of edge cases for absolute precision. Calculations occur locally inside your browser; no input telemetry or parameters are sent back to servers.
        </p>
      </div>

      {/* Sidebar Ad Placement Bottom */}
      <AdPlaceholder slot="sidebar-bottom" type="sidebar" />
    </aside>
  );
}
