"use client";

import type { Locale } from "@/config/site";
import { sponsors } from "@/config/sponsors";
import { t } from "@/i18n";
import { SponsorCard } from "./sponsor-card";

interface SponsorListProps {
  locale: Locale;
}

export function SponsorList({ locale }: SponsorListProps) {
  const title = t(locale, "sponsors.title");
  const empty = t(locale, "sponsors.empty");

  const sorted = [...sponsors].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="space-y-4">
      <h2 className="font-heading text-xl font-semibold text-foreground">
        {title}
      </h2>
      {sorted.length === 0 ? (
        <p className="py-8 text-center text-muted-foreground">{empty}</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {sorted.map((sponsor, i) => (
            <SponsorCard key={i} sponsor={sponsor} locale={locale} />
          ))}
        </div>
      )}
    </section>
  );
}
