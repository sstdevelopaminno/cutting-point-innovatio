import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cuttingpointinnovation.com";
const baseUrl = SITE_URL.replace(/\/+$/, "");

const faqs = [
  {
    question: "ระบบ POS คืออะไร",
    answer:
      "ระบบ POS หรือ Point of Sale คือระบบขายหน้าร้านที่ช่วยบันทึกการขาย จัดการสินค้า สต๊อก และข้อมูลยอดขาย โดยความสามารถเพิ่มเติมขึ้นอยู่กับระบบและแพ็กเกจที่เลือก",
  },
  {
    question: "CpiPOS ราคาเริ่มต้นเท่าไร",
    answer:
      "CpiPOS มี Starter เริ่ม 350 บาทต่อเดือน, Growth 550 บาทต่อเดือน และ Business 1,500 บาทต่อเดือน พร้อมตัวเลือกรายปีและ CUSTOM",
  },
  {
    question: "ร้านอาหารและร้านค้าปลีกใช้ CpiPOS ได้หรือไม่",
    answer:
      "ได้ CpiPOS เหมาะกับร้านอาหาร คาเฟ่ ร้านค้าปลีก และร้านค้าทั่วไป โดยควรทดลอง workflow จริงของร้านก่อนเลือกแพ็กเกจ",
  },
  {
    question: "ต้องซื้อเครื่อง POS ใหม่หรือไม่",
    answer:
      "ไม่จำเป็นเสมอไป หากมีอุปกรณ์ Android ที่รองรับ สามารถเริ่มทดลองระบบก่อน แล้วค่อยเพิ่ม Hardware ตามความต้องการจริงของร้าน",
  },
  {
    question: "ทดลองใช้ CpiPOS ได้หรือไม่",
    answer:
      "ได้ CpiPOS มีช่วงทดลองใช้ฟรี 7 วัน เพื่อให้ร้านทดลองงานขาย สินค้า สต๊อก และขั้นตอนใช้งานก่อนตัดสินใจ",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { absolute: "ระบบ POS สำหรับร้านค้าและร้านอาหาร | CpiPOS เริ่ม 350 บาท/เดือน" },
  description:
    "CpiPOS ระบบ POS สำหรับร้านค้า ร้านอาหาร คาเฟ่ และ SME จัดการขาย สินค้า สต๊อก และยอดขาย เริ่ม 350 บาท/เดือน มีทั้งรายเดือน รายปี และทดลองใช้ฟรี 7 วัน",
  keywords: [
    "POS",
    "ระบบ POS",
    "โปรแกรม POS",
    "POS ร้านอาหาร",
    "POS ร้านค้า",
    "POS Android",
    "POS ราคา",
    "POS รายเดือน",
    "โปรแกรมขายหน้าร้าน",
    "CpiPOS",
  ],
  alternates: { canonical: "/pos" },
  openGraph: {
    title: "ระบบ POS สำหรับร้านค้าและร้านอาหาร | CpiPOS",
    description:
      "เริ่มระบบ POS ได้ตั้งแต่ 350 บาท/เดือน ใช้กับร้านอาหาร ร้านค้า คาเฟ่ และ SME พร้อมทดลองใช้ฟรี 7 วัน",
    url: `${baseUrl}/pos`,
    type: "website",
    images: [{ url: "/product-showcase/service-pos.png", alt: "CpiPOS ระบบ POS สำหรับร้านค้าและร้านอาหาร" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ระบบ POS สำหรับร้านค้าและร้านอาหาร | CpiPOS",
    description: "ระบบ POS เริ่ม 350 บาท/เดือน พร้อมทดลองใช้ฟรี 7 วัน",
    images: ["/product-showcase/service-pos.png"],
  },
  robots: { index: true, follow: true },
};

const useCases = [
  {
    title: "POS ร้านอาหารและคาเฟ่",
    body: "เหมาะกับร้านที่ต้องการหน้าขายใช้ง่าย จัดสินค้าเป็นระบบ และดูข้อมูลยอดขายเพื่อช่วยบริหารร้าน",
    href: "/articles/pos-restaurant-cafe",
  },
  {
    title: "POS ร้านค้าปลีก",
    body: "เชื่อมงานขายกับข้อมูลสินค้าและสต๊อก ลดการจดหลายที่ และช่วยให้ตรวจสอบสินค้าคงเหลือได้เป็นระบบมากขึ้น",
    href: "/articles/pos-inventory-retail",
  },
  {
    title: "POS Android",
    body: "เริ่มจากแท็บเล็ตหรือมือถือ Android ที่รองรับได้ก่อน โดยไม่จำเป็นต้องซื้อเครื่อง POS เฉพาะทางตั้งแต่วันแรก",
    href: "/articles/pos-android",
  },
] as const;

const features = [
  "บันทึกการขายและจัดการรายการสินค้า",
  "จัดการข้อมูลสินค้า หมวดหมู่ และราคา",
  "ติดตามข้อมูลสต๊อกและการเคลื่อนไหวสินค้า",
  "ดูข้อมูลยอดขายและรายงานที่เกี่ยวข้อง",
  "รองรับการใช้งานตามสิทธิ์และแพ็กเกจของร้าน",
  "มี CUSTOM สำหรับธุรกิจที่ต้องการ workflow เฉพาะ",
];

export default function PosPillarPage() {
  return (
    <>
      <StructuredData
        locale="th"
        service={{
          name: "CpiPOS ระบบ POS สำหรับร้านค้าและร้านอาหาร",
          description:
            "ระบบ POS สำหรับร้านค้า ร้านอาหาร คาเฟ่ และ SME รองรับงานขาย สินค้า สต๊อก และข้อมูลยอดขาย พร้อมแพ็กเกจรายเดือน รายปี และทดลองใช้ฟรี 7 วัน",
          serviceType: "Point of Sale Software",
          url: `${baseUrl}/pos`,
        }}
        breadcrumbs={[
          { name: "หน้าแรก", item: `${baseUrl}/` },
          { name: "ระบบ POS", item: `${baseUrl}/pos` },
        ]}
        faqs={faqs}
      />

      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">CpiPOS · Point of Sale</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              ระบบ POS สำหรับร้านค้า ร้านอาหาร คาเฟ่ และ SME
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              CpiPOS ช่วยรวมงานขาย สินค้า สต๊อก และข้อมูลยอดขายให้อยู่ใน workflow เดียว
              เหมาะกับร้านที่ต้องการเริ่มใช้ระบบอย่างเป็นขั้นตอน โดยสามารถเริ่มจากอุปกรณ์ Android ที่รองรับ
              และเลือกแพ็กเกจตามขนาดธุรกิจได้
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/trial/pos?utm_source=seo&utm_medium=pos_pillar&utm_campaign=nonbrand_pos"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white hover:bg-blue-700"
              >
                ทดลองใช้ฟรี CpiPOS 7 วัน
              </Link>
              <Link
                href="/packages/pos?utm_source=seo&utm_medium=pos_pillar&utm_campaign=nonbrand_pos"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-800 hover:bg-slate-50"
              >
                ดูราคาและแพ็กเกจ
              </Link>
            </div>

            <div className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold text-blue-700">STARTER</p>
                <p className="mt-1 text-3xl font-black">350 บาท</p>
                <p className="text-sm text-slate-500">ต่อเดือน</p>
              </div>
              <div className="rounded-2xl border border-blue-300 bg-white p-5 shadow-sm ring-1 ring-blue-100">
                <p className="text-xs font-bold text-blue-700">GROWTH · ยอดนิยม</p>
                <p className="mt-1 text-3xl font-black">550 บาท</p>
                <p className="text-sm text-slate-500">ต่อเดือน</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold text-blue-700">BUSINESS</p>
                <p className="mt-1 text-3xl font-black">1,500 บาท</p>
                <p className="text-sm text-slate-500">ต่อเดือน</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">POS Software</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">ระบบ POS ทำอะไรได้บ้าง</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              POS ไม่ควรเป็นเพียงเครื่องคิดเงิน แต่ควรช่วยให้ข้อมูลที่เกิดจากการขายถูกนำไปใช้ต่อกับสินค้า
              สต๊อก และรายงาน เพื่อให้เจ้าของร้านติดตามการดำเนินงานได้ง่ายขึ้น
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-semibold leading-7 text-slate-700">
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/articles/pos-system-guide" className="text-sm font-black text-blue-700">
              อ่านเพิ่มเติม: ระบบ POS คืออะไร และควรเลือกแบบไหน →
            </Link>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">เลือก POS ตามรูปแบบของร้าน</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {useCases.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                  <Link href={item.href} className="mt-5 inline-flex text-sm font-black text-blue-700">
                    ดูแนวทางเลือกใช้งาน →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Pricing</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">ราคา POS ควรดูทั้งรายเดือนและต้นทุนรวม</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                ร้านใหม่สามารถเริ่มจากรายเดือนได้ก่อนเพื่อควบคุมเงินก้อน ส่วนร้านที่พร้อมใช้งานต่อเนื่องสามารถเลือกรายปีได้
                โดยควรดูทั้งค่าซอฟต์แวร์ อุปกรณ์ และสิทธิ์ของแพ็กเกจ ไม่ใช่ดูเพียงราคาหน้าโฆษณา
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/packages/pos" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">
                  เปรียบเทียบแพ็กเกจ
                </Link>
                <Link href="/articles/pos-price-monthly" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800">
                  อ่านเรื่องราคา POS
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-700">CUSTOM</p>
              <h3 className="mt-3 text-2xl font-black">ธุรกิจที่ POS ทั่วไปไม่ตรง workflow</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                หากธุรกิจมีขั้นตอนเฉพาะ เช่น ข้อมูลลูกค้า สต๊อกเฉพาะประเภท งานบริการ หรือกระบวนการขายที่แตกต่าง
                สามารถประเมินรูปแบบ CUSTOM ตามขอบเขตงานและสัญญาได้
              </p>
              <Link href="/contact" className="mt-5 inline-flex text-sm font-black text-violet-800">
                ติดต่อประเมินระบบ CUSTOM →
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">ทดลอง POS ก่อนตัดสินใจ</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              ใช้ช่วงทดลองกับข้อมูลจริงบางส่วนของร้าน เช่น สินค้า ราคา สต๊อก และขั้นตอนขาย
              เพื่อดูว่าพนักงานใช้งานได้คล่องและระบบตอบโจทย์ร้านจริงหรือไม่
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/trial/pos?utm_source=seo&utm_medium=pos_pillar&utm_campaign=free_trial" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-black text-white">
                เริ่มทดลองใช้ฟรี 7 วัน
              </Link>
              <Link href="/articles/pos-free-trial" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-black text-slate-800">
                ดูเช็กลิสต์ทดลอง POS
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">คำถามเกี่ยวกับระบบ POS</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-black">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
