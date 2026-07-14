import type { Metadata } from "next";
import BusinessCirclePage from "@/components/BusinessCirclePage";

const PAGE_URL = "https://navaro.pro/circle";
const PAGE_TITLE = "Navaro Business Circle #001 | Cenové ponuky pod kontrolou";
const PAGE_DESCRIPTION =
  "Malá online diskusia podnikateľov a manažérov o tom, kde firmy strácajú čas pri tvorbe cenových ponúk a čo sa dá robiť jednoduchšie.";

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
