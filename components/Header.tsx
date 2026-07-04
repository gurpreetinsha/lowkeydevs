"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme, Theme } from "./ThemeProvider";
import { categories, getCategoryIcon } from "@/config/categories";
import { 
  Search, 
  Sparkles, 
  Menu, 
  X, 
  ChevronDown, 
  Heart, 
  History, 
  Check, 
  Terminal, 
  Moon, 
  Sun,
  LayoutGrid
} from "lucide-react";
import SearchModal from "./SearchModal";

export default function Header() {
  const { theme, setTheme, favorites, isPremium, setPremium } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  }, [pathname]);

  // Keyboard shortcut for search (CMD+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const themes: { id: Theme; name: string; icon: any; premium: boolean }[] = [
    { id: "light", name: "Light Mode", icon: Sun, premium: false },
    { id: "dark", name: "Dark Mode", icon: Moon, premium: false },
    { id: "midnight", name: "Midnight Blue", icon: Sparkles, premium: true },
    { id: "developer", name: "Dev Console", icon: Terminal, premium: true },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-card/75 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20 group-hover:scale-105 transition-all-300">
              <Terminal className="w-5 h-5 font-bold" />
            </div>
            <span className="text-lg font-black tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Lowkey<span className="text-primary font-bold">Devs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                onBlur={() => setTimeout(() => setCategoriesDropdownOpen(false), 200)}
                className={`inline-flex items-center gap-1 text-sm font-semibold hover:text-foreground transition-colors duration-200 cursor-pointer ${
                  categoriesDropdownOpen ? "text-foreground" : "text-muted-foreground"
                }`}
                aria-expanded={categoriesDropdownOpen}
              >
                <span>Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  categoriesDropdownOpen ? "rotate-180" : ""
                }`} />
              </button>

              {categoriesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 rounded-2xl border border-border bg-card p-4 shadow-xl grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {categories.map((cat) => {
                    const Icon = getCategoryIcon(cat.iconName);
                    return (
                      <Link
                        key={cat.slug}
                        href={`/${cat.slug}`}
                        className="flex items-center gap-2.5 p-2 rounded-xl text-left hover:bg-muted/50 transition-colors group"
                      >
                        <div className={`p-1.5 rounded-lg border ${cat.color} shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors capitalize truncate">
                            {cat.name}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/search"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              All Tools
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2.5 h-10 rounded-xl border border-border bg-input/50 text-muted-foreground hover:text-foreground text-xs font-semibold cursor-pointer max-w-[140px] md:max-w-none transition-all-300"
              aria-label="Open search Modal"
            >
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">Search tools</span>
              <kbd className="hidden lg:inline-flex items-center h-5 select-none rounded border border-border bg-card px-1.5 font-mono text-[9px] font-medium text-muted-foreground tracking-widest shrink-0">
                ⌘K
              </kbd>
            </button>

            {/* Favorites Count */}
            {favorites.length > 0 && (
              <Link
                href="/search?filter=favorites"
                className="relative p-2 rounded-xl text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 transition-all-300 cursor-pointer shrink-0"
                title="Your Favorite Tools"
              >
                <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white">
                  {favorites.length}
                </span>
              </Link>
            )}

            {/* Themes Selector */}
            <div className="relative group shrink-0">
              <button
                className="p-2 rounded-xl border border-border bg-card/50 hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer transition-all duration-200"
                aria-label="Switch themes"
              >
                {(() => {
                  const CurrentIcon = themes.find((t) => t.id === theme)?.icon || Moon;
                  return <CurrentIcon className="w-4.5 h-4.5 text-foreground" />;
                })()}
              </button>

              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-card p-1.5 shadow-xl hidden group-hover:block hover:block animate-in fade-in slide-in-from-top-2 duration-150">
                {themes.map((t) => {
                  const Icon = t.icon;
                  const isSelectable = !t.premium || isPremium;
                  return (
                    <button
                      key={t.id}
                      onClick={() => isSelectable && setTheme(t.id)}
                      disabled={!isSelectable}
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs font-semibold transition-all-300 cursor-pointer ${
                        theme === t.id
                          ? "bg-primary/10 text-primary"
                          : isSelectable
                          ? "hover:bg-muted text-muted-foreground hover:text-foreground"
                          : "opacity-40 cursor-not-allowed text-muted-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{t.name}</span>
                      </span>
                      <div className="flex items-center gap-1">
                        {t.premium && !isPremium && (
                          <span className="text-[8px] bg-primary/20 text-primary px-1 rounded font-bold uppercase tracking-wide">
                            PRO
                          </span>
                        )}
                        {theme === t.id && <Check className="w-3.5 h-3.5 text-primary shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Premium Toggler */}
            <button
              onClick={() => setPremium(!isPremium)}
              className={`hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all duration-300 cursor-pointer gap-1.5 ${
                isPremium
                  ? "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border border-emerald-500/30"
                  : "bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 text-white animate-pulse"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isPremium ? "Premium Active" : "Upgrade Pro"}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 h-12 w-12 flex items-center justify-center rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer shrink-0"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card p-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => {
                const Icon = getCategoryIcon(cat.iconName);
                return (
                  <Link
                    key={cat.slug}
                    href={`/${cat.slug}`}
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-transparent hover:border-border hover:bg-muted/30"
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-bold text-foreground capitalize truncate">{cat.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-border flex flex-col gap-2">
              <Link
                href="/search"
                className="w-full h-12 flex items-center justify-center p-3 rounded-xl border border-border text-xs font-bold"
              >
                Explore All Tools
              </Link>
              <button
                onClick={() => {
                  setPremium(!isPremium);
                  setMobileMenuOpen(false);
                }}
                className={`w-full h-12 flex items-center justify-center p-3 rounded-xl text-xs font-black shadow-md ${
                  isPremium
                    ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30"
                    : "bg-gradient-to-r from-primary to-indigo-600 text-white"
                }`}
              >
                <Sparkles className="w-4 h-4 mr-1.5 shrink-0" />
                <span>{isPremium ? "Premium Active" : "Get Premium (No Ads)"}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search CMD+K modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
