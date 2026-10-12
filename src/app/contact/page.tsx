import type { Metadata } from "next";
import ContactPageClient from "@/app/contact/ContactPageClient";
import { getRequestedLocale } from "@/lib/locale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cuttingpointinnovation.vercel.app";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestedLocale();
  const baseUrl = SITE_URL.replace(/\/+$/, "");

  const title = locale === "th" ? "ติดต่อ | CUTTING POINT INNOVATION" : "Contact | CUTTING POINT INNOVATION";
  const description =
    locale === "th"
      ? "รวมช่องทางติดต่อ CUTTING POINT INNOVATION สำหรับ CpiPOS โทร LINE OA Facebook อีเมล ที่ตั้งบริษัท และแบบฟอร์มติดต่อ"
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
    },
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}

