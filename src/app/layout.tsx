import type { Metadata } from "next";
import { Noto_Sans_Lao, Noto_Sans_Thai, Noto_Serif_Lao, Noto_Serif_Thai } from "next/font/google";
import Analytics from "@/components/Analytics";
import MarketingEventTracker from "@/components/MarketingEventTracker";
import ImageProtection from "@/components/ImageProtection";
import SiteShell from "@/components/SiteShell";
import StructuredData from "@/components/StructuredData";
import { getRequestedLocale, type Locale } from "@/lib/locale";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-sans-thai",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifThai = Noto_Serif_Thai({
  subsets: ["latin", "thai"],
  variable: "--font-serif-thai",
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoSansLao = Noto_Sans_Lao({
  subsets: ["latin", "lao"],
  variable: "--font-sans-lao",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifLao = Noto_Serif_Lao({
  subsets: ["latin", "lao"],
  variable: "--font-serif-lao",
  weight: ["400", "600", "700"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cuttingpointinnovation.com";

const metadataByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    ogLocale: string;
    alternateLocales: string[];
  }
> = {
  th: {
    title: "CpiPOS ระบบ POS Android สำหรับร้านอาหารและร้านค้า | CUTTING POINT INNOVATION",
    description:
      "CpiPOS โปรแกรมขายหน้าร้านและระบบ POS สำหรับ Android เหมาะกับร้านอาหาร คาเฟ่ ร้านค้าปลีก และร้านค้าทั่วไป จัดการขาย สินค้า สต๊อก และยอดขาย พร้อมทดลองใช้ฟรี 7 วัน",
    ogLocale: "th_TH",
    alternateLocales: ["en_US", "lo_LA"],
  },
  en: {
    title: "CUTTING POINT INNOVATION CO., LTD. | CpiPOS POS for Android",
    description:
      "CpiPOS is an Android POS system for restaurants, cafés, retail stores, and general merchants, covering sales, products, inventory, and store visibility with a 7-day free trial.",
    ogLocale: "en_US",
    alternateLocales: ["th_TH"],
  },
  lo: {
    title: "CUTTING POINT INNOVATION CO., LTD. | CpiPOS POS for Android",
    description:
      "CpiPOS ແມ່ນລະບົບ POS ສຳລັບ Android ສຳລັບຮ້ານອາຫານ ຄາເຟ ແລະ ຮ້ານຄ້າປີກ ຮອງຮັບວຽກຂາຍ ສິນຄ້າ ແລະ ສະຕັອກ.",
    ogLocale: "lo_LA",
    alternateLocales: ["th_TH", "en_US"],
  },
};
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestedLocale();
  const meta = metadataByLocale[locale];
  const metadataBase = new URL(SITE_URL);

  return {
    metadataBase,
    title: {
      default: meta.title,
      template: "%s | CUTTING POINT INNOVATION",
    },
    description: meta.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
      alternateLocale: meta.alternateLocales,
      type: "website",
      url: "/",
      siteName: "CUTTING POINT INNOVATION CO., LTD.",
      images: [
        {
          url: "/product-showcase/service-pos.png",
          alt: "CpiPOS ระบบ POS สำหรับ Android",
        },
      ],
    },
    icons: {
      icon: [{ url: "/brand/logo-icon.png", type: "image/png" }],
      shortcut: "/brand/logo-icon.png",
      apple: "/brand/logo-icon.png",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/product-showcase/service-pos.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestedLocale();

  return (
    <html lang={locale}>
      <body
        className={`${notoSansThai.variable} ${notoSerifThai.variable} ${notoSansLao.variable} ${notoSerifLao.variable} antialiased`}
      >
        <StructuredData locale={locale} includeGlobal />
        <Analytics />
        <MarketingEventTracker />
        <ImageProtection />
        <SiteShell initialLang={locale}>{children}</SiteShell>
      </body>
    </html>
  );
}
