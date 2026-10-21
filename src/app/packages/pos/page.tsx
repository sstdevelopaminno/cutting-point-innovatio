import type { Metadata } from "next";
import Link from "next/link";
import CpiposPricingCheckout from "@/components/CpiposPricingCheckout";
import StructuredData from "@/components/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cuttingpointinnovation.vercel.app";
const baseUrl = SITE_URL.replace(/\/+$/, "");

const annualPlans = [
  { name: "Starter", audience: "ร้านค้าขนาดเล็ก", one: "3,780", two: "7,560", three: "11,340", popular: false },
  { name: "Growth", audience: "แพ็กเกจยอดนิยมสำหรับร้านที่กำลังเติบโต", one: "5,940", two: "11,880", three: "17,820", popular: true },
  { name: "Business", audience: "ธุรกิจที่กำลังขยายทีมและสาขา", one: "16,200", two: "32,400", three: "48,600", popular: false },
] as const;

const faqs = [
  {
    question: "CpiPOS มีแพ็กเกจรายปีหรือไม่",
    answer: "มี โดย Starter เริ่ม 3,780 บาทต่อปี, Growth 5,940 บาทต่อปี และ Business 16,200 บาทต่อปี ส่วน CUSTOM คิดราคาตามขอบเขตงานและสัญญา",
  },
  {
    question: "สามารถเลือกใช้งาน 2 ปีหรือ 3 ปีได้หรือไม่",
    answer: "ได้ มีราคาสำหรับ 1 ปี, 2 ปี และ 3 ปีตามแพ็กเกจที่เลือก โดยทีมงานสามารถช่วยแนะนำแพ็กเกจให้เหมาะกับขนาดร้านได้",
  },
  {
    question: "ทดลองใช้ CpiPOS ก่อนซื้อแพ็กเกจได้หรือไม่",
    answer: "ได้ สามารถขอทดลองใช้กับร้านจริง 7 วันเพื่อทดสอบขั้นตอนขาย สินค้า สต๊อก และการใช้งานก่อนตัดสินใจ",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "ราคา CpiPOS รายปี เริ่ม 3,780 บาท | POS ร้านค้า ร้านอาหาร และ SME",
  description:
    "ราคา CpiPOS แบบรายปี Starter 3,780 บาท, Growth 5,940 บาท, Business 16,200 บาท พร้อมตัวเลือก 2–3 ปีและ CUSTOM สำหรับธุรกิจเฉพาะทาง ทดลองใช้ 7 วันก่อนตัดสินใจ",
  keywords: [
    "ราคา POS",
    "POS รายปี",
    "โปรแกรม POS ร้านค้า",
    "POS ร้านอาหาร",
    "POS ร้านค้าปลีก",
    "ระบบ POS Android",
    "CpiPOS",
  ],
  alternates: { canonical: "/packages/pos" },
  openGraph: {
    title: "ราคาแพ็กเกจ CpiPOS รายปี",
    description: "Starter 3,780 บาท/ปี · Growth 5,940 บาท/ปี · Business 16,200 บาท/ปี · CUSTOM ตามสัญญา",
    url: `${baseUrl}/packages/pos`,
    type: "website",
    images: [{ url: "/product-showcase/service-pos.png", alt: "ราคาแพ็กเกจ CpiPOS รายปี" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ราคา CpiPOS รายปี เริ่ม 3,780 บาท",
    description: "แพ็กเกจ POS สำหรับร้านค้า ร้านอาหาร และ SME พร้อมทดลองใช้ฟรี 7 วัน",
    images: ["/product-showcase/service-pos.png"],
  },
  robots: { index: true, follow: true },
};

export default function PosPackagesPage() {
  return (
    <>
      <StructuredData
        locale="th"
        service={{
          name: "CpiPOS ระบบ POS สำหรับร้านค้าและร้านอาหาร",
          description: "ระบบ POS Android สำหรับงานขาย สินค้า สต๊อก และข้อมูลยอดขาย พร้อมแพ็กเกจรายปีและทดลองใช้ฟรี 7 วัน",
          serviceType: "Point of Sale Software",
          url: `${baseUrl}/packages/pos`,
        }}
        breadcrumbs={[
          { name: "หน้าแรก", item: `${baseUrl}/` },
          { name: "ราคาและแพ็กเกจ CpiPOS", item: `${baseUrl}/packages/pos` },
        ]}
        faqs={faqs}
      />
      <main className="min-h-screen bg-white text-slate-900">
        <CpiposPricingCheckout />

        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">CpiPOS Annual Plans</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                ราคาแพ็กเกจ CpiPOS รายปี 1–3 ปี
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                เลือกแพ็กเกจให้เหมาะกับขนาดร้านก่อนลงทุนเพิ่ม โดย Starter เหมาะกับร้านขนาดเล็ก,
                Growth เป็นแพ็กเกจที่แนะนำสำหรับร้านส่วนใหญ่ และ Business รองรับธุรกิจที่กำลังขยาย
                ส่วน CUSTOM ใช้สำหรับธุรกิจที่มีขั้นตอนทำงานเฉพาะและคิดราคาตามสัญญา
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {annualPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={
                    "rounded-3xl border bg-white p-6 shadow-sm " +
                    (plan.popular ? "border-blue-400 ring-1 ring-blue-200" : "border-slate-200")
                  }
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-black text-slate-950">{plan.name}</h3>
                    {plan.popular ? (
                      <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">ยอดนิยม</span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{plan.audience}</p>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">1 ปี</dt><dd className="font-black text-slate-950">{plan.one} บาท</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">2 ปี</dt><dd className="font-black text-slate-950">{plan.two} บาท</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">3 ปี</dt><dd className="font-black text-slate-950">{plan.three} บาท</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-violet-200 bg-violet-50 p-6">
              <h3 className="text-xl font-black text-slate-950">CUSTOM — ออกแบบระบบตามรูปแบบธุรกิจ</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
                สำหรับธุรกิจที่ต้องการ workflow เฉพาะ เช่น งานขายเฉพาะทาง ข้อมูลลูกค้า สต๊อกเฉพาะประเภท
                หรือการเชื่อมระบบเพิ่มเติม ราคาประเมินตามขอบเขตงานและสัญญา
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/trial/pos?utm_source=seo&utm_medium=packages&utm_campaign=annual_pricing" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white">
                ทดลองใช้ฟรี CpiPOS 7 วัน
              </Link>
              <Link href="/articles" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800">
                อ่านบทความเลือก POS
              </Link>
              <Link href="/laos/pos" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800">
                CpiPOS สำหรับตลาดลาว
              </Link>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-950">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
