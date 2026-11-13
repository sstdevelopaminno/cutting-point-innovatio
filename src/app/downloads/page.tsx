import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getRequestedLocale } from "@/lib/locale";
import { DownloadPlatformSwitcher } from "@/components/downloads/DownloadPlatformSwitcher";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cuttingpointinnovation.com";
const WINDOWS_FINAL_RELEASE = {
  version: "v0.3.4",
  fileName: "CpIPOS.Desktop_0.3.4_x64-setup.exe",
  url: "https://github.com/sstdevelopaminno/cp-ipos-desktop/releases/download/v0.3.4/CpIPOS.Desktop_0.3.4_x64-setup.exe",
} as const;

// The verified 0.2.5 QA binary is made available by the owner's request, but
// is NOT Authenticode-signed. Do not imply a trusted signature or hardware QA.
// Upgrade link to a separately verified CA-signed release when it exists.
const WINDOWS_WEB_POS_CURRENT_RELEASE = {
  version: "v0.2.5 · 2 จอ",
  fileName: "CpIPOS-WindowsWebPOS-Setup.exe",
  url: "https://github.com/sstdevelopaminno/CpIPOS/releases/download/windows-webpos-v0.2.5-width-qa1/CpIPOS-WindowsWebPOS-Setup.exe",
} as const;

const ANDROID_TABLET_RELEASE = {
  version: "v1.0.27 QA · 2 จอ",
  versionCode: 36,
  fileName: "CpIPOS-Android-POS-1.0.27.apk",
  url: "/downloads/apk/CpIPOS-Android-POS-1.0.27.apk",
} as const;

const ANDROID_TABLET_STABLE_1025 =
  "/downloads/apk/CpIPOS-Android-POS-1.0.25.apk";
const WINDOWS_WEBPOS_PREVIOUS_BETA =
  "https://github.com/sstdevelopaminno/CpIPOS/releases/download/windows-webpos-v0.2.0-beta1/CpIPOS-WindowsWebPOS-Setup.exe";

// The website and installed Android phones share ONE verified stable release
// authority: CpIPOS's signed /api/android-pos/native-update-policy endpoint.
// Keep the latest independently verified public Stable APK as a safe fallback\n// when the update-policy API is temporarily unreachable. Do not use QA assets.
const ANDROID_MOBILE_FALLBACK = {
  version: "v2.1.0",
  minAndroid: "Android 8.0+",
  fileName: "CpIPOS-Native-Mobile-2.1.0.apk",
  url: "https://github.com/sstdevelopaminno/CpIPOS/releases/download/native-mobile-v2.1.0/CpIPOS-Native-Mobile-2.1.0.apk",
} as const;

// Manual QA download shown in the existing Android Mobile installer card.
// Keep separate from the verified Stable policy used for customer auto-updates.
const ANDROID_MOBILE_QA = {
  version: "v2.1.4 QA",
  minAndroid: "Android 8.0+",
  fileName: "CpIPOS-Native-Mobile-2.1.4.apk",
  url: "/downloads/apk/CpIPOS-Native-Mobile-2.1.4.apk",
} as const;

const ANDROID_MOBILE_STABLE_DIRECT = "/downloads/apk/CpIPOS-Native-Mobile-2.1.0.apk";

const NATIVE_MOBILE_EXPECTED_CERT = "6be0a9aef346a5b47162c8928c5018a01d0e7d81b4eb177bf2fb89922dc2a27a";
const NATIVE_MOBILE_UPDATE_POLICY =
  "https://pos.cuttingpointinnovation.com/api/android-pos/native-update-policy?version_code=0";

type NativeMobileUpdateOffer = {
  ok?: boolean;
  versionName?: string;
  versionCode?: number;
  packageName?: string;
  apkUrl?: string;
  apkSha256?: string;
  signingCertSha256?: string;
};

async function getVerifiedAndroidMobileRelease() {
  try {
    const response = await fetch(NATIVE_MOBILE_UPDATE_POLICY, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(8000),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return ANDROID_MOBILE_FALLBACK;
    const release = (await response.json()) as NativeMobileUpdateOffer;
    const version = release.versionName;
    if (!release.ok || !version || !/^\d+\.\d+\.\d+$/.test(version) ||
      !Number.isSafeInteger(release.versionCode) || (release.versionCode ?? 0) < 2000000 ||
      release.packageName !== "com.cpipos.pos.next" ||
      !/^[a-f0-9]{64}$/.test(release.apkSha256 ?? "") ||
      release.signingCertSha256?.toLowerCase() !== NATIVE_MOBILE_EXPECTED_CERT) {
      return ANDROID_MOBILE_FALLBACK;
    }
    const expectedUrl = `https://github.com/sstdevelopaminno/CpIPOS/releases/download/native-mobile-v${version}/CpIPOS-Native-Mobile-${version}.apk`;
    if (release.apkUrl !== expectedUrl) return ANDROID_MOBILE_FALLBACK;
    return {
      version: `v${version}`,
      fileName: `CpIPOS-Native-Mobile-${version}.apk`,
      minAndroid: "Android 8.0+",
      url: expectedUrl,
    };
  } catch {
    return ANDROID_MOBILE_FALLBACK;
  }
}

const copy = {
  th: {
    title: "ดาวน์โหลด CpiPOS Mobile POS Android สำหรับมือถือและแท็บเล็ต | CUTTING POINT INNOVATION",
    description: "ดาวน์โหลด CpiPOS Mobile POS สำหรับมือถือและแท็บเล็ต Android พร้อมสมัครเปิดร้านและทดลองใช้ฟรี 7 วัน ใช้จัดการงานขาย สินค้า สต๊อก และรายงาน",
    heading: "ดาวน์โหลด CpiPOS Mobile POS",
    subtitle: "POS Android สำหรับมือถือและแท็บเล็ตที่ร้านมีอยู่แล้ว พร้อมใช้งานจริง",
    choose: "เลือกไฟล์ดาวน์โหลด",
    windowsCaption: "สำหรับ Windows 10/11 (64-bit)",
    androidCaption: "สำหรับแท็บเล็ตและมือถือ Android",
    windowsEyebrow: "สำหรับ Windows",
    androidEyebrow: "Android",
    windowsButton: "ดาวน์โหลด Windows",
    androidButton: "ดาวน์โหลด Android",
    noLink: "กำลังจัดเตรียมลิงก์ดาวน์โหลด",
    foot: "ไฟล์ติดตั้งจาก CpIPOS Download Center",
  },
  en: {
    title: "CpIPOS Downloads | CUTTING POINT INNOVATION",
    description: "Download CpIPOS software for Windows and Android from the official center.",
    heading: "Download",
    subtitle: "CpIPOS installers for Windows and Android",
    choose: "Choose download",
    windowsCaption: "For Windows 10/11 (64-bit)",
    androidCaption: "For Android tablets and phones",
    windowsEyebrow: "For Windows",
    androidEyebrow: "Android",
    windowsButton: "Download Windows",
    androidButton: "Download Android",
    noLink: "Download link being prepared",
    foot: "CpIPOS Download Center installation files",
  },
  lo: {
    title: "ດາວໂຫຼດ CpIPOS | CUTTING POINT INNOVATION",
    description: "ດາວໂຫຼດໂປຣແກຣມ CpIPOS ສໍາລັບ Windows ແລະ Android.",
    heading: "ດາວໂຫຼດ",
    subtitle: "ໄຟລ໌ຕິດຕັ້ງ CpIPOS ສໍາລັບ Windows ແລະ Android",
    choose: "ເລືອກດາວໂຫຼດ",
    windowsCaption: "ສໍາລັບ Windows 10/11 (64-bit)",
    androidCaption: "ສໍາລັບແທັບເລັດ ແລະ ມືຖື Android",
    windowsEyebrow: "ສໍາລັບ Windows",
    androidEyebrow: "Android",
    windowsButton: "ດາວໂຫຼດ Windows",
    androidButton: "ດາວໂຫຼດ Android",
    noLink: "ກໍາລັງກຽມລິ້ງດາວໂຫຼດ",
    foot: "ໄຟລ໌ຕິດຕັ້ງຈາກ CpIPOS Download Center",
  },
} as const;

type Lang = keyof typeof copy;

const VERIFIED_COMPANY_APK_PATHS = new Set([
  "/downloads/apk/CpIPOS-Native-Mobile-2.1.4.apk",
  "/downloads/apk/CpIPOS-Native-Mobile-2.1.3.apk",
  "/downloads/apk/CpIPOS-Native-Mobile-2.1.2.apk",
  "/downloads/apk/CpIPOS-Native-Mobile-2.1.0.apk",
  "/downloads/apk/CpIPOS-Android-POS-1.0.27.apk",
  "/downloads/apk/CpIPOS-Android-POS-1.0.25.apk",
]);

function approvedHttpsUrl(value: string | undefined): string | null {
  if (!value) return null;
  if (VERIFIED_COMPANY_APK_PATHS.has(value)) return value;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && Boolean(url.hostname) && !url.username && !url.password ? url.toString() : null;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestedLocale();
  const item = copy[locale as Lang];
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  return {
    metadataBase: new URL(baseUrl),
    title: { absolute: item.title },
    description: item.description,
    alternates: { canonical: "/downloads" },
    openGraph: { title: item.title, description: item.description, url: `${baseUrl}/downloads`, type: "website" },
  };
}

export default async function DownloadsPage() {
  const lang = (await getRequestedLocale()) as Lang;
  const item = copy[lang];
  const androidMobileRelease = await getVerifiedAndroidMobileRelease();
  const windowsUrl = approvedHttpsUrl(WINDOWS_FINAL_RELEASE.url);
  const windowsWebPosUrl = approvedHttpsUrl(WINDOWS_WEB_POS_CURRENT_RELEASE.url);
  const androidTabletUrl = approvedHttpsUrl(ANDROID_TABLET_RELEASE.url);
  const androidMobileUrl = approvedHttpsUrl(ANDROID_MOBILE_QA.url);
  return (
    <main className="relative isolate min-h-[calc(100dvh-80px)] overflow-hidden bg-[#090e1c] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_8%_10%,rgba(17,120,191,.16),transparent_34%),radial-gradient(ellipse_at_94%_84%,rgba(17,130,115,.12),transparent_29%)]"
      />
      <section className="mx-auto w-full max-w-6xl px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:pt-12">
        <div className="mb-9 flex items-center justify-between gap-4 sm:mb-10">
          <div className="flex items-center gap-3">
            <Image src="/brand/logo-icon.png" alt="CpIPOS" width={46} height={46} className="h-11 w-11 object-contain" priority />
            <span className="flex flex-col leading-tight">
              <strong className="text-lg tracking-tight">CpIPOS</strong>
              <span className="text-xs font-semibold text-slate-400">Download Center</span>
            </span>
          </div>
          <span className="hidden text-[10px] font-semibold tracking-[.37em] text-slate-500 sm:block">SIMPLE · STABLE</span>
        </div>

        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-9">
          <span aria-hidden="true" className="mx-auto mb-5 block h-px w-20 bg-sky-300" />
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {item.heading} <span className="bg-gradient-to-r from-sky-200 to-cyan-400 bg-clip-text text-transparent">CpIPOS</span>
          </h1>
          <p className="mt-4 text-sm font-semibold text-slate-300 sm:text-lg">{item.subtitle}</p>
        </div>

        <DownloadPlatformSwitcher
          chooseLabel={item.choose}
          windowsLabel={item.windowsEyebrow}
          androidLabel={item.androidEyebrow}
          windows={{
            id: "windows",
            tone: "windows",
            icon: "windows",
            eyebrow: item.windowsEyebrow,
            title: "Windows Desktop",
            description: item.windowsCaption,
            version: WINDOWS_FINAL_RELEASE.version,
            fileName: WINDOWS_FINAL_RELEASE.fileName,
            buttonLabel: item.windowsButton,
            noLinkLabel: item.noLink,
            href: windowsUrl,
          }}
          windowsWebPos={{
            id: "windows-web-pos",
            tone: "windows",
            icon: "windows",
            eyebrow: "WINDOWS · WEB POS",
            title: "Windows Web POS",
            description: lang === "th"
              ? "สำหรับ Windows 10/11 (64-bit) · รองรับ 2 จอและเครื่องพิมพ์ · ไฟล์ยังไม่มีลายเซ็นดิจิทัล Authenticode"
              : lang === "lo"
                ? "ສໍາລັບ Windows 10/11 (64-bit) · Local Print Bridge · ໄຟລ໌ຍັງບໍ່ມີລາຍເຊັນ Authenticode"
                : "Windows 10/11 (64-bit) · Receipt-printer bridge · Installer not yet Authenticode-signed",
            version: WINDOWS_WEB_POS_CURRENT_RELEASE.version,
            fileName: WINDOWS_WEB_POS_CURRENT_RELEASE.fileName,
            buttonLabel: lang === "th"
              ? "ดาวน์โหลด Windows Web POS"
              : lang === "lo"
                ? "ດາວໂຫຼດ Windows Web POS"
                : "Download Windows Web POS",
            noLinkLabel: item.noLink,
            href: windowsWebPosUrl,
          }}
          androidTablet={{
            id: "android-tablet",
            tone: "android",
            icon: "android-tablet",
            eyebrow: lang === "th" ? "ANDROID · TABLET / POS" : lang === "lo" ? "ANDROID · TABLET / POS" : "ANDROID · TABLET / POS",
            title: lang === "th" ? "Android Tablet" : lang === "lo" ? "Android Tablet" : "Android Tablet",
            description: lang === "th"
              ? "สำหรับแท็บเล็ตและเครื่อง POS Android รองรับหน้าจอ 1–2 จอ พร้อม Customer Display V2"
              : lang === "lo"
                ? "ສຳລັບແທັບເລັດ ຫຼື ເຄື່ອງ POS Android ໜ້າຈໍໃຫຍ່"
                : "For Android tablets and large-screen POS terminals",
            version: ANDROID_TABLET_RELEASE.version,
            fileName: ANDROID_TABLET_RELEASE.fileName,
            buttonLabel: lang === "th" ? "ดาวน์โหลด Android Tablet" : lang === "lo" ? "ດາວໂຫຼດສຳລັບແທັບເລັດ" : "Download for Tablet",
            noLinkLabel: item.noLink,
            href: androidTabletUrl,
          }}
          androidMobile={{
            id: "android-mobile",
            tone: "android",
            icon: "android-mobile",
            eyebrow: "ANDROID · NATIVE MOBILE",
            title: lang === "th" ? "Android Mobile" : lang === "lo" ? "Android Mobile" : "Android Mobile",
            description: lang === "th"
              ? `ระบบ POS สำหรับมือถือ Android · รองรับ ${ANDROID_MOBILE_QA.minAndroid}`
              : lang === "lo"
                ? `ລະບົບ POS ສຳລັບມືຖື Android · ຮອງຮັບ ${ANDROID_MOBILE_QA.minAndroid}`
                : `Native POS for Android phones · supports ${ANDROID_MOBILE_QA.minAndroid}`,
            version: ANDROID_MOBILE_QA.version,
            fileName: ANDROID_MOBILE_QA.fileName,
            buttonLabel: lang === "th" ? "ดาวน์โหลด Android Mobile (QA)" : lang === "lo" ? "ດາວໂຫຼດ Android Mobile (QA)" : "Download for Mobile (QA)",
            noLinkLabel: item.noLink,
            href: androidMobileUrl,
          }}
        />

        <div role="note" className="mx-auto mt-6 max-w-5xl rounded-2xl border border-amber-300/30 bg-amber-100/[0.07] p-5 text-sm leading-7 text-amber-100">
          {lang === "th"
            ? "Android Mobile 2.1.4 QA เป็นรุ่นทดสอบ ยังไม่ผ่านการรับรองใช้งานหน้าร้านจริงครบทุกขั้นตอน ไม่แนะนำให้ติดตั้งบนเครื่องขายหลัก หากใช้งานจริงให้เลือก Stable 2.1.0 จากหัวข้ออัปเดตแอปด้านล่าง"
            : lang === "lo"
              ? "Android Mobile 2.1.4 QA ເປັນລຸ້ນທົດສອບ ບໍ່ຄວນຕິດຕັ້ງໃນເຄື່ອງຂາຍຫຼັກ. ສຳລັບຮ້ານທີ່ໃຊ້ງານຈິງ ໃຫ້ໃຊ້ Stable 2.1.0"
              : "Android Mobile 2.1.4 QA is a test-only build, not fully accepted for live store use. Do not install it on your primary cashier device. Use Stable 2.1.0 below for production."}
        </div>

        <section aria-labelledby="previous-versions" className="mx-auto mt-6 max-w-5xl rounded-3xl border border-slate-200/15 bg-white/[0.04] p-5 sm:p-6">
          <h2 id="previous-versions" className="text-lg font-extrabold text-white">
            {lang === "th" ? "ดาวน์โหลดเวอร์ชันก่อนหน้า" : lang === "lo" ? "ດາວໂຫຼດເວີຊັນກ່ອນໜ້າ" : "Previous versions"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-200">
            {lang === "th"
              ? "หากต้องการใช้เวอร์ชันก่อนหน้า สามารถเลือกดาวน์โหลดได้จากลิงก์ด้านล่าง"
              : lang === "lo"
                ? "ຫາກຕ້ອງການເວີຊັນກ່ອນໜ້າ ສາມາດເລືອກດາວໂຫຼດໄດ້ຈາກລິ້ງດ້ານລຸ່ມ"
                : "If you need an earlier version, select it from the download links below."}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a href={ANDROID_TABLET_STABLE_1025} className="font-semibold text-sky-200 underline underline-offset-4">
              Android Tablet 1.0.25 · Stable
            </a>
            <a href={WINDOWS_WEBPOS_PREVIOUS_BETA} className="font-semibold text-sky-200 underline underline-offset-4">
              Windows Web POS 0.2.0 · Previous Beta
            </a>
          </div>
        </section>

        <section aria-labelledby="download-start-title" className="mx-auto mt-8 max-w-5xl rounded-3xl border border-cyan-300/25 bg-cyan-300/[0.07] p-5 sm:p-7">
          <h2 id="download-start-title" className="text-xl font-extrabold text-white">
            {lang === "th" ? "ยังไม่มีบัญชีร้าน? ทดลอง CpiPOS ฟรี 7 วัน" : lang === "lo" ? "ຍັງບໍ່ມີບັນຊີຮ້ານ? ທົດລອງ CpiPOS ຟຣີ 7 ມື້" : "New to CpiPOS? Start a free 7-day trial"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {lang === "th"
              ? "หากเพิ่งดาวน์โหลดแอปและยังไม่มีข้อมูลเข้าสู่ระบบ ให้สมัครเปิดร้านก่อน แล้วจึงใช้บัญชีร้านที่ได้รับเข้าสู่แอปบนมือถือหรือแท็บเล็ต Android ที่รองรับ"
              : lang === "lo"
                ? "ຖ້າຍັງບໍ່ມີຂໍ້ມູນເຂົ້າລະບົບ ໃຫ້ລົງທະບຽນຮ້ານກ່ອນ ແລ້ວໃຊ້ບັນຊີຮ້ານເຂົ້າແອັບ Android"
                : "If you have downloaded the app but do not yet have store credentials, register your store first, then sign in on a supported Android phone or tablet."}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/register-store" className="inline-flex min-h-11 items-center justify-center rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
              {lang === "th" ? "สมัครเปิดร้านทดลองใช้ฟรี 7 วัน" : lang === "lo" ? "ລົງທະບຽນຮ້ານ ທົດລອງຟຣີ 7 ມື້" : "Register store — free 7-day trial"}
            </Link>
            <Link href="/trial/pos" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-500 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300">
              {lang === "th" ? "ดูขั้นตอนทดลองใช้" : lang === "lo" ? "ເບິ່ງຂັ້ນຕອນທົດລອງ" : "How the trial works"}
            </Link>
            <Link href="/contact?utm_source=website&utm_medium=downloads&utm_campaign=cpipos_inbound&utm_content=help_setup" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-emerald-300/60 bg-emerald-300/10 px-5 py-3 text-sm font-bold text-emerald-100 transition hover:bg-emerald-300/20">
              {lang === "th" ? "สอบถามการติดตั้ง / เริ่มใช้งาน" : lang === "lo" ? "ສອບຖາມການຕິດຕັ້ງ" : "Ask for setup help"}
            </Link>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {lang === "th" ? "ไม่แน่ใจว่าจะเลือกมือถือหรือแท็บเล็ต?" : lang === "lo" ? "ບໍ່ແນ່ໃຈວ່າຈະເລືອກມືຖືຫຼືແທັບເລັດ?" : "Not sure whether to use a phone or tablet?"}{" "}
            <Link href="/articles/pos-android" className="font-semibold text-cyan-200 underline underline-offset-4 hover:text-cyan-100">
              {lang === "th" ? "อ่านคู่มือ POS Android ก่อนดาวน์โหลด" : lang === "lo" ? "ອ່ານຄູ່ມື POS Android" : "Read our Android POS guide"}
            </Link>
          </p>
        </section>

        <section aria-labelledby="android-upgrade-title" className="mx-auto mt-8 max-w-5xl rounded-3xl border border-sky-300/25 bg-sky-300/[0.065] p-5 sm:p-7">
          <h2 id="android-upgrade-title" className="text-xl font-extrabold text-white">
            {lang === "th"
              ? "ใช้งาน CpiPOS Mobile รุ่นเก่าอยู่แล้ว? อัปเดตทับแอปเดิมได้"
              : lang === "lo"
                ? "ໃຊ້ CpiPOS Mobile ລຸ້ນເກົ່າຢູ່? ຕິດຕັ້ງອັບເດດທັບແອັບເດີມ"
                : "Already using an older CpiPOS Mobile version? Update without uninstalling"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {lang === "th"
              ? `APK Stable ล่าสุดที่ผ่านระบบตรวจสอบ: ${androidMobileRelease.version} · ปิดรายการขายและตรวจบิลค้างก่อนอัปเดต`
              : lang === "lo"
                ? `APK Stable ລ່າສຸດທີ່ກວດສອບແລ້ວ: ${androidMobileRelease.version} · ປິດລາຍການຂາຍກ່ອນອັບເດດ`
                : `Latest verified Stable APK: ${androidMobileRelease.version}. Finish transactions and resolve pending bills before updating.`}
          </p>
          <a
            href={ANDROID_MOBILE_STABLE_DIRECT}
            className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl border border-sky-300/60 bg-sky-300/10 px-5 py-3 text-sm font-bold text-sky-100 hover:bg-sky-300/20"
          >
            {lang === "th" ? "ดาวน์โหลดมือถือ Stable 2.1.0 จากเว็บไซต์บริษัท" : lang === "lo" ? "ດາວໂຫຼດ Android Mobile Stable 2.1.0 ຈາກເວັບບໍລິສັດ" : "Download verified Stable 2.1.0 from company CDN"}
          </a>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-200">
            {(lang === "th"
              ? [
                  "ปิดรายการขายและบิลที่ค้างอยู่ให้เรียบร้อยก่อน ไม่ต้องล้างข้อมูลหรือถอนแอปเดิม",
                  "หากแอปแจ้งว่ามีอัปเดต ให้ผู้มีสิทธิ์กดยืนยันติดตั้งผ่าน Android",
                  "หากแอปเดิมไม่มีเมนูอัปเดต ให้ใช้ APK Stable ที่ได้รับการยืนยัน หรือติดต่อฝ่ายสนับสนุน",
                  "เมื่อ Android ยืนยันการติดตั้งเสร็จ ให้เปิดแอป ตรวจเวอร์ชัน และลองเข้าร้าน/เปิดกะอีกครั้ง"
                ]
              : lang === "lo"
                ? [
                    "ປິດບິນທີ່ຄ້າງກ່ອນ; ຢ່າຖອນແອັບ ຫຼື ລ້າງຂໍ້ມູນ",
                    "ຖ້າແອັບແຈ້ງອັບເດດ ໃຫ້ຜູ້ມີສິດກົດຢືນຢັນຕິດຕັ້ງ",
                    "ຖ້າບໍ່ມີເມນູອັບເດດ ໃຫ້ໃຊ້ APK Stable ທີ່ຢືນຢັນແລ້ວ ຫຼືຕິດຕໍ່ຝ່າຍຊ່ວຍເຫຼືອ",
                    "ກວດສອບເວີຊັນ ແລະ ເຂົ້າຮ້ານອີກຄັ້ງ"
                  ]
                : [
                    "Finish sales and pending bills. Never uninstall the existing app or clear its data.",
                    "If the app offers an update, have an authorized user confirm Android installation.",
                    "If there is no in-app updater, use the verified Stable APK or contact support.",
                    "After Android confirms the installation, verify the app version and sign in to your store."
                  ]).map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p className="mt-4 text-xs leading-6 text-amber-100/90">
            {lang === "th"
              ? "หาก Android แจ้งว่าอัปเดตไม่ได้ ให้หยุดติดตั้งและติดต่อฝ่ายสนับสนุน ห้ามถอนแอปเพื่อลองใหม่ เพราะอาจสูญเสียข้อมูลที่ยังไม่ส่งขึ้นเซิร์ฟเวอร์"
              : lang === "lo"
                ? "ຖ້າ Android ຕິດຕັ້ງທັບບໍ່ໄດ້ ໃຫ້ຢຸດ ແລະ ຕິດຕໍ່ຝ່າຍຊ່ວຍເຫຼືອ; ຢ່າຖອນແອັບ"
                : "If Android cannot update the existing app, stop and contact support. Do not uninstall to retry: unresolved local sales data could be lost."}
          </p>
        </section>

        <section aria-labelledby="android-install-title" className="mx-auto mt-10 max-w-5xl rounded-3xl border border-sky-200/15 bg-white/[0.045] p-5 sm:p-7">
          <h2 id="android-install-title" className="text-xl font-extrabold text-white">
            {lang === "th" ? "วิธีติดตั้ง CpIPOS บน Android" : lang === "lo" ? "ວິທີຕິດຕັ້ງ CpIPOS ໃນ Android" : "How to install CpIPOS on Android"}
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            {lang === "th"
              ? "เลือกไฟล์ให้ตรงกับอุปกรณ์: Android Tablet สำหรับแท็บเล็ต/เครื่อง POS และ Android Mobile สำหรับโทรศัพท์มือถือ (Android 8.0 ขึ้นไป)"
              : lang === "lo"
                ? "ເລືອກ Android Tablet ສຳລັບແທັບເລັດ ຫຼື Android Mobile ສຳລັບໂທລະສັບ (Android 8.0 ຂຶ້ນໄປ)"
                : "Choose Android Tablet for tablets/POS terminals or Android Mobile for phones (Android 8.0 or newer)."}
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-200">
            {(lang === "th"
              ? ["ดาวน์โหลด APK จากปุ่มของรุ่นอุปกรณ์ที่ต้องการ", "เปิดไฟล์ APK ที่ดาวน์โหลด และอนุญาตการติดตั้งจากแหล่งนี้เฉพาะเมื่อ Android ขอสิทธิ์", "ติดตั้งและเปิดแอป จากนั้นเข้าสู่ระบบด้วยข้อมูลร้านค้าและเครื่องที่ลงทะเบียน"]
              : lang === "lo"
                ? ["ດາວໂຫຼດ APK ຕາມປະເພດອຸປະກອນ", "ເປີດ APK ແລະອະນຸຍາດຕິດຕັ້ງຈາກແຫຼ່ງນີ້ເມື່ອ Android ຖາມ", "ຕິດຕັ້ງ ເປີດແອັບ ແລະເຂົ້າລະບົບດ້ວຍຂໍ້ມູນຮ້ານ"]
                : ["Download the APK for your device type.", "Open the APK and allow installation from this source if Android prompts you.", "Install and open the app, then sign in with your registered store and device."]).map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p className="mt-4 text-xs leading-6 text-amber-100/80">
            {lang === "th"
              ? "ความปลอดภัย: ไฟล์ APK จากโดเมนเว็บไซต์บริษัทผ่านการตรวจ SHA-256 เทียบกับ GitHub Releases ทางการ ไม่จำเป็นต้องปิด Play Protect และหน้าตาการอนุญาตอาจต่างกันตามรุ่นมือถือ"
              : lang === "lo"
                ? "ຄວາມປອດໄພ: APK ຈາກເວັບບໍລິສັດກວດສອບ SHA-256 ກັບ GitHub Releases; ບໍ່ຕ້ອງປິດ Play Protect"
                : "Security: Company-hosted APK files are verified by SHA-256 against official GitHub Releases. You do not need to disable Play Protect; Android prompts may vary by device."}
          </p>
        </section>

        <p className="mt-12 text-center text-xs font-semibold text-slate-500">© CpIPOS Download Center · {item.foot}</p>
      </section>
    </main>
  );
}