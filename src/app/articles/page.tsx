import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { getRequestedLocale } from "@/lib/locale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cuttingpointinnovation.com";

const articleItems = [
  {
    href: "/articles/pos-android",
    titleTh: "ระบบ POS Android คืออะไร? เริ่มขายหน้าร้านโดยไม่ต้องซื้อเครื่องใหม่",
    titleEn: "Android POS: start without buying new hardware first",
    excerptTh:
      "แนวทางเริ่มระบบขายหน้าร้านบนแท็บเล็ตหรือมือถือ Android ที่รองรับ พร้อมเช็กลิสต์ก่อนเริ่มทดลอง CpiPOS",
    excerptEn:
      "A practical guide to starting POS on a compatible Android tablet or phone before investing in dedicated hardware.",
    keyword: "POS Android",
  },
  {
    href: "/articles/pos-restaurant-cafe",
    titleTh: "โปรแกรม POS ร้านอาหารและคาเฟ่ ควรมีอะไรบ้างก่อนเลือกใช้",
    titleEn: "Restaurant and café POS: what to check before choosing",
    excerptTh:
      "ดูขั้นตอนขาย สินค้า สต๊อก และข้อมูลยอดขายที่ควรทดสอบก่อนตัดสินใจเลือกระบบสำหรับหน้าร้าน",
    excerptEn:
      "A checklist for evaluating sales workflow, products, inventory and sales data before choosing a POS.",
    keyword: "POS ร้านอาหาร",
  },
  {
    href: "/articles/pos-inventory-retail",
    titleTh: "POS ร้านค้าปลีกและระบบสต๊อก: จัดการขายและสินค้าให้เป็นระบบ",
    titleEn: "Retail POS and inventory: organize sales and stock",
    excerptTh:
      "แนวทางรวมงานขาย สินค้า สต๊อก และข้อมูลยอดขายให้เป็น workflow เดียวสำหรับร้านค้าปลีก",
    excerptEn:
      "How retail stores can organize sales, product, inventory and sales data in one workflow.",
    keyword: "POS ร้านค้าปลีก",
  },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestedLocale();
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const title =
    locale === "en"
      ? "CpiPOS Guides: Android POS for Restaurants and Retail"
      : "บทความ CpiPOS: ระบบ POS Android สำหรับร้านอาหาร คาเฟ่ และร้านค้าปลีก";
  const description =
    locale === "en"
      ? "Practical CpiPOS guides covering Android POS, restaurant and café workflows, retail inventory, pricing and free trial planning."
      : "รวมบทความ CpiPOS เรื่องระบบ POS Android โปรแกรมขายหน้าร้านสำหรับร้านอาหาร คาเฟ่ ร้านค้าปลีก การจัดการสต๊อก และแนวทางทดลองใช้งาน";

  return {
    metadataBase: new URL(baseUrl),
    title: { absolute: `${title} | CUTTING POINT INNOVATION` },
    description,
    alternates: { canonical: "/articles" },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/articles`,
      type: "website",
      images: [{ url: "/product-showcase/service-pos.png", alt: "CpiPOS POS for Android" }],
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

export default async function ArticlesPage() {
  const locale = await getRequestedLocale();
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const isEnglish = locale === "en";

  return (
    <>
      <StructuredData
        locale={locale}
        breadcrumbs={[
          { name: isEnglish ? "Home" : "หน้าแรก", item: `${baseUrl}/` },
          { name: isEnglish ? "CpiPOS Guides" : "บทความ CpiPOS", item: `${baseUrl}/articles` },
        ]}
      />

      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-mist py-12">
          <div className="mx-auto w-full max-w-6xl space-y-5 px-6">
            <Breadcrumbs
              items={[
                { label: isEnglish ? "Home" : "หน้าแรก", href: "/" },
                { label: isEnglish ? "Articles" : "บทความ" },
              ]}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              CpiPOS Knowledge
            </p>
            <h1 className="max-w-4xl font-[var(--font-heading)] text-3xl font-semibold tracking-tight md:text-5xl">
              {isEnglish
                ? "Practical guides for Android POS, restaurants and retail"
                : "บทความ CpiPOS สำหรับร้านอาหาร คาเฟ่ และร้านค้าปลีก"}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {isEnglish
                ? "Learn how to evaluate an Android POS workflow, prepare product and inventory data, and test CpiPOS before committing to additional hardware."
                : "รวมแนวทางเลือกและเริ่มใช้ระบบ POS บน Android ตั้งแต่งานขาย สินค้า สต๊อก ไปจนถึงข้อมูลยอดขาย เพื่อให้ร้านทดลอง workflow จริงก่อนตัดสินใจลงทุนเพิ่ม"}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/trial/pos" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
                {isEnglish ? "Try CpiPOS free for 7 days" : "ทดลองใช้ฟรี CpiPOS 7 วัน"}
              </Link>
              <Link href="/packages/pos" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800">
                {isEnglish ? "View pricing" : "ดูราคาและแพ็กเกจ"}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {articleItems.map((item) => (
                <article
                  key={item.href}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-card-soft"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{item.keyword}</p>
                  <h2 className="mt-3 text-xl font-semibold leading-8 text-slate-900">
                    {isEnglish ? item.titleEn : item.titleTh}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {isEnglish ? item.excerptEn : item.excerptTh}
                  </p>
                  <Link href={item.href} className="mt-6 inline-flex text-sm font-semibold text-blue-700">
                    {isEnglish ? "Read guide →" : "อ่านบทความ →"}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                {isEnglish ? "Ready to test CpiPOS with your store?" : "พร้อมทดลอง CpiPOS กับร้านจริงแล้วหรือยัง"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                {isEnglish
                  ? "Start on a compatible Android device, validate the workflow, then choose the plan and hardware that fit."
                  : "เริ่มจากอุปกรณ์ Android ที่รองรับ ทดลองงานขายและการจัดการข้อมูลก่อน แล้วค่อยเลือกแพ็กเกจหรือ Hardware ตามความต้องการจริง"}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/trial/pos" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                {isEnglish ? "Start free trial" : "เริ่มทดลองใช้ฟรี"}
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">
                {isEnglish ? "Contact" : "ติดต่อทีมงาน"}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
