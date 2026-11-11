import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

const baseUrl = "https://www.cuttingpointinnovation.com";

export const metadata: Metadata = {
  title: "ผลงานติดตั้งระบบ POS และลงพื้นที่ร้านค้าจริง | CpiPOS",
  description: "ชมเรื่องราวการลงพื้นที่ สาธิต และแนะนำการใช้งาน CpiPOS สำหรับร้านอาหาร คาเฟ่ และร้านค้าปลีก ทั้งแท็บเล็ต Android เครื่อง POS และอุปกรณ์หน้าร้าน",
  alternates: { canonical: "/pos-installations" },
  openGraph: {
    title: "เบื้องหลังการลงพื้นที่และติดตั้งระบบ POS | CpiPOS",
    description: "ภาพและเรื่องราวการแนะนำระบบขายหน้าร้าน CpiPOS ให้ธุรกิจจริง",
    url: `${baseUrl}/pos-installations`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

const gallery = [
  { src: "/pos-installations/field-01.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 1" },
  { src: "/pos-installations/field-02.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 2" },
  { src: "/pos-installations/field-03.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 3" },
  { src: "/pos-installations/field-04.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 4" },
  { src: "/pos-installations/field-05.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 5" },
  { src: "/pos-installations/field-06.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 6" },
  { src: "/pos-installations/field-07.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 7" },
  { src: "/pos-installations/field-08.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 8" },
  { src: "/pos-installations/field-09.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 9" },
  { src: "/pos-installations/field-10.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 10" },
  { src: "/pos-installations/field-12.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 11" },
  { src: "/pos-installations/field-13.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 12" },
  { src: "/pos-installations/field-17.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 13" },
  { src: "/pos-installations/field-19.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 14" },
  { src: "/pos-installations/field-20.webp", alt: "ภาพลงพื้นที่สาธิตและแนะนำการใช้งาน CpiPOS สำหรับร้านค้าและร้านอาหาร ลำดับที่ 15" },
];

const stories = [
  {
    title: "สาธิต CpiPOS บนแท็บเล็ต ณ ร้านค้าปลีก",
    description: "ตัวอย่างการแนะนำหน้าขาย CpiPOS บนแท็บเล็ต พร้อมอธิบายการใช้งานให้ผู้ประกอบการในพื้นที่จำหน่ายสินค้า",
    category: "POS ร้านค้าปลีก",
  },
  {
    title: "แนะนำการขายหน้าร้านและอุปกรณ์ที่เคาน์เตอร์",
    description: "บรรยากาศการสาธิตระบบขายหน้าร้านบนคอมพิวเตอร์ พร้อมการใช้งานร่วมกับอุปกรณ์ที่เคาน์เตอร์",
    category: "POS ร้านอาหารและเครื่องดื่ม",
  },
  {
    title: "ทดสอบการใช้งานระบบ POS และเครื่องพิมพ์ใบเสร็จ",
    description: "ตัวอย่างชุดอุปกรณ์หน้าร้านที่ประกอบด้วยจอ POS และเครื่องพิมพ์ใบเสร็จ โดยการรองรับจริงขึ้นอยู่กับรุ่นอุปกรณ์และการตั้งค่า",
    category: "อุปกรณ์ POS",
  },
];

export default function PosInstallationsPage() {
  return (
    <>
      <StructuredData locale="th" breadcrumbs={[
        { name: "หน้าแรก", item: `${baseUrl}/` },
        { name: "ระบบ POS", item: `${baseUrl}/pos` },
        { name: "ผลงานลงพื้นที่", item: `${baseUrl}/pos-installations` },
      ]} />
      <main className="min-h-screen bg-white text-slate-900">
        <section className="bg-gradient-to-b from-blue-50 to-white border-b border-blue-100">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
            <p className="text-sm font-bold text-blue-700">CpiPOS · เรื่องราวจากหน้างาน</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">ผลงานลงพื้นที่ สาธิต และแนะนำระบบ POS ให้ร้านค้าจริง</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">เราให้ความสำคัญกับการใช้งานจริงของร้านค้า ตั้งแต่การสาธิตบนแท็บเล็ต การแนะนำหน้าขาย ไปจนถึงการทำความเข้าใจอุปกรณ์ที่ร้านใช้อยู่ ภาพกิจกรรมที่ได้รับอนุญาตให้เผยแพร่จะทยอยเพิ่มเติมในหน้านี้</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/trial/pos?utm_source=website&utm_medium=field_stories&utm_campaign=cpipos_trial" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700">ทดลองใช้ฟรี 7 วัน</Link>
              <Link href="/contact?utm_source=website&utm_medium=field_stories&utm_campaign=cpipos_contact" className="rounded-full border border-blue-300 px-6 py-3 text-sm font-bold text-blue-800 hover:bg-blue-50">สอบถามการติดตั้งและอุปกรณ์</Link>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-black">บันทึกการลงพื้นที่ของ CpiPOS</h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-600">ตัวอย่างกิจกรรมจากภาพหน้างานที่ได้รับอนุญาตให้เผยแพร่ โดยไม่เปิดเผยชื่อบุคคล ข้อมูลส่วนตัว หรือข้อมูลธุรกรรมบนหน้าจอ</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-xs font-black text-blue-700">{story.category}</p>
                <h3 className="mt-3 text-xl font-black leading-8">{story.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{story.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="field-gallery-heading">
          <h2 id="field-gallery-heading" className="text-3xl font-black">ภาพบรรยากาศจากการลงพื้นที่จริง</h2>
          <p className="mt-3 text-slate-600">ภาพจากการแนะนำ สาธิต และทดลองใช้งานอุปกรณ์ POS ในสถานที่จริง</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo, index) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt={photo.alt} width={1400} height={900} loading={index < 2 ? "eager" : "lazy"} decoding="async" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-4 text-sm text-slate-600">ภาพกิจกรรมแนะนำและสาธิตระบบ CpiPOS · ภาพที่ {index + 1}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="border-t border-slate-200 bg-blue-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-black">กำลังมองหาระบบ POS สำหรับร้านของคุณ?</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-700">เริ่มจากทดลองการขายจริงบนอุปกรณ์ที่รองรับ แล้วปรึกษาทีมงานเกี่ยวกับรูปแบบการใช้งานและอุปกรณ์ที่เหมาะสมกับร้าน</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/pos" className="font-bold text-blue-800 underline">ดูระบบ CpiPOS</Link>
              <Link href="/pos-android" className="font-bold text-blue-800 underline">POS บน Android</Link>
              <Link href="/packages/pos" className="font-bold text-blue-800 underline">ดูราคาแพ็กเกจ</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
