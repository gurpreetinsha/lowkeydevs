import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "LowkeyDevs - Premium Online Calculators & Tools Platform",
  description: "Free, instant, and high-performance developer, mathematical, health, and financial calculators designed for speed and accessibility.",
  keywords: ["calculators", "online tools", "developer tools", "finance calculators", "health calculators"],
  authors: [{ name: "LowkeyDevs Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
