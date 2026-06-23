"use client";

import type { Locale } from "@/config/site";
import type { Sponsor } from "@/config/sponsors";
import { t } from "@/i18n";

interface SponsorCardProps {
  sponsor: Sponsor;
  locale: Locale;
}

export function SponsorCard({ sponsor, locale }: SponsorCardProps) {
  const dateLabel = t(locale, "sponsors.sponsoredOn");

  return (
    <div className="group flex flex-col gap-1 rounded-lg border border-border/40 bg-card/50 p-4 transition-colors hover:bg-card/80 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      {/* 左侧：名字 + 留言 */}
      <div className="min-w-0 flex-1 space-y-0.5">
        <div className="flex items-center gap-2">
          <span className="font-heading font-medium text-foreground truncate">
            {sponsor.name}
          </span>
          <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium tabular-nums text-primary">
            {sponsor.amount} {t(locale, "sponsors.unit")}
          </span>
        </div>
        <p className="text-sm truncate text-muted-foreground">{sponsor.message}</p>
      </div>
      {/* 右侧：日期 */}
      <p className="shrink-0 text-xs text-muted-foreground sm:text-right">
        {dateLabel} {formatDate(sponsor.date)}
      </p>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
