export const siteConfig = {
  name: "Sponsor",
  description: "支持我的创作",
  url: "",
  payment: {
    wechat: "https://file.fis.ink/img/fishcpy/wechat.webp",
    alipay: "https://file.fis.ink/img/fishcpy/alipay.webp",
  },
  defaultLocale: "zh" as const,
} as const;

export type Locale = "zh" | "en";
