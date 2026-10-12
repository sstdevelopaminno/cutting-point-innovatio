"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type GaPageViewTrackerProps = {
  gaId: string;
};

type GtagWindow = typeof window & {
  gtag?: (...args: unknown[]) => void;
};

export default function GaPageViewTracker({ gaId }: GaPageViewTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!gaId) return;

    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    let attempts = 0;
    let cancelled = false;

    const sendPageView = () => {
      if (cancelled) return;

      const gtag = (window as GtagWindow).gtag;
      if (gtag) {
        gtag("event", "page_view", {
          send_to: gaId,
          page_path: pagePath,
          page_location: window.location.href,
          page_title: document.title,
        });
        return;
      }

      attempts += 1;
      if (attempts < 20) {
        retryTimer = setTimeout(sendPageView, 250);
      }
    };

    sendPageView();

    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [gaId, pathname, searchParams]);

  return null;
}
