"use client";

import { ThemeProvider } from "next-themes";
import { useState } from "react";
import type { Locale } from "@/config/site";
import { siteConfig } from "@/config/site";

export function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(siteConfig.defaultLocale);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LocaleContext.Provider value={{ locale, setLocale }}>
        {children}
      </LocaleContext.Provider>
    </ThemeProvider>
  );
}

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = React.createContext<LocaleContextType>({
  locale: "zh",
  setLocale: () => {},
});

import React from "react";
