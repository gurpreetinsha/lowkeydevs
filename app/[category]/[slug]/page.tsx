import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import { tools, getToolModule, getAllTools } from "@/tools/registry";
import CalculatorLayout from "@/components/CalculatorLayout";
import DynamicToolForm from "@/components/DynamicToolForm";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// 1. Generate Static Params for build-time HTML output
export async function generateStaticParams() {
  const publishedTools = getAllTools();
  return publishedTools.map((tool) => ({
    category: tool.category,
    slug: tool.slug,
  }));
}

// 2. Generate dynamic metadata for SEO compliance
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const tool = tools[resolvedParams.slug]?.config;
  if (!tool) return {};

  const title = tool.metaTitle || `${tool.title} | LowkeyDevs`;
  const description = tool.metaDescription || tool.description;

  return {
    title,
    description,
    keywords: tool.keywords,
    alternates: {
      canonical: `https://lowkeydevs.com/${tool.category}/${tool.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://lowkeydevs.com/${tool.category}/${tool.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// 3. Page Component Renderer
export default async function ToolPage({ params }: PageProps) {
  const resolvedParams = await params;
  const toolModule = getToolModule(resolvedParams.slug);

  // If tool slug does not exist or category parameter doesn't match config, return 404
  if (!toolModule || toolModule.config.category !== resolvedParams.category) {
    notFound();
  }

  const { config, calculate, custom: CustomComponent } = toolModule;

  // JSON-LD schemas injection
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": config.title,
    "operatingSystem": "All",
    "applicationCategory": `${config.category}Application`,
    "description": config.description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lowkeydevs.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": config.category,
        "item": `https://lowkeydevs.com/${config.category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": config.title,
        "item": `https://lowkeydevs.com/${config.category}/${config.slug}`
      }
    ]
  };

  const faqSchema = config.faq && config.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": config.faq.map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <>
      {/* Inject JSON-LD Schema markup in document body */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Render Calculator Structure */}
      <CalculatorLayout toolConfig={config}>
        {CustomComponent ? (
          <CustomComponent />
        ) : (
          <Suspense fallback={<div className="h-48 flex items-center justify-center text-muted-foreground font-semibold text-xs">Loading Utility Parameters...</div>}>
            <DynamicToolForm toolSlug={config.slug} config={config} />
          </Suspense>
        )}
      </CalculatorLayout>
    </>
  );
}
