"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { useTheme } from "@/components/ThemeProvider";
import { categories, getCategoryIcon } from "@/config/categories";
import { getAllTools, searchTools, getToolsByCategory } from "@/tools/registry";
import { Search, Heart, LayoutGrid, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { favorites } = useTheme();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category") || "all");
  const [showOnlyFavs, setShowOnlyFavs] = useState<boolean>(searchParams.get("filter") === "favorites");
  const [filteredTools, setFilteredTools] = useState<any[]>([]);

  // Update query state when URL parameter changes
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
    setSelectedCategory(searchParams.get("category") || "all");
    setShowOnlyFavs(searchParams.get("filter") === "favorites");
  }, [searchParams]);

  // Core Filtering Logic
  useEffect(() => {
    let list = getAllTools();

    // 1. Search Query filter
    if (query.trim()) {
      list = searchTools(query);
    }

    // 2. Category filter
    if (selectedCategory !== "all") {
      list = list.filter((tool) => tool.category === selectedCategory);
    }

    // 3. Favorites filter
    if (showOnlyFavs) {
      list = list.filter((tool) => favorites.includes(tool.slug));
    }

    setFilteredTools(list);
  }, [query, selectedCategory, showOnlyFavs, favorites]);

  const updateQueryParams = (newQuery: string, newCat: string, newFavs: boolean) => {
    const params = new URLSearchParams();
    if (newQuery) params.set("q", newQuery);
    if (newCat !== "all") params.set("category", newCat);
    if (newFavs) params.set("filter", "favorites");
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Hero */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Explore All Utility Engines
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Search across our directory of optimized calculations. Filter by categories or view your favorites.
          </p>
        </div>

        {/* Dynamic Filters Bar */}
        <div className="rounded-2xl border border-border bg-card/40 p-5 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 flex rounded-xl border border-border bg-input/50 px-3 py-2 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all duration-200">
              <Search className="w-5 h-5 text-muted-foreground self-center shrink-0 mr-2" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  updateQueryParams(e.target.value, selectedCategory, showOnlyFavs);
                }}
                placeholder="Search tools by title, keyword, or category..."
                className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/60 h-8"
              />
            </div>

            {/* Favorites Toggle */}
            <button
              onClick={() => {
                const nextFav = !showOnlyFavs;
                setShowOnlyFavs(nextFav);
                updateQueryParams(query, selectedCategory, nextFav);
              }}
              className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 gap-1.5 cursor-pointer shrink-0 ${
                showOnlyFavs
                  ? "bg-rose-500/10 border-rose-500/30 text-rose-500 hover:bg-rose-500/20"
                  : "bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Heart className={`w-4 h-4 ${showOnlyFavs ? "fill-rose-500" : ""}`} />
              <span>Favorites ({favorites.length})</span>
            </button>
          </div>

          {/* Categories select pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 select-none scrollbar-thin">
            <button
              onClick={() => {
                setSelectedCategory("all");
                updateQueryParams(query, "all", showOnlyFavs);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All Categories</span>
            </button>

            {categories.map((cat) => {
              const Icon = getCategoryIcon(cat.iconName);
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => {
                    setSelectedCategory(cat.slug);
                    updateQueryParams(query, cat.slug, showOnlyFavs);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="capitalize">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ad Space */}
        <AdPlaceholder slot="search-results-banner" type="banner" />

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => {
              const matchedCat = categories.find((c) => c.slug === tool.category);
              const Icon = getCategoryIcon(matchedCat?.iconName || "");
              
              return (
                <Link
                  key={tool.slug}
                  href={`/${tool.category}/${tool.slug}`}
                  className="group relative rounded-2xl border border-border bg-card/60 p-5 shadow-sm flex flex-col justify-between hover:scale-[1.01] hover:border-primary/20 hover:bg-primary/5 transition-all-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className={`p-2.5 rounded-xl border ${matchedCat?.color || "text-foreground"} bg-card`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-wider text-muted-foreground/80 font-mono bg-muted/50 px-2 py-0.5 rounded border border-border">
                        {tool.category}
                      </span>
                    </div>

                    <div className="space-y-1 text-left">
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-4 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-primary" />
                      <span>Ready to compute</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 translate-x-[-4px] group-hover:translate-x-0 transition-transform" />
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center text-muted-foreground bg-card/20 rounded-2xl border border-border">
              <p className="text-sm font-semibold">No calculator tools match your criteria.</p>
              <p className="text-xs mt-1">Try resetting the query or category filters.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setSelectedCategory("all");
                  setShowOnlyFavs(false);
                  updateQueryParams("", "all", false);
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Ad banner */}
        <AdPlaceholder slot="search-bottom-banner" type="banner" />
      </main>

      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-muted-foreground">Loading Search Tools...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}
