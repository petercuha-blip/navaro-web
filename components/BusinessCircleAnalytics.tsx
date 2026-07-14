"use client";

import { useEffect } from "react";

// Navaro does not run a dedicated analytics provider on this page today.
// This forwards events to window.gtag only if a tag is already present
// elsewhere on the site (e.g. added later via Google Tag Manager) — it is a
// no-op otherwise, so it never introduces a new analytics provider.
function track(eventName: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName);
  }
}

export default function BusinessCircleAnalytics() {
  useEffect(() => {
    track("business_circle_page_view");

    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-analytics-event]"
      );
      const eventName = target?.dataset.analyticsEvent;
      if (eventName) {
        track(eventName);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
