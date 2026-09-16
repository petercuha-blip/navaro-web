"use client";

import { useEffect } from "react";

function track(eventName: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", eventName);
}

export default function ExchangeAnalytics() {
  useEffect(() => {
    track("exchange_page_view");

    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      const eventName = target?.dataset.analyticsEvent;
      if (eventName) track(eventName);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
