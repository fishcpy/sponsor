"use client";

import { useContext } from "react";
import { LocaleContext } from "@/components/providers";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { SponsorQrCard } from "@/components/sponsor-qr-card";
import { SponsorList } from "@/components/sponsor-list";
import { Footer } from "@/components/footer";
import { t } from "@/i18n";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <span className="font-heading text-lg font-semibold text-primary">
          {t(locale, "site.title")}
        </span>
        <div className="flex items-center gap-1">
          <LanguageToggle locale={locale} onLocaleChange={setLocale} />
          <ThemeToggle locale={locale} />
        </div>
      </header>

      {/* Hero */}
      <section className="mt-12 space-y-3 text-center">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t(locale, "site.title")}
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          {t(locale, "site.subtitle")}
        </p>
      </section>

      {/* Payment QR Codes */}
      <section className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
        <SponsorQrCard type="wechat" locale={locale} />
        <SponsorQrCard type="alipay" locale={locale} />
      </section>

      {/* Notice */}
      <div
        className="mt-6 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground/80"
        dangerouslySetInnerHTML={{ __html: t(locale, "payment.notice") }}
      />

      <Separator className="my-10" />

      {/* Sponsor List */}
      <SponsorList locale={locale} />

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}
