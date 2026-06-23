"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Locale } from "@/config/site";
import { siteConfig } from "@/config/site";
import { t } from "@/i18n";

interface SponsorQrCardProps {
  type: "wechat" | "alipay";
  locale: Locale;
}

export function SponsorQrCard({ type, locale }: SponsorQrCardProps) {
  const label = t(locale, type === "wechat" ? "payment.wechat" : "payment.alipay");
  const scanText = t(locale, "payment.scanToPay");
  const imageSrc = type === "wechat" ? siteConfig.payment.wechat : siteConfig.payment.alipay;

  return (
    <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <p className="font-heading text-lg font-medium text-foreground">
          {label}
        </p>
        <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-lg bg-muted/50">
          <Image
            src={imageSrc}
            alt={label}
            fill
            className="object-contain p-2"
            unoptimized
          />
        </div>
        <p className="text-sm text-muted-foreground">
          {scanText}
        </p>
      </CardContent>
    </Card>
  );
}
