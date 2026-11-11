import type { Metadata } from "next";
import Link from "next/link";

const site = "https://www.cuttingpointinnovation.com";
export const metadata: Metadata = {
  title: "ภาพบรรยากาศลงพื้นที่สาธิตและติดตั้งระบบ POS | CpiPOS",
  description: "ชมภาพบรรยากาศการลงพื้นที่แนะนำ สาธิต และช่วยเริ่มใช้งานระบบ CpiPOS สำหรับร้านค้า ร้านอาหาร และคาเฟ่ พร้อมแนวทางทดลองระบบ POS",
  alternates: { canonical: "/pos/field-stories" },
  openGraph: { title: "ภาพบรรยากาศลงพื้นที่สาธิต CpiPOS", description: "รวมภาพการแนะนำและสาธิตการใช้งาน CpiPOS ในสถานที่จริง", url: site + "/pos/field-stories", type: "website" },
  robots: { index: true, follow: true },
};
const photos = [
  { file: "field-01.webp", alt: "การสาธิต CpiPOS บนแท็บเล็ตกับผู้ประกอบการหน้าร้าน" },
  { file: "field-02.webp", alt: "หน้าจอรายงานยอดขาย CpiPOS บนคอมพิวเตอร์ในร้าน" },
  { file: "field-03.webp", alt: "การแนะนำระบบขายหน้าร้าน CpiPOS ให้ผู้ใช้งาน" },
  { file: "field-04.webp", alt: "พนักงานทดลองใช้เครื่องสแกนบาร์โค้ดกับระบบ POS" },
  { file: "field-05.webp", alt: "การสาธิตการเข้าสู่ระบบ CpiPOS Store" },
  { file: "field-06.webp", alt: "ภาพบรรยากาศร้านค้าระหว่างลงพื้นที่แนะนำระบบ" },
  { file: "field-07.webp", alt: "การให้คำแนะนำการใช้งาน CpiPOS ที่จุดขาย" },
  { file: "field-08.webp", alt: "บรรยากาศการช่วยเหลือผู้ใช้งานระบบหน้าร้าน" },
  { file: "field-09.webp", alt: "การสาธิตระบบ CpiPOS ในพื้นที่ขายสินค้าจริง" },
  { file: "field-10.webp", alt: "การแนะนำการใช้งานระบบ POS กับผู้ประกอบการ" },
  { file: "field-11.webp", alt: "การสาธิต CpiPOS บนแท็บเล็ตกับผู้ประกอบการที่ร้านค้า" },
  { file: "field-12.webp", alt: "หน้าจอระบบ CpiPOS บนแท็บเล็ตระหว่างการสาธิต" },
  { file: "field-13.webp", alt: "บรรยากาศร้านค้าระหว่างการลงพื้นที่แนะนำระบบ POS" },
  { file: "field-14.webp", alt: "การอธิบายวิธีใช้งาน CpiPOS บนคอมพิวเตอร์ที่จุดขาย" },
  { file: "field-15.webp", alt: "ผู้ใช้งานทดลองสแกนสินค้าด้วยระบบ POS ที่หน้าร้าน" },
  { file: "field-16.webp", alt: "บรรยากาศทีมงานแนะนำขั้นตอนระบบ CpiPOS ในร้าน" },
  { file: "field-17.webp", alt: "การสาธิตระบบขายหน้าร้านและอุปกรณ์ POS" },
  { file: "field-18.webp", alt: "การแนะนำระบบ POS และการจัดวางอุปกรณ์ที่จุดขาย" },
  { file: "field-19.webp", alt: "การสาธิตการจัดวางจอและอุปกรณ์ POS ในร้านอาหาร" },
  { file: "field-20.webp", alt: "การแนะนำการใช้งาน CpiPOS กับเครื่องพิมพ์ใบเสร็จ" },
] as const;
export default function FieldStoriesPage() {
  return <main className="min-h-screen bg-white text-slate-900">
    <section className="bg-gradient-to-b from-blue-50 to-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold text-blue-700">CpiPOS · Field Stories</p>
        <h1 className="mt-3 text-3xl font-black sm:text-5xl">ภาพประทับใจจากการลงพื้นที่สาธิต CpiPOS</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">เบื้องหลังการแนะนำและสาธิตระบบขายหน้าร้านให้ผู้ประกอบการและพนักงาน เรียนรู้ขั้นตอนการใช้งานจริง ตั้งแต่หน้าขายจนถึงรายงานยอดขาย</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link className="rounded-full bg-blue-700 px-5 py-3 font-bold text-white" href="/trial/pos?utm_source=website&utm_medium=field_stories&utm_campaign=cpipos_trial">ทดลองใช้ CpiPOS 7 วัน</Link>
          <Link className="rounded-full border border-slate-300 px-5 py-3 font-bold" href="/pos">ดูระบบ POS</Link>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-2xl font-black">ภาพการสาธิตและแนะนำระบบในสถานที่จริง</h2>
      <p className="mt-3 text-slate-600">ภาพถ่ายจากกิจกรรมลงพื้นที่ ไม่ใช่การยืนยันสถานะการชำระเงินหรือผลลัพธ์ทางธุรกิจของผู้ร่วมกิจกรรม</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, i) => <figure key={photo.file} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          {/* Native lazy loading limits bandwidth; files must be uploaded before merging. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/field-stories/${photo.file}`} alt={photo.alt} width={1200} height={675} loading={i < 2 ? "eager" : "lazy"} decoding="async" className="aspect-[4/3] w-full object-cover" />
          <figcaption className="p-4 text-sm leading-6 text-slate-700">{photo.alt}</figcaption>
        </figure>)}
      </div>
    </section>
    <section className="border-t border-slate-200 bg-slate-50 px-6 py-14"><div className="mx-auto max-w-6xl">
      <h2 className="text-2xl font-black">อยากทดลองระบบ POS กับร้านของคุณ?</h2>
      <p className="mt-3 max-w-3xl text-slate-600">ทดลองการขายและรายงานกับข้อมูลตัวอย่างของร้านก่อนเลือกแพ็กเกจ การรองรับอุปกรณ์และฟังก์ชันขึ้นอยู่กับรุ่นและการตั้งค่า</p>
      <Link href="/contact?utm_source=website&utm_medium=field_stories&utm_campaign=cpipos_inbound" className="mt-5 inline-block font-bold text-blue-700">สอบถามการเริ่มใช้งาน CpiPOS →</Link>
    </div></section>
  </main>;
}
