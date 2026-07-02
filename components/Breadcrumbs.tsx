"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  category?: {
    name: string;
    slug: string;
  };
  toolName?: string;
}

export default function Breadcrumbs({ category, toolName }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-sm text-muted-foreground font-medium py-2">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-foreground transition-colors duration-200"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {category && (
        <>
          <ChevronRight className="w-4.5 h-4.5 text-muted-foreground/50 shrink-0" />
          <Link
            href={`/${category.slug}`}
            className="hover:text-foreground transition-colors duration-200 capitalize"
          >
            {category.name}
          </Link>
        </>
      )}

      {toolName && (
        <>
          <ChevronRight className="w-4.5 h-4.5 text-muted-foreground/50 shrink-0" />
          <span className="text-foreground font-semibold truncate max-w-[200px] md:max-w-none" aria-current="page">
            {toolName}
          </span>
        </>
      )}
    </nav>
  );
}
