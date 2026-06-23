import zh from "./zh.json";
import en from "./en.json";
import type { Locale } from "@/config/site";

const messages = { zh, en } as const;

export type Messages = typeof zh;

export function getMessages(locale: Locale): Messages {
  return messages[locale] || messages.zh;
}

export function t(locale: Locale, path: string): string {
  const msg = getMessages(locale);
  const keys = path.split(".");
  let result: unknown = msg;
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof result === "string" ? result : path;
}
