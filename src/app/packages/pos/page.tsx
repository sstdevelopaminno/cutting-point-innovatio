import type { Metadata } from "next";
import CpiposPricingCheckout from "@/components/CpiposPricingCheckout";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cuttingpointinnovation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL.replace(/\/+$/, "")),
  title: "ราคา CpiPOS ระบบ POS Android | แพ็กเกจสำหรับร้านค้าและร้านอาหาร",
  description: "ดูราคาและเปรียบเทียบแพ็กเกจ CpiPOS ระบบ POS Android สำหรับร้านอาหาร คาเฟ่ ร้านค้าปลีก และร้านค้าทั่วไป เลือกแพ็กเกจให้เหมาะกับขนาดร้านและการใช้งาน",
  alternates: { canonical: "/packages/pos" },
  openGraph: {
    title: "ราคาแพ็กเกจ CpiPOS",
    description: "ดูราคาและเลือกแพ็กเกจ CpiPOS ระบบ POS Android สำหรับร้านอาหาร คาเฟ่ และร้านค้าปลีก",
    url: SITE_URL.replace(/\/+$/, "") + "/packages/pos",
    type: "website",
    images: [{ url: "/product-showcase/service-pos.png", alt: "ราคาแพ็กเกจ CpiPOS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ราคา CpiPOS ระบบ POS Android",
    description: "เปรียบเทียบแพ็กเกจ CpiPOS สำหรับร้านค้าและร้านอาหาร",
    images: ["/product-showcase/service-pos.png"],
  },
  robots: { index: true, follow: true },
};

export default function PosPackagesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <CpiposPricingCheckout />
    </main>
  );
}
