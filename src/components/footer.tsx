import type { Locale } from "@/config/site";
import { t } from "@/i18n";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const thanks = t(locale, "footer.thanks");

  return (
    <footer className="mt-12 pb-8">
      <Separator className="mb-6" />
      <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
        <span>{thanks}</span>
        <span className="text-border">|</span>
        <a
          href="https://github.com/fishcpy/sponsor"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
