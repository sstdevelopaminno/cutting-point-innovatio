import { cookies } from "next/headers";

export type Locale = "th" | "en" | "lo";

const DEFAULT_LOCALE: Locale = "th";

function getLocaleFromCookie(value?: string): Locale | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  return normalized === "th" || normalized === "en" || normalized === "lo" ? normalized : null;
}

export async function getRequestedLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  return getLocaleFromCookie(cookieLang) ?? DEFAULT_LOCALE;
}
