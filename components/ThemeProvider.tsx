"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "developer" | "midnight";

export interface HistoryItem {
  id: string;
  timestamp: string;
  inputs: Record<string, any>;
  outputs: Record<string, any>;
  summaryText?: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  favorites: string[];
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  history: Record<string, HistoryItem[]>;
  addHistory: (slug: string, inputs: Record<string, any>, outputs: Record<string, any>, summaryText?: string) => void;
  clearHistory: (slug: string) => void;
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [history, setHistory] = useState<Record<string, HistoryItem[]>>({});
  const [isPremium, setPremiumState] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("lowkeydevs-theme") as Theme;
      if (storedTheme) {
        setThemeState(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }

      const storedFavs = localStorage.getItem("lowkeydevs-favorites");
      if (storedFavs) {
        setFavorites(JSON.parse(storedFavs));
      }

      const storedHistory = localStorage.getItem("lowkeydevs-history");
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }

      const storedPremium = localStorage.getItem("lowkeydevs-premium");
      if (storedPremium) {
        const premium = JSON.parse(storedPremium);
        setPremiumState(premium);
        // Force back to dark/light if developer/midnight theme is selected but not premium
        if (!premium && (storedTheme === "developer" || storedTheme === "midnight")) {
          setThemeState("dark");
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("lowkeydevs-theme", "dark");
        }
      }
    } catch (e) {
      console.error("Failed to load local storage state", e);
    }
    setMounted(true);
  }, []);

  const setTheme = (newTheme: Theme) => {
    if (!isPremium && (newTheme === "developer" || newTheme === "midnight")) {
      // Prevent selection of premium themes
      return;
    }
    setThemeState(newTheme);
    try {
      localStorage.setItem("lowkeydevs-theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    } catch (e) {
      console.error(e);
    }
  };

  const setPremium = (premium: boolean) => {
    setPremiumState(premium);
    try {
      localStorage.setItem("lowkeydevs-premium", JSON.stringify(premium));
      if (!premium && (theme === "developer" || theme === "midnight")) {
        // Revert to dark if downgraded and premium theme was selected
        setTheme("dark");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        localStorage.setItem("lowkeydevs-favorites", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const isFavorite = (slug: string) => favorites.includes(slug);

  const addHistory = (
    slug: string,
    inputs: Record<string, any>,
    outputs: Record<string, any>,
    summaryText?: string
  ) => {
    setHistory((prev) => {
      const toolHistory = prev[slug] || [];
      const newHistoryItem: HistoryItem = {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toISOString(),
        inputs,
        outputs,
        summaryText,
      };
      
      const updatedToolHistory = [newHistoryItem, ...toolHistory].slice(0, 20);
      const updated = { ...prev, [slug]: updatedToolHistory };
      
      try {
        localStorage.setItem("lowkeydevs-history", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const clearHistory = (slug: string) => {
    setHistory((prev) => {
      const updated = { ...prev };
      delete updated[slug];
      try {
        localStorage.setItem("lowkeydevs-history", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        favorites,
        toggleFavorite,
        isFavorite,
        history,
        addHistory,
        clearHistory,
        isPremium,
        setPremium,
      }}
    >
      <div className={!mounted ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
