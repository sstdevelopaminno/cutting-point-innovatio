import type { Metadata } from "next";
import Link from "next/link";
import CpiposPricingCheckout from "@/components/CpiposPricingCheckout";
import StructuredData from "@/components/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cuttingpointinnovation.com";
const baseUrl = SITE_URL.replace(/\/+$/, "");

const pricingPlans = [
  { name: "Starter", audience: "ร้านค้าขนาดเล็ก", monthly: "350", yearly: "3,780", two: "7,560", three: "11,340", popular: false },
  { name: "Growth", audience: "แพ็กเกจยอดนิยมสำหรับร้านที่กำลังเติบโต", monthly: "550", yearly: "5,940", two: "11,880", three: "17,820", popular: true },
  { name: "Business", audience: "ธุรกิจที่กำลังขยายทีมและสาขา", monthly: "1,500", yearly: "16,200", two: "32,400", three: "48,600", popular: false },
] as const;

const faqs = [
  {
    question: "CpiPOS มีทั้งแพ็กเกจรายเดือนและรายปีหรือไม่",
    answer: "มี สามารถเริ่มแบบรายเดือนได้ตั้งแต่ Starter 350 บาท, Growth 550 บาท และ Business 1,500 บาทต่อเดือน หรือเลือกแพ็กเกจรายปีเมื่อเหมาะกับงบประมาณและระยะเวลาการใช้งาน",
  },
  {
    question: "สามารถเลือกใช้งานรายปี 2 ปีหรือ 3 ปีได้หรือไม่",
    answer: "ได้ สำหรับแพ็กเกจที่รองรับสามารถเลือกชำระแบบรายปี และมีตัวเลือกใช้งานต่อเนื่อง 2 ปีหรือ 3 ปี ส่วนหน้าราคาหลักจะเปิดแสดงรายเดือนก่อนเพื่อให้เปรียบเทียบง่าย",
  },
  {
    question: "ทดลองใช้ CpiPOS ก่อนซื้อแพ็กเกจได้หรือไม่",
    answer: "ได้ สามารถขอทดลองใช้กับร้านจริง 7 วันเพื่อทดสอบขั้นตอนขาย สินค้า สต๊อก และการใช้งานก่อนตัดสินใจ",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "ราคา CpiPOS รายเดือนเริ่ม 350 บาท | มีรายปีและ CUSTOM",
  description:
    "ราคา CpiPOS มีทั้งรายเดือนและรายปี Starter 350 บาท/เดือน, Growth 550 บาท/เดือน, Business 1,500 บาท/เดือน พร้อมแพ็กเกจรายปีและ CUSTOM ทดลองใช้ 7 วันก่อนตัดสินใจ",
  keywords: [
    "ราคา POS",
    "POS รายเดือน",
    "POS รายปี",
    "โปรแกรม POS ร้านค้า",
    "POS ร้านอาหาร",
    "POS ร้านค้าปลีก",
    "ระบบ POS Android",
    "CpiPOS",
  ],
  alternates: { canonical: "/packages/pos" },
  openGraph: {
    title: "ราคาแพ็กเกจ CpiPOS รายเดือนและรายปี",
    description: "Starter 350 บาท/เดือน · Growth 550 บาท/เดือน · Business 1,500 บาท/เดือน · มีรายปีและ CUSTOM",
    url: `${baseUrl}/packages/pos`,
    type: "website",
    images: [{ url: "/product-showcase/service-pos.png", alt: "ราคาแพ็กเกจ CpiPOS รายเดือนและรายปี" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ราคา CpiPOS รายเดือนเริ่ม 350 บาท",
    description: "เลือกได้ทั้งรายเดือนและรายปี สำหรับร้านค้า ร้านอาหาร และ SME พร้อมทดลองใช้ฟรี 7 วัน",
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
          description: "ระบบ POS Android สำหรับงานขาย สินค้า สต๊อก และข้อมูลยอดขาย เลือกได้ทั้งแพ็กเกจรายเดือนและรายปี พร้อมทดลองใช้ฟรี 7 วัน",
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Monthly & Annual Plans</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                ราคา CpiPOS เลือกได้ทั้งรายเดือนและรายปี
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                ลูกค้าใหม่สามารถเริ่มจากรายเดือนได้ก่อนเพื่อควบคุมงบและทดลองใช้งานกับร้านจริง
                เมื่อพร้อมใช้งานต่อเนื่องจึงค่อยเลือกรายปีหรือระยะยาว 2–3 ปีตามความเหมาะสม
                โดยสิทธิ์ของแต่ละแพ็กเกจยังเปรียบเทียบได้จากตารางด้านบน
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {pricingPlans.map((plan) => (
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
                  <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                    <p className="text-xs font-bold text-blue-700">เริ่มแบบรายเดือน</p>
                    <p className="mt-1 text-3xl font-black text-slate-950">{plan.monthly} บาท <span className="text-sm font-bold text-slate-500">/ เดือน</span></p>
                  </div>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">รายปี</dt><dd className="font-black text-slate-950">{plan.yearly} บาท</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">2 ปี</dt><dd className="font-semibold text-slate-700">{plan.two} บาท</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-slate-500">3 ปี</dt><dd className="font-semibold text-slate-700">{plan.three} บาท</dd>
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
              <Link href="/trial/pos?utm_source=seo&utm_medium=packages&utm_campaign=pricing_options" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white">
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
