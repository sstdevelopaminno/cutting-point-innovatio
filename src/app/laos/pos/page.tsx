import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cuttingpointinnovation.com";
const baseUrl = SITE_URL.replace(/\/+$/, "");

const plans = [
  { name: "Starter", audience: "ສຳລັບຮ້ານຂະໜາດນ້ອຍ", monthly: "350", yearly: "3,780", two: "7,560", three: "11,340", popular: false },
  { name: "Growth", audience: "ແພັກເກດຍອດນິຍົມສຳລັບຮ້ານທີ່ກຳລັງເຕີບໂຕ", monthly: "550", yearly: "5,940", two: "11,880", three: "17,820", popular: true },
  { name: "Business", audience: "ສຳລັບທຸລະກິດທີ່ກຳລັງຂະຫຍາຍ", monthly: "1,500", yearly: "16,200", two: "32,400", three: "48,600", popular: false },
] as const;

const faqs = [
  {
    question: "CpiPOS ມີທັງແພັກເກດລາຍເດືອນແລະລາຍປີບໍ?",
    answer: "ມີ ສາມາດເລີ່ມ Starter 350 ບາດ/ເດືອນ, Growth 550 ບາດ/ເດືອນ ແລະ Business 1,500 ບາດ/ເດືອນ ຫຼືເລືອກລາຍປີຕາມຄວາມເໝາະສົມ.",
  },
  {
    question: "CpiPOS ສາມາດທົດລອງໃຊ້ກ່ອນໄດ້ບໍ?",
    answer: "ໄດ້ ສາມາດຂໍທົດລອງໃຊ້ກັບຮ້ານຈິງ 7 ມື້ ເພື່ອທົດສອບຂັ້ນຕອນຂາຍ ສິນຄ້າ ສະຕັອກ ແລະ ການໃຊ້ງານ.",
  },
  {
    question: "ລາຄາສຳລັບລາວຈ່າຍເປັນ LAK ໄດ້ບໍ?",
    answer: "ລາຄາທີ່ສະແດງໃນໜ້ານີ້ເປັນລາຄາອ້າງອີງເປັນບາດ. ກ່ອນຊຳລະສາມາດຂໍໃບສະເໜີລາຄາເປັນ LAK ຈາກທີມງານໄດ້.",
  },
  {
    question: "CUSTOM ເໝາະກັບທຸລະກິດແບບໃດ?",
    answer: "CUSTOM ເໝາະກັບທຸລະກິດທີ່ມີ workflow ສະເພາະ ເຊັ່ນ ຮ້ານແວ່ນຕາ ຫຼື ທຸລະກິດທີ່ຕ້ອງປັບຂໍ້ມູນລູກຄ້າ ສະຕັອກ ແລະ ຂັ້ນຕອນຂາຍຕາມຮູບແບບຂອງຮ້ານ.",
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "CpiPOS Laos | ລະບົບ POS ຮ້ານຄ້າ ຮ້ານອາຫານ ແລະ SME ໃນລາວ",
  description:
    "CpiPOS ລະບົບ POS ສຳລັບຮ້ານຄ້າ ຄາເຟ ຮ້ານອາຫານ ແລະ SME ໃນລາວ. ເລີ່ມ 350 ບາດ/ເດືອນ ຫຼື 3,780 ບາດ/ປີ ພ້ອມຂໍລາຄາເປັນ LAK ແລະທົດລອງໃຊ້ 7 ມື້.",
  keywords: [
    "POS Laos",
    "ລະບົບ POS ລາວ",
    "POS ຮ້ານຄ້າ ລາວ",
    "POS ຮ້ານອາຫານ ລາວ",
    "ໂປຣແກຣມຂາຍໜ້າຮ້ານ",
    "CpiPOS Laos",
  ],
  alternates: { canonical: "/laos/pos" },
  openGraph: {
    title: "CpiPOS Laos — ລະບົບ POS ສຳລັບທຸລະກິດໃນລາວ",
    description: "ຈັດການການຂາຍ ສິນຄ້າ ສະຕັອກ ແລະຂໍ້ມູນຮ້ານ ເລືອກໄດ້ທັງລາຍເດືອນ ລາຍປີ ແລະ CUSTOM.",
    url: `${baseUrl}/laos/pos`,
    type: "website",
    images: [{ url: "/product-showcase/service-pos.png", alt: "CpiPOS Laos POS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CpiPOS Laos",
    description: "ລະບົບ POS ສຳລັບຮ້ານຄ້າ ຮ້ານອາຫານ ແລະ SME ໃນລາວ",
    images: ["/product-showcase/service-pos.png"],
  },
  robots: { index: true, follow: true },
};

export default function LaosPosPage() {
  return (
    <>
      <StructuredData
        locale="lo"
        breadcrumbs={[
          { name: "ໜ້າຫຼັກ", item: `${baseUrl}/` },
          { name: "CpiPOS Laos", item: `${baseUrl}/laos/pos` },
        ]}
        faqs={faqs}
      />

      <main lang="lo" className="min-h-screen bg-slate-50 text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <p className="text-sm font-black tracking-widest text-blue-700">CpiPOS · LAOS</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">
              ລະບົບ POS ສຳລັບຮ້ານຄ້າ ຄາເຟ ຮ້ານອາຫານ ແລະ SME ໃນລາວ
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              CpiPOS ຊ່ວຍຈັດການການຂາຍ ສິນຄ້າ ສະຕັອກ ແລະຂໍ້ມູນຮ້ານ
              ໂດຍເນັ້ນການເລີ່ມໃຊ້ງານທີ່ງ່າຍ ແລະເລືອກແພັກເກດຕາມຂະໜາດທຸລະກິດ.
            </p>
            <div className="mt-6 inline-flex rounded-2xl border border-blue-200 bg-white px-5 py-4 shadow-sm">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700">Monthly or Annual</p>
                <p className="mt-1 text-2xl font-black text-slate-950">ເລີ່ມ 350 ບາດ / ເດືອນ</p>
                <p className="mt-1 text-sm font-semibold text-blue-700">ຫຼື 3,780 ບາດ / ປີ</p>
                <p className="mt-1 text-sm text-slate-600">ສາມາດຂໍໃບສະເໜີລາຄາເປັນ LAK ກ່ອນຊຳລະ</p>
              </div>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/trial/pos?utm_source=laos_landing&utm_medium=organic&utm_campaign=laos_pricing" className="rounded-xl bg-blue-700 px-6 py-4 font-bold text-white hover:bg-blue-800">
                ເບິ່ງ Web Demo
              </Link>
              <Link href="/register-store?utm_source=laos_landing&utm_medium=organic&utm_campaign=laos_pricing" className="rounded-xl border border-blue-700 bg-white px-6 py-4 font-bold text-blue-800 hover:bg-blue-50">
                ຂໍທົດລອງໃຊ້ 7 ມື້
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["ຂາຍໜ້າຮ້ານ", "ຈັດການລາຍການຂາຍ ສິນຄ້າ ແລະຂັ້ນຕອນໜ້າຮ້ານໃຫ້ເປັນລະບົບ"],
              ["ສະຕັອກສິນຄ້າ", "ຕິດຕາມຂໍ້ມູນສິນຄ້າແລະການເຄື່ອນໄຫວຂອງສະຕັອກ"],
              ["ຂໍ້ມູນຍອດຂາຍ", "ເບິ່ງຂໍ້ມູນຍອດຂາຍເພື່ອຊ່ວຍເຈົ້າຂອງຮ້ານຕິດຕາມທຸລະກິດ"],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Pricing</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">ແພັກເກດ CpiPOS ເລືອກໄດ້ທັງລາຍເດືອນ ແລະ ລາຍປີ</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              ລູກຄ້າໃໝ່ສາມາດເລີ່ມແບບລາຍເດືອນໄດ້ກ່ອນ ຫຼືເລືອກລາຍປີເມື່ອຕ້ອງການໃຊ້ງານຕໍ່ເນື່ອງ. ລາຄາດ້ານລຸ່ມເປັນລາຄາອ້າງອີງເປັນບາດ ແລະສາມາດຂໍໃບສະເໜີລາຄາເປັນ LAK ກ່ອນຊຳລະ.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={
                    "rounded-3xl border bg-slate-50 p-6 " +
                    (plan.popular ? "border-blue-400 ring-1 ring-blue-200" : "border-slate-200")
                  }
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-black">{plan.name}</h3>
                    {plan.popular ? <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">ຍອດນິຍົມ</span> : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{plan.audience}</p>
                  <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                    <p className="text-xs font-bold text-blue-700">ເລີ່ມແບບລາຍເດືອນ</p>
                    <p className="mt-1 text-3xl font-black">{plan.monthly} ບາດ <span className="text-sm font-bold text-slate-500">/ ເດືອນ</span></p>
                  </div>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-3"><dt>ລາຍປີ</dt><dd className="font-black">{plan.yearly} ບາດ</dd></div>
                    <div className="flex justify-between gap-3"><dt>2 ປີ</dt><dd className="font-semibold">{plan.two} ບາດ</dd></div>
                    <div className="flex justify-between gap-3"><dt>3 ປີ</dt><dd className="font-semibold">{plan.three} ບາດ</dd></div>
                  </dl>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-violet-200 bg-violet-50 p-6">
              <h3 className="text-xl font-black">CUSTOM — ອອກແບບຕາມຮູບແບບທຸລະກິດ</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
                ສຳລັບທຸລະກິດທີ່ມີ workflow ສະເພາະ ເຊັ່ນ ຮ້ານແວ່ນຕາ ຫຼືຮ້ານທີ່ຕ້ອງການປັບຂໍ້ມູນລູກຄ້າ ສະຕັອກ ແລະຂັ້ນຕອນການຂາຍ. ລາຄາຕາມຂອບເຂດວຽກແລະສັນຍາ.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
            <h2 className="text-2xl font-black">ທົດລອງກັບຮ້ານຈິງກ່ອນຕັດສິນໃຈ</h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-300">
              ທີມງານສາມາດແນະນຳແພັກເກດ ແລະຊ່ວຍຕັ້ງຄ່າເລີ່ມຕົ້ນໃຫ້ເໝາະກັບຮ້ານ. ກ່ອນໃຊ້ງານຈິງ ກະລຸນາຢືນຢັນສະກຸນເງິນ ການພິມໃບຮັບເງິນ ແລະອຸປະກອນທີ່ຈະໃຊ້ກັບທີມງານ.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/trial/pos?utm_source=laos_landing&utm_medium=organic&utm_campaign=laos_pricing" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950">
                ເລີ່ມທົດລອງ 7 ມື້
              </Link>
              <Link href="/contact?utm_source=laos_landing&utm_medium=organic&utm_campaign=laos_pricing" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white">
                ຕິດຕໍ່ທີມງານ
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="font-black">{faq.question}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">CUTTING POINT INNOVATION CO., LTD. · CpiPOS</p>
        </section>
      </main>
    </>
  );
}
