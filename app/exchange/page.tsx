import type { Metadata } from "next";
import ExchangePage from "@/components/ExchangePage";

export const metadata: Metadata = {
  title: "AI Capacity Exchange by NAVARO | AI Usage When You Need It",
  description:
    "A provider-authorized marketplace concept for purchasing small amounts of AI capacity exactly when users need it. Explore the NAVARO partner pilot.",
  alternates: {
    canonical: "/exchange",
  },
  openGraph: {
    title: "AI Capacity Exchange by NAVARO",
    description: "Buy only the AI capacity you need, exactly when you need it.",
    siteName: "NAVARO AI Capacity Exchange",
    locale: "en_US",
    type: "website",
  },
};

export default function ExchangeRoute() {
  return <ExchangePage />;
}