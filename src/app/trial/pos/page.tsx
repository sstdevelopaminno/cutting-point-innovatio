import { ArrowRight, ExternalLink, ShieldCheck, Smartphone, Star } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getRequestedLocale } from "@/lib/locale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cuttingpointinnovation.vercel.app";
const POS_TRIAL_URL = "https://cp-ipos-web.vercel.app/";

const copy = {
  th: {
    title: "ทดลอง CpiPOS | CUTTING POINT INNOVATION",
    description: "ทดลอง CpiPOS ระบบ POS สำหรับร้านอาหาร คาเฟ่ และร้านค้าปลีก รองรับอุปกรณ์ Android ที่รองรับ",
    back: "กลับหน้าทดลองใช้งาน",
    eyebrow: "CpiPOS TRIAL",
    heading: "ทดลอง CpiPOS ก่อนใช้งานจริง",
    subtitle: "Web Demo ช่วยให้ทดลองฟังก์ชันหลักได้ก่อน ส่วนการใช้งานหน้าร้านจริงรองรับอุปกรณ์ Android ที่รองรับ",
    feature1: "ขายและจัดการรายการสินค้า",
    feature2: "ดูยอดขายและข้อมูลร้าน",
    feature3: "รองรับการใช้งานหน้าร้านบนอุปกรณ์ Android ที่รองรับ",
    feature4: "ระบบจริงอาจต้องสมัครร้านและกำหนดสิทธิ์ก่อนใช้งานเต็มรูปแบบ",
    launch: "เปิด Web Demo CpiPOS",
    signup: "สมัครใช้งาน CpiPOS",
    domainNote: "Web Demo ใช้สำหรับทดลองฟังก์ชันเบื้องต้น การใช้งานหน้าร้านจริงให้สมัครร้านและใช้งานผ่านอุปกรณ์ Android ที่รองรับ",
  },
  en: {
    title: "Try CpiPOS | CUTTING POINT INNOVATION",
    description: "Try CpiPOS, an Android POS system for restaurants, cafés and retail stores.",
    back: "Back to trials",
    eyebrow: "CpiPOS TRIAL",
    heading: "Try CpiPOS before going live",
    subtitle: "Use the web demo to explore core functions first. Live front-of-house use is designed for compatible Android devices.",
    feature1: "Sales and product management",
    feature2: "Store sales and operational insights",
    feature3: "Designed for front-of-house use on compatible Android devices",
    feature4: "Full production access may require store registration and permissions",
    launch: "Open CpiPOS web demo",
    signup: "Sign up for CpiPOS",
    domainNote: "The web demo is for exploring core functions. Live store use requires store registration and a compatible Android device.",
  },
  lo: {
    title: "ທົດລອງ CpiPOS | CUTTING POINT INNOVATION",
    description: "ທົດລອງ CpiPOS ລະບົບ POS ສຳລັບ Android ສຳລັບຮ້ານອາຫານ ຄາເຟ ແລະ ຮ້ານຄ້າປີກ.",
    back: "ກັບໜ້າທົດລອງ",
    eyebrow: "CpiPOS TRIAL",
    heading: "ທົດລອງ CpiPOS ກ່ອນໃຊ້ງານຈິງ",
    subtitle: "ໃຊ້ Web Demo ເພື່ອທົດລອງຟັງຊັນຫຼັກ ສ່ວນການໃຊ້ງານໜ້າຮ້ານຈິງຮອງຮັບອຸປະກອນ Android ທີ່ຮອງຮັບ.",
    feature1: "ການຂາຍ ແລະ ຈັດການສິນຄ້າ",
    feature2: "ຍອດຂາຍ ແລະ ຂໍ້ມູນຮ້ານ",
    feature3: "ຮອງຮັບການໃຊ້ງານໜ້າຮ້ານເທິງອຸປະກອນ Android ທີ່ຮອງຮັບ",
    feature4: "ການໃຊ້ງານເຕັມອາດຕ້ອງລົງທະບຽນຮ້ານ ແລະ ກຳນົດສິດ",
    launch: "ເປີດລະບົບ POS",
    signup: "ສະໝັກໃຊ້ CpiPOS",
    domainNote: "Web Demo ໃຊ້ເພື່ອທົດລອງຟັງຊັນເບື້ອງຕົ້ນ ການໃຊ້ງານຈິງຕ້ອງສະໝັກຮ້ານ ແລະ ໃຊ້ອຸປະກອນ Android ທີ່ຮອງຮັບ.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestedLocale();
  const t = copy[locale];
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  return {
    metadataBase: new URL(baseUrl),
    title: { absolute: t.title },
    description: t.description,
    alternates: { canonical: "/trial/pos" },
    openGraph: { title: t.title, description: t.description, url: `${baseUrl}/trial/pos`, type: "website" },
  };
}

export default async function PosTrialPage() {
  const locale = await getRequestedLocale();
  const t = copy[locale];

  return (
    <main className="min-h-screen bg-[#f5f8fc] text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <Link href="/trial" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-700">
          <ArrowRight className="h-4 w-4 rotate-180" />{t.back}
        </Link>

        <div className="mt-7 overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-[0_24px_70px_rgba(15,23,42,.10)]">
          <div className="grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black tracking-[.24em] text-blue-600">{t.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{t.heading}</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{t.subtitle}</p>

              <div className="mt-8 grid gap-3">
                {[
                  [Star, t.feature1],
                  [Smartphone, t.feature2],
                  [Smartphone, t.feature3],
                  [ShieldCheck, t.feature4],
                ].map(([Icon, label]) => {
                  const C = Icon as typeof Star;
                  return <div key={String(label)} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><C className="h-4 w-4" /></span>
                    <span className="pt-2 text-sm font-semibold text-slate-700">{String(label)}</span>
                  </div>;
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={POS_TRIAL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  {t.launch}<ExternalLink className="h-4 w-4" />
                </a>
                <Link href="/register-store" className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">
                  {t.signup}
                </Link>
              </div>
            </div>

            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#071a38] p-8 text-white">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_55%_30%,rgba(14,165,233,.35),transparent_34%),radial-gradient(circle_at_20%_90%,rgba(37,99,235,.28),transparent_32%)]" />
              <div className="relative flex w-full max-w-sm flex-col items-center rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
                <img src="/brand/logo-icon.png" alt="CpiPOS" className="h-20 w-20 object-contain" />
                <strong className="mt-5 text-3xl font-black">CpiPOS</strong>
                <span className="mt-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">ANDROID POS · WEB DEMO</span>
                <p className="mt-6 text-xs leading-5 text-slate-300">{t.domainNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
