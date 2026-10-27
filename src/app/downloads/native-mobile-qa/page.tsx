import type { Metadata } from "next";
import Link from "next/link";
import { getRequestedLocale } from "@/lib/locale";

const APK_URL = "https://github.com/sstdevelopaminno/CpIPOS/releases/download/native-mobile-v2.0.1-rc2/CpIPOS-Native-Mobile-2.0.1-rc2.apk";
const RELEASE_URL = "https://github.com/sstdevelopaminno/CpIPOS/releases/tag/native-mobile-v2.0.1-rc2";
const SHA256 = "0ab626ea0755276389c780e452aaf9b874f287f16cc72140c63f50b0223bc1dc";

export const metadata: Metadata = {
  title: "CpIPOS Native Mobile 2.0.1-rc2 | QA only",
  description: "Signed test release for Android device acceptance; not approved for customer production.",
  robots: { index: false, follow: false },
};

const translations = {
  th: {
    eyebrow: "สำหรับทีมตรวจรับเท่านั้น",
    heading: "ทดลอง CpIPOS Native Mobile",
    description: "APK รุ่น 2.0.1-rc2 ที่รวมการแก้ไข MDM, เครื่องพิมพ์ และการเปลี่ยนภาษา",
    warning: "ยังไม่อนุมัติสำหรับใช้งานขายจริง โปรดทดสอบกับร้านทดสอบเท่านั้น และอย่าส่งสลิปหรือทำธุรกรรมเงินจริง",
    download: "ดาวน์โหลด APK รุ่นทดสอบ",
    release: "ตรวจสอบไฟล์ต้นทางบน GitHub",
    back: "กลับศูนย์ดาวน์โหลดสำหรับลูกค้า",
    device: "Android 8.0 ขึ้นไป (API 26) · สำหรับมือถือ",
    checksum: "SHA-256 ตรวจสอบความถูกต้อง",
  },
  en: {
    eyebrow: "Internal QA only",
    heading: "Test CpIPOS Native Mobile",
    description: "2.0.1-rc2 signed APK including MDM, printer and language fixes.",
    warning: "Not approved for production cashiers. Use test merchants and devices only; do not process real transactions.",
    download: "Download test APK",
    release: "Verify official GitHub release",
    back: "Customer download center",
    device: "Android 8.0+ (API 26) · Mobile phones",
    checksum: "SHA-256 integrity checksum",
  },
  lo: {
    eyebrow: "ສຳລັບທີມທົດສອບເທົ່ານັ້ນ",
    heading: "ທົດສອບ CpIPOS Native Mobile",
    description: "APK 2.0.1-rc2 ສຳລັບການກວດຮັບ MDM, ເຄື່ອງພິມ ແລະ ພາສາ",
    warning: "ຍັງບໍ່ອະນຸມັດໃຊ້ຂາຍຈິງ ໃຫ້ທົດສອບໃນຮ້ານທົດສອບເທົ່ານັ້ນ",
    download: "ດາວໂຫຼດ APK ທົດສອບ",
    release: "ກວດສອບ GitHub Release",
    back: "ກັບສູນດາວໂຫຼດ",
    device: "Android 8.0+ (API 26) · ໂທລະສັບ",
    checksum: "SHA-256",
  },
} as const;

export default async function NativeMobileQaDownloadPage() {
  const locale = await getRequestedLocale();
  const t = translations[locale as keyof typeof translations] ?? translations.th;
  return (
    <main className="min-h-[calc(100dvh-80px)] bg-[#090e1c] px-5 py-12 text-white sm:py-20">
      <section className="mx-auto max-w-3xl rounded-3xl border border-amber-300/30 bg-white/[0.045] p-7 shadow-xl sm:p-10">
        <p className="text-sm font-bold uppercase tracking-wide text-amber-200">{t.eyebrow}</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{t.heading}</h1>
        <p className="mt-3 leading-7 text-slate-300">{t.description}</p>
        <p className="mt-5 rounded-xl border border-amber-300/20 bg-amber-400/10 p-4 text-sm leading-7 text-amber-100">{t.warning}</p>
        <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-slate-300">
          <span className="rounded-xl border border-white/10 px-3 py-2">v2.0.1-rc2 · Signed</span>
          <span className="rounded-xl border border-white/10 px-3 py-2">{t.device}</span>
        </div>
        <a href={APK_URL} rel="noopener noreferrer"
          className="mt-8 flex min-h-14 items-center justify-center rounded-xl bg-emerald-300 px-5 text-center font-extrabold text-slate-950 hover:bg-emerald-200">
          {t.download}
        </a>
        <p className="mt-6 text-xs font-semibold text-slate-400">{t.checksum}</p>
        <p className="mt-2 break-all font-mono text-xs text-slate-200">{SHA256}</p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold">
          <a href={RELEASE_URL} rel="noopener noreferrer" className="text-sky-300 underline underline-offset-4">{t.release}</a>
          <Link href="/downloads" className="text-slate-300 underline underline-offset-4">{t.back}</Link>
        </div>
      </section>
    </main>
  );
}
