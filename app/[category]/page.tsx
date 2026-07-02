import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { categories, getCategoryIcon } from "@/config/categories";
import { getToolsByCategory } from "@/tools/registry";
import { ArrowRight, Sparkles, BookOpen, AlertCircle } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// 1. Generate Static Params for build-time compilation
export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

// 2. Generate dynamic metadata for categories
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.category);
  if (!category) return {};

  const title = `Free ${category.name} Calculators & Tools | LowkeyDevs`;
  const description = `Explore high-performance, free online ${category.name.toLowerCase()} calculators. ${category.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://lowkeydevs.com/${category.slug}`,
    },
  };
}

// 3. Category Page Component
export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.slug === resolvedParams.category);

  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategory(resolvedParams.category);
  const CategoryIcon = getCategoryIcon(category.iconName);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Category Hero Banner */}
        <div className="relative rounded-3xl border border-border bg-card/40 p-8 md:p-12 overflow-hidden shadow-sm">
          <div className={`absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gradient-to-tr ${category.bgGradient} blur-3xl pointer-events-none`} />
          
          <div className="max-w-2xl text-left space-y-4 relative">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${category.color}`}>
              <CategoryIcon className="w-4 h-4 shrink-0" />
              <span>{category.name} Utilities</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground capitalize">
              {category.name} Calculators
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {category.description} Run checks instantly with 100% client-side computing. Zero installation, zero tracking, and absolute accuracy.
            </p>
          </div>
        </div>

        {/* Top Ad placement */}
        <AdPlaceholder slot="category-top-banner" type="banner" />

        {/* Grid and list of tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTools.length > 0 ? (
            categoryTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${category.slug}/${tool.slug}`}
                className="group rounded-2xl border border-border bg-card/60 p-6 shadow-sm flex flex-col justify-between hover:scale-[1.01] hover:border-primary/20 hover:bg-primary/5 transition-all-300"
              >
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border ${category.color} bg-card`}>
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    {tool.trending && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] bg-primary/20 border border-primary/20 text-primary font-bold uppercase tracking-wider">
                        Trending
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-1">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-6 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                    <span>Run Calculator</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 translate-x-[-4px] group-hover:translate-x-0 transition-transform" />
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-muted-foreground bg-card/25 rounded-2xl border border-border">
              <p className="text-sm font-semibold">More tools under development.</p>
              <p className="text-xs mt-1">We are actively building calculators for this section. Check back soon!</p>
              <Link
                href="/search"
                className="mt-4 inline-block px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:opacity-90 transition-opacity"
              >
                Browse All Active Tools
              </Link>
            </div>
          )}
        </div>

        {/* Section: Category Context & Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="rounded-2xl border border-border bg-card/40 p-6 space-y-4">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>How to use {category.name} Tools</span>
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Select one of the tools from the cards grid above to begin. Enter your numerical inputs in the form panel, and the calculator will automatically process the formula and show formatting output metrics on the fly.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              You can export results to CSV spreadsheets or txt report files directly, or copy a parameterized shareable link to save your inputs.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card/40 p-6 space-y-4">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              <span>Computational Integrity</span>
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Our calculation engines are fully written in client-side Javascript. This guarantees that your sensitive parameters (like personal budgets, body metric values, or dates) are processed 100% on your device and never uploaded to remote servers.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We verify all formulas against official guidelines (e.g. WHO specifications for health calculations, financial amortization matrices for loans).
            </p>
          </div>
        </div>

        {/* Bottom Ad banner */}
        <AdPlaceholder slot="category-bottom-banner" type="banner" />
      </main>

      <Footer />
    </div>
  );
}
