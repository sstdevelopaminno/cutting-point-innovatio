"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Store,
} from "lucide-react";
import SubmitStatusModal from "@/components/SubmitStatusModal";
import { useLang } from "@/components/LangContext";
import { trackGaEvent } from "@/lib/ga";
import { getCopy } from "@/lib/i18n";
import { formatLeadRef } from "@/lib/leadRef";

const PHONE_DISPLAY = "098-546-0355";
const PHONE_HREF = "tel:0985460355";
const LINE_ID = "@174zcwjw";
const LINE_URL = "https://lin.ee/z8qLGjU";
const FACEBOOK_URL = "https://www.facebook.com/122134406553382800";
const EMAIL = "cuttingpointtech@gmail.com";
const MAP_URL = "https://maps.app.goo.gl/K9PJtkZi2RStu3MR8";
const TRIAL_URL =
  "/trial/pos?utm_source=website&utm_medium=contact_page&utm_campaign=cpipos_contact_hub&utm_content=trial_cta";

function FacebookMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.3 1.4-1.3h1.4V5.9c-.2 0-1.1-.1-2.2-.1-2.2 0-3.6 1.3-3.6 3.7v1.8H8.1V14h2.4v7H13.5z" />
    </svg>
  );
}

export default function ContactPageClient() {
  const { lang } = useLang();
  const copy = getCopy(lang);
  const REQUEST_TIMEOUT_MS = 15_000;

  const text =
    lang === "th"
      ? {
          eyebrow: "CONTACT CENTER",
          title: "ช่องทางติดต่อ CUTTING POINT INNOVATION",
          subtitle:
            "ติดต่อทีมงานเรื่อง CpiPOS การทดลองใช้งาน การติดตั้ง การตั้งค่าระบบ หรือการช่วยเหลือด้าน IT ได้จากช่องทางด้านล่าง",
          phoneTitle: "โทรหาเรา",
          phoneDesc: "สอบถาม CpiPOS และบริการของบริษัท",
          lineTitle: "LINE Official Account",
          lineDesc: "เพิ่มเพื่อนและแชตกับทีมงานโดยตรง",
          facebookTitle: "Facebook Page",
          facebookDesc: "ติดตามข่าวสาร โปรโมชั่น และส่งข้อความหาเพจ",
          emailTitle: "อีเมล",
          emailDesc: "เหมาะสำหรับรายละเอียดงานและเอกสาร",
          mapTitle: "ที่ตั้งบริษัท",
          mapDesc: "เปิดตำแหน่งบน Google Maps",
          hoursTitle: "เวลาทำการ",
          hoursValue: "จันทร์–ศุกร์ 09:00–17:00 น.",
          addressTitle: "สำนักงาน",
          formTitle: "ส่งข้อความถึงทีมงาน",
          formDesc: "กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับโดยเร็ว",
          trialTitle: "ต้องการทดลอง CpiPOS?",
          trialDesc: "เริ่มทดลองใช้ฟรี 7 วันบนอุปกรณ์ Android ที่รองรับ",
          trialButton: "ทดลองใช้ฟรี 7 วัน",
          addFriend: "เพิ่มเพื่อน LINE",
          open: "เปิด",
        }
      : lang === "lo"
        ? {
            eyebrow: "CONTACT CENTER",
            title: "ຊ່ອງທາງຕິດຕໍ່ CUTTING POINT INNOVATION",
            subtitle:
              "ຕິດຕໍ່ທີມງານກ່ຽວກັບ CpiPOS, ການທົດລອງ, ການຕິດຕັ້ງ ຫຼື ການຊ່ວຍເຫຼືອ IT.",
            phoneTitle: "ໂທຫາພວກເຮົາ",
            phoneDesc: "ສອບຖາມ CpiPOS ແລະ ບໍລິການ",
            lineTitle: "LINE Official Account",
            lineDesc: "ເພີ່ມເພື່ອນ ແລະ ແຊັດກັບທີມງານ",
            facebookTitle: "Facebook Page",
            facebookDesc: "ຕິດຕາມຂ່າວ ແລະ ສົ່ງຂໍ້ຄວາມ",
            emailTitle: "ອີເມວ",
            emailDesc: "ສຳລັບລາຍລະອຽດງານ ແລະ ເອກະສານ",
            mapTitle: "ທີ່ຕັ້ງບໍລິສັດ",
            mapDesc: "ເປີດໃນ Google Maps",
            hoursTitle: "ເວລາເຮັດວຽກ",
            hoursValue: "ຈັນ–ສຸກ 09:00–17:00",
            addressTitle: "ສຳນັກງານ",
            formTitle: "ສົ່ງຂໍ້ຄວາມຫາທີມງານ",
            formDesc: "ກອກຂໍ້ມູນ ແລະ ທີມງານຈະຕິດຕໍ່ກັບ",
            trialTitle: "ຕ້ອງການທົດລອງ CpiPOS?",
            trialDesc: "ທົດລອງຟຣີ 7 ມື້ເທິງ Android ທີ່ຮອງຮັບ",
            trialButton: "ທົດລອງຟຣີ 7 ມື້",
            addFriend: "ເພີ່ມເພື່ອນ LINE",
            open: "ເປີດ",
          }
        : {
            eyebrow: "CONTACT CENTER",
            title: "Contact CUTTING POINT INNOVATION",
            subtitle:
              "Reach our team for CpiPOS trials, onboarding, setup, or IT support through the channels below.",
            phoneTitle: "Call us",
            phoneDesc: "CpiPOS and company service enquiries",
            lineTitle: "LINE Official Account",
            lineDesc: "Add our official account and chat with the team",
            facebookTitle: "Facebook Page",
            facebookDesc: "Follow updates and message our Page",
            emailTitle: "Email",
            emailDesc: "Best for project details and documents",
            mapTitle: "Company location",
            mapDesc: "Open our location in Google Maps",
            hoursTitle: "Business hours",
            hoursValue: "Mon–Fri 09:00–17:00",
            addressTitle: "Office",
            formTitle: "Send us a message",
            formDesc: "Submit the form and our team will get back to you.",
            trialTitle: "Want to try CpiPOS?",
            trialDesc: "Start a 7-day free trial on a compatible Android device.",
            trialButton: "Start 7-day free trial",
            addFriend: "Add LINE friend",
            open: "Open",
          };

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [debugRequestId, setDebugRequestId] = useState<string | null>(null);
  const [leadRef, setLeadRef] = useState<string | null>(null);
  const [submitModal, setSubmitModal] = useState<
    | { open: false }
    | {
        open: true;
        variant: "sending" | "success" | "error";
        title: string;
        message?: string;
      }
  >({ open: false });
  const submitModalTimerRef = useRef<number | null>(null);
  const submitInFlightRef = useRef(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    company: "",
    startedAt: null as number | null,
  });

  const isDev =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  const formLabelClass =
    lang === "th"
      ? "text-xs font-semibold text-slate-500"
      : "text-xs uppercase tracking-[0.2em] text-slate-500";
  const submitClass =
    "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400";

  const submitModalVariant = submitModal.open ? submitModal.variant : null;

  const getNotificationWarning = (notifications: {
    email?: "sent" | "skipped" | "failed";
    line?: "sent" | "skipped" | "failed";
  } | null) => {
    if (!notifications) return null;
    const issues: string[] = [];
    if (notifications.email && notifications.email !== "sent") {
      issues.push(`Email: ${notifications.email}`);
    }
    if (notifications.line && notifications.line !== "sent") {
      issues.push(`LINE: ${notifications.line}`);
    }
    if (!issues.length) return null;
    return lang === "th"
      ? `หมายเหตุ: การแจ้งเตือนบางช่องทางยังไม่สำเร็จ (${issues.join(", ")})`
      : `Note: some notifications were not delivered (${issues.join(", ")})`;
  };

  const setStartedAtIfMissing = () => {
    setFormData((prev) => (prev.startedAt ? prev : { ...prev, startedAt: Date.now() }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitInFlightRef.current || status === "loading") return;

    submitInFlightRef.current = true;
    trackGaEvent("contact_submit_attempt", { locale: lang, page: "contact_hub" });
    setStatus("loading");
    setErrorMessage(null);
    setDebugRequestId(null);
    setLeadRef(null);
    setSubmitModal({
      open: true,
      variant: "sending",
      title: copy.contact.sending,
      message: undefined,
    });

    const controller = new AbortController();
    let timeoutId: number | null = null;

    try {
      timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale: lang }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        setDebugRequestId(data?.requestId ?? null);
        throw new Error(data?.error || "Submission failed");
      }

      const notificationWarning = getNotificationWarning(data?.notifications ?? null);
      setStatus("success");
      setLeadRef(formatLeadRef(data?.leadId ?? null));
      trackGaEvent("contact_submit_success", { locale: lang, page: "contact_hub" });
      setSubmitModal({
        open: true,
        variant: "success",
        title:
          lang === "th"
            ? "ส่งสำเร็จ"
            : lang === "lo"
              ? "ສົ່ງສຳເລັດ"
              : "Sent successfully",
        message: notificationWarning
          ? `${copy.contact.success}\n${notificationWarning}`
          : copy.contact.success,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        company: "",
        startedAt: null,
      });
    } catch (error) {
      const isAbort = error instanceof DOMException && error.name === "AbortError";
      const message = isAbort
        ? lang === "th"
          ? "การเชื่อมต่อใช้เวลานานเกินไป กรุณาลองใหม่อีกครั้ง"
          : "Request timed out. Please try again."
        : error instanceof Error
          ? error.message
          : "Submission failed. Please try again.";

      trackGaEvent("contact_submit_error", { locale: lang, page: "contact_hub" });
      setErrorMessage(message);
      setStatus("error");
      setSubmitModal({
        open: true,
        variant: "error",
        title:
          lang === "th"
            ? "ส่งไม่สำเร็จ"
            : lang === "lo"
              ? "ສົ່ງບໍ່ສຳເລັດ"
              : "Failed to send",
        message,
      });
    } finally {
      if (timeoutId) window.clearTimeout(timeoutId);
      submitInFlightRef.current = false;
    }
  };

  useEffect(() => {
    if (submitModalTimerRef.current) {
      window.clearTimeout(submitModalTimerRef.current);
      submitModalTimerRef.current = null;
    }
    if (!submitModal.open) return;

    if (submitModalVariant === "success") {
      submitModalTimerRef.current = window.setTimeout(() => {
        setSubmitModal({ open: false });
        setStatus("idle");
        setErrorMessage(null);
        setDebugRequestId(null);
        setLeadRef(null);
        submitModalTimerRef.current = null;
      }, 3500);
      return;
    }

    if (submitModalVariant === "error") {
      submitModalTimerRef.current = window.setTimeout(() => {
        setSubmitModal({ open: false });
        submitModalTimerRef.current = null;
      }, 6000);
    }
  }, [submitModal.open, submitModalVariant]);

  useEffect(() => {
    return () => {
      if (submitModalTimerRef.current) window.clearTimeout(submitModalTimerRef.current);
    };
  }, []);

  const channelClass =
    "group rounded-3xl border border-slate-200 bg-white p-5 shadow-card-soft transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg";
  const iconClass =
    "flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white";

  return (
    <main className="min-h-screen bg-mist text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-white via-white to-blue-50/40 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            {text.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            {text.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            {text.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#06C755] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#05b84e]"
            >
              <MessageCircle className="h-4 w-4" />
              {text.addFriend}
            </a>
            <a
              href={TRIAL_URL}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              <Store className="h-4 w-4" />
              {text.trialButton}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href={PHONE_HREF} className={channelClass}>
              <div className={iconClass}>
                <Phone className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-950">{text.phoneTitle}</h2>
              <p className="mt-1 text-lg font-bold text-blue-600">{PHONE_DISPLAY}</p>
              <p className="mt-2 text-sm text-slate-600">{text.phoneDesc}</p>
            </a>

            <a href={LINE_URL} target="_blank" rel="noreferrer" className={channelClass}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#06C755] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-950">{text.lineTitle}</h2>
              <p className="mt-1 text-lg font-bold text-[#06A84A]">{LINE_ID}</p>
              <p className="mt-2 text-sm text-slate-600">{text.lineDesc}</p>
            </a>

            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className={channelClass}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1877F2] text-white">
                <FacebookMark className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-950">{text.facebookTitle}</h2>
              <p className="mt-1 text-lg font-bold text-blue-600">CPInno</p>
              <p className="mt-2 text-sm text-slate-600">{text.facebookDesc}</p>
            </a>

            <a href={`mailto:${EMAIL}`} className={channelClass}>
              <div className={iconClass}>
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-950">{text.emailTitle}</h2>
              <p className="mt-1 break-all text-sm font-bold text-blue-600">{EMAIL}</p>
              <p className="mt-2 text-sm text-slate-600">{text.emailDesc}</p>
            </a>

            <a href={MAP_URL} target="_blank" rel="noreferrer" className={channelClass}>
              <div className={iconClass}>
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-950">{text.mapTitle}</h2>
              <p className="mt-1 text-sm font-bold text-blue-600">
                {copy.footer.address}
              </p>
              <p className="mt-2 inline-flex items-center gap-1 text-sm text-slate-600">
                {text.mapDesc} <ExternalLink className="h-3.5 w-3.5" />
              </p>
            </a>

            <div className={channelClass}>
              <div className={iconClass}>
                <Clock3 className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-950">{text.hoursTitle}</h2>
              <p className="mt-1 text-lg font-bold text-slate-900">{text.hoursValue}</p>
              <p className="mt-2 text-sm text-slate-600">
                {text.addressTitle}: {copy.footer.address}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card-soft sm:p-8">
              <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-slate-950">
                {text.formTitle}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{text.formDesc}</p>

              <form
                className="mt-6 space-y-4"
                onSubmit={handleSubmit}
                onFocusCapture={setStartedAtIfMissing}
              >
                <div>
                  <label className={formLabelClass} htmlFor="contact-name">
                    {copy.contact.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    maxLength={120}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        name: event.target.value,
                        startedAt: formData.startedAt ?? Date.now(),
                      })
                    }
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className={formLabelClass} htmlFor="contact-phone">
                      {copy.contact.phone}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      maxLength={50}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500"
                      value={formData.phone}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          phone: event.target.value,
                          startedAt: formData.startedAt ?? Date.now(),
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className={formLabelClass} htmlFor="contact-email">
                      {copy.contact.email}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      maxLength={120}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          email: event.target.value,
                          startedAt: formData.startedAt ?? Date.now(),
                        })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className={formLabelClass} htmlFor="contact-message">
                    {copy.contact.message}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    maxLength={2000}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500"
                    value={formData.message}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        message: event.target.value,
                        startedAt: formData.startedAt ?? Date.now(),
                      })
                    }
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                  value={formData.company}
                  onChange={(event) =>
                    setFormData({ ...formData, company: event.target.value })
                  }
                />

                <button
                  type="submit"
                  className={submitClass}
                  disabled={status === "loading"}
                  aria-busy={status === "loading"}
                >
                  {status === "loading" ? copy.contact.sending : copy.contact.submit}
                </button>

                {status === "error" ? (
                  <p className="text-sm text-rose-600">
                    {errorMessage ||
                      (lang === "th"
                        ? "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง"
                        : "Submission failed. Please try again.")}
                    {isDev && debugRequestId ? ` (requestId: ${debugRequestId})` : ""}
                  </p>
                ) : null}
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 to-slate-950 p-7 text-white shadow-card-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                  CpiPOS
                </p>
                <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold">
                  {text.trialTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-blue-50">{text.trialDesc}</p>
                <a
                  href={TRIAL_URL}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
                >
                  {text.trialButton}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card-soft">
                <h2 className="font-[var(--font-heading)] text-xl font-semibold text-slate-950">
                  {text.addressTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{copy.footer.company}</p>
                <p className="text-sm leading-7 text-slate-600">{copy.footer.address}</p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  {text.mapDesc}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubmitStatusModal
        open={submitModal.open}
        variant={submitModal.open ? submitModal.variant : "sending"}
        title={submitModal.open ? submitModal.title : ""}
        message={submitModal.open ? submitModal.message : undefined}
        reference={submitModal.open && submitModal.variant === "success" ? leadRef : null}
        closeLabel={lang === "th" ? "ตกลง" : lang === "lo" ? "ຕົກລົງ" : "OK"}
        onClose={() => setSubmitModal({ open: false })}
      />
    </main>
  );
}
