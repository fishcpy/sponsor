"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Locale } from "@/config/site";

interface LanguageToggleProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const localeLabels: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
};

export function LanguageToggle({ locale, onLocaleChange }: LanguageToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex h-8 items-center justify-center rounded-lg border border-transparent px-2 text-sm font-medium transition-all hover:bg-muted hover:text-foreground"
      >
        {localeLabels[locale]}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onLocaleChange("zh")}>
          中文
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLocaleChange("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
