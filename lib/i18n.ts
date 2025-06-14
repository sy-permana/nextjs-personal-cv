import { GetStaticPropsContext } from "next";
import { Locale, LocaleContent } from "@/types";
import { en } from "@/lib/locales/en";
import { id } from "@/lib/locales/id";

const locales: Record<Locale, LocaleContent> = {
  en,
  id,
};

export function getLocaleContent(locale: Locale): LocaleContent {
  return locales[locale] || locales.en;
}

export function getLocaleFromContext(context: GetStaticPropsContext): Locale {
  const locale = context.locale as Locale;
  return locale || "en";
}

export function getAllLocales(): Locale[] {
  return Object.keys(locales) as Locale[];
}

export function isValidLocale(locale: string): locale is Locale {
  return locale in locales;
}

export function getOppositeLocale(currentLocale: Locale): Locale {
  return currentLocale === "en" ? "id" : "en";
}

export function getLocalePath(path: string, locale: Locale): string {
  if (locale === "en") {
    return path;
  }
  return `/${locale}${path}`;
}
