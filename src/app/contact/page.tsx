import type { Metadata } from "next";
import ContactPageClient from "@/app/contact/ContactPageClient";
import StructuredData from "@/components/StructuredData";
import { getRequestedLocale } from "@/lib/locale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cuttingpointinnovation.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestedLocale();
  const baseUrl = SITE_URL.replace(/\/+$/, "");

  const title =
    locale === "th"
      ? "ติดต่อ CpiPOS | โทร LINE OA Facebook | CUTTING POINT INNOVATION"
      : "Contact CpiPOS | CUTTING POINT INNOVATION";
  const description =
    locale === "th"
      ? "ติดต่อทีม CpiPOS และ CUTTING POINT INNOVATION ผ่านโทรศัพท์ LINE OA Facebook อีเมล Google Maps หรือแบบฟอร์มออนไลน์ พร้อมทีมช่วยเริ่มใช้งานระบบ POS"
      : "Contact CUTTING POINT INNOVATION for CpiPOS via phone, LINE OA, Facebook, email, company location, or contact form.";

  return {
    metadataBase: new URL(baseUrl),
    title: { absolute: title },
    description,
    alternates: { canonical: "/contact" },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/contact`,
      type: "website",
      images: [{ url: "/product-showcase/service-pos.png", alt: "ติดต่อทีม CpiPOS" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/product-showcase/service-pos.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ContactPage() {
  const locale = await getRequestedLocale();
  const baseUrl = SITE_URL.replace(/\/+$/, "");

  return (
    <>
      <StructuredData
        locale={locale}
        breadcrumbs={[
          { name: locale === "th" ? "หน้าแรก" : "Home", item: `${baseUrl}/` },
          { name: locale === "th" ? "ติดต่อ" : "Contact", item: `${baseUrl}/contact` },
        ]}
      />
      <ContactPageClient />
    </>
  );
}

