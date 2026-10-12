"use client";

import { useEffect } from "react";
import { trackGaEvent } from "@/lib/ga";

const ATTRIBUTION_KEY = "cpinno_marketing_attribution";
const ATTRIBUTION_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type Attribution = Partial<Record<(typeof ATTRIBUTION_PARAMS)[number], string>>;

function readAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Attribution;
  } catch {
    return {};
  }
}

function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const next: Attribution = {};

  for (const key of ATTRIBUTION_PARAMS) {
    const value = params.get(key);
    if (value) next[key] = value;
  }

  if (Object.keys(next).length > 0) {
    try {
      window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next));
    } catch {
      // Analytics must never block the user experience.
    }
  }
}

function eventContext(anchor: HTMLAnchorElement) {
  return {
    ...readAttribution(),
    link_url: anchor.href,
    link_text: (anchor.textContent ?? "").trim().slice(0, 120),
    page_path: window.location.pathname,
  };
}

export default function MarketingEventTracker() {
  useEffect(() => {
    captureAttribution();

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const rawHref = anchor.getAttribute("href") ?? "";
      const context = eventContext(anchor);

      if (rawHref.startsWith("tel:")) {
        trackGaEvent("contact_click", { ...context, contact_method: "phone" });
        return;
      }

      if (rawHref.startsWith("mailto:")) {
        trackGaEvent("contact_click", { ...context, contact_method: "email" });
        return;
      }

      if (/lin\.ee|line\.me/i.test(anchor.href)) {
        trackGaEvent("contact_click", { ...context, contact_method: "line" });
        return;
      }

      try {
        const url = new URL(anchor.href, window.location.origin);

        if (url.origin === window.location.origin && url.pathname === "/trial/pos") {
          trackGaEvent("trial_cta_click", context);
          return;
        }

        if (url.origin === window.location.origin && url.pathname === "/register-store") {
          trackGaEvent("begin_signup", {
            ...context,
            signup_type: "cpipos_store",
          });
          return;
        }

        if (/cp-ipos-web\.vercel\.app$/i.test(url.hostname)) {
          trackGaEvent("demo_launch", {
            ...context,
            demo_product: "cpipos",
          });
        }
      } catch {
        // Ignore malformed or non-standard links.
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
