import type { Metadata } from "next";
import BusinessCirclePage from "@/components/BusinessCirclePage";

const PAGE_URL = "https://navaro.pro/circle";
const PAGE_TITLE = "Navaro Business Circle | Členovia, témy a obchodné discovery";
const PAGE_DESCRIPTION =
  "Navaro Business Circle spája malé tematické stretnutia, profily členov, ponuky, dopyty a moderované obchodné discovery.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Navaro",
    images: [
      {
        url: "https://navaro.pro/screenshot-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Navaro",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Page() {
  return <BusinessCirclePage />;
}
