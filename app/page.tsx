import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { categories, getCategoryIcon } from "@/config/categories";
import { getAllTools, getToolsByCategory } from "@/tools/registry";
import { 
  Sparkles, 
  Search, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  ArrowRight,
  TrendingUp
} from "lucide-react";

export default function Home() {
  const allTools = getAllTools();
  const featuredTools = allTools.filter((t) => t.featured).slice(0, 3);
  const trendingTools = allTools.filter((t) => t.trending).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-card/10 border-b border-border py-16 md:py-24">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 -ml-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 -mr-24 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-8 relative">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 border border-primary/20 text-primary">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-primary" />
            <span>100% Client-Side Calculations</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-none">
            High-Performance <span className="bg-gradient-to-r from-primary via-indigo-500 to-indigo-600 bg-clip-text text-transparent">Online Utilities</span>
          </h1>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fast, premium, and privacy-focused online calculators and tools. No cookies, no server tracking, and instant results.
          </p>

          {/* Quick Search Link Box */}
          <div className="max-w-md mx-auto">
            <Link
              href="/search"
              className="flex items-center justify-between px-4 py-3 rounded-2xl border border-border bg-card/60 hover:border-primary/30 text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer shadow transition-all-300"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-primary shrink-0" />
                <span>Search across {allTools.length} instant calculators...</span>
              </span>
              <kbd className="hidden sm:inline-flex items-center h-5 select-none rounded border border-border bg-muted/50 px-1.5 font-mono text-[9px] font-medium text-muted-foreground tracking-widest shrink-0">
                ⌘K
              </kbd>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Featured Tools Segment */}
        {featuredTools.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-extrabold text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Featured Utility Interfaces</span>
              </h2>
              <Link href="/search" className="text-xs font-bold text-primary hover:underline">
                View all tools
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredTools.map((tool) => {
                const matchedCat = categories.find((c) => c.slug === tool.category);
                const Icon = getCategoryIcon(matchedCat?.iconName || "");
                return (
                  <Link
                    key={tool.slug}
                    href={`/${tool.category}/${tool.slug}`}
                    className="group rounded-2xl border border-border bg-card/40 p-6 shadow-sm hover:scale-[1.01] hover:border-primary/20 hover:bg-primary/5 transition-all-300 text-left flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-xl border ${matchedCat?.color || "text-foreground"} bg-card`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-wider text-muted-foreground bg-muted/40 px-2 py-0.5 rounded">
                          {tool.category}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end text-[10px] font-bold text-primary mt-4 border-t border-border/40 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Banner Ad placement moved below featured tools */}
        <AdPlaceholder slot="homepage-hero-bottom" type="banner" />

        {/* Categories Section */}
        <section className="space-y-4">
          <h2 className="text-lg md:text-xl font-extrabold text-foreground flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span>Browse by Category</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const Icon = getCategoryIcon(cat.iconName);
              const count = getToolsByCategory(cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="group rounded-2xl border border-border bg-card/40 p-5 shadow-sm hover:scale-[1.01] hover:border-primary/20 hover:bg-primary/5 transition-all-300 text-left flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl border ${cat.color} bg-card flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors capitalize">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground border-t border-border/30 pt-3">
                    <span>{count} Tool{count !== 1 ? "s" : ""}</span>
                    <span className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex items-center gap-0.5">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Ad Placement */}
        <AdPlaceholder slot="homepage-middle-banner" type="banner" />

        {/* Dynamic Trending Tools List */}
        {trendingTools.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-extrabold text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>Trending Calculators</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trendingTools.map((tool) => {
                const matchedCat = categories.find((c) => c.slug === tool.category);
                const Icon = getCategoryIcon(matchedCat?.iconName || "");
                return (
                  <Link
                    key={tool.slug}
                    href={`/${tool.category}/${tool.slug}`}
                    className="group flex items-center justify-between p-3.5 rounded-xl border border-border bg-card hover:bg-muted/40 hover:border-primary/20 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 min-w-0 text-left">
                      <div className={`p-2 rounded-lg border ${matchedCat?.color || "text-foreground"} bg-card shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-foreground truncate">{tool.title}</p>
                        <p className="text-[10px] text-muted-foreground capitalize truncate">{tool.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/60 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Brand Mission & Core Values */}
        <section className="rounded-3xl border border-border bg-card/20 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-foreground">Zero-Tracker Privacy</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We process all mathematical iterations locally inside your browser. No parameters, financial entries, birth dates, or metadata are ever transmitted to our servers.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
              <Cpu className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-foreground">High-Performance Build</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Engineered using static build parameters in Next.js App Router and Tailwind CSS, LowkeyDevs loads in milliseconds, boasting clean Lighthouse efficiency.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
              <Zap className="w-4.5 h-4.5" />
            </div>
            <h3 className="text-sm font-bold text-foreground">Open Developer Keypads</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our tools support physical keyboard triggers, automatic input caching, history storage logs, and parameterized URL configurations for advanced developers.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
