"use client";

import Link from "next/link";
import { categories } from "@/config/categories";
import { Terminal, Heart, ShieldCheck, FileText, HelpCircle } from "lucide-react";
import Newsletter from "./Newsletter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 mt-auto">
      {/* Top Section: Newsletter Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Newsletter />
      </div>

      <hr className="border-border/60" />

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand & Info */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-primary-foreground shadow-sm shadow-primary/20">
              <Terminal className="w-4.5 h-4.5" />
            </div>
            <span className="text-base font-black tracking-tight text-foreground">
              Lowkey<span className="text-primary font-bold">Devs</span>
            </span>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed">
            LowkeyDevs is a high-performance utility platform hosting premium, lightweight online calculators and converters. Built for speed, precision, and privacy.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              title="GitHub Repository"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </Link>
          </div>
        </div>

        {/* Columns 2 & 3: Categories Split */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Utility Classes
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {categories.slice(0, Math.ceil(categories.length / 2)).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="hover:text-primary transition-colors capitalize">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
              Developer Utilities
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {categories.slice(Math.ceil(categories.length / 2)).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="hover:text-primary transition-colors capitalize">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 4: Platform Integrity */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Platform Security
          </h4>
          <ul className="space-y-2.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Privacy-First Operations</span>
            </li>
            <li className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary shrink-0" />
              <span>100% Client-Side Computing</span>
            </li>
            <li className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>No Server-Side Tracking</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-border bg-muted/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground font-semibold">
          <p>© {currentYear} LowkeyDevs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-foreground">Sitemap</Link>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" /> for devs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
