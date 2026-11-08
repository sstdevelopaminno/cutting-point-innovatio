import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "ระบบ POS Android สำหรับร้านกาแฟ ร้านอาหาร และร้านค้า | CpiPOS" },
  description: "ใช้มือถือหรือแท็บเล็ต Android ทดลองระบบ POS สำหรับร้านกาแฟ ร้านอาหาร และร้านค้าปลีก จัดการขาย สินค้า สต๊อก และยอดขาย พร้อมทดลองใช้ฟรี 7 วัน",
  alternates: { canonical: "/pos-android" },
  openGraph: {
    title: "ระบบ POS Android สำหรับร้านกาแฟ ร้านอาหาร และร้านค้า | CpiPOS",
    description: "ทดลอง CpiPOS บนมือถือและแท็บเล็ต Android ฟรี 7 วัน เริ่มจากอุปกรณ์ที่ร้านมีอยู่แล้ว",
    url: "/pos-android",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  { q: "ต้องซื้อเครื่อง POS ใหม่ไหม?", a: "ไม่จำเป็นเสมอไป ร้านที่มีมือถือหรือแท็บเล็ต Android ที่รองรับสามารถทดลองใช้งานก่อนตัดสินใจเพิ่มอุปกรณ์ได้" },
  { q: "ระบบ POS Android เหมาะกับร้านอะไร?", a: "เหมาะกับร้านกาแฟ ร้านอาหาร และร้านค้าปลีก โดยควรทดลองขั้นตอนการขายจริงของร้านก่อนเลือกแพ็กเกจ" },
  { q: "ทดลองใช้ฟรีกี่วัน?", a: "CpiPOS เปิดให้ทดลองใช้ฟรี 7 วัน เพื่อประเมินการขาย สินค้า และการใช้งานของร้าน" },
  { q: "ดูราคาแพ็กเกจได้ที่ไหน?", a: "ดูแพ็กเกจรายเดือนและรายปีล่าสุดได้ที่หน้า ราคา CpiPOS บนเว็บไซต์ทางการ" },
];

export default function AndroidPosLandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-300">CpiPOS · Android Mobile POS</p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">ระบบ POS Android สำหรับร้านกาแฟ ร้านอาหาร และร้านค้าปลีก</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">เริ่มทดลองระบบขายหน้าร้านด้วยมือถือหรือแท็บเล็ต Android ที่ร้านมีอยู่แล้ว จัดการสินค้า บันทึกการขาย และตรวจสอบยอดขายก่อนตัดสินใจเลือกแพ็กเกจ</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/trial/pos?utm_source=seo&utm_medium=organic&utm_campaign=pos_android" className="rounded-xl bg-sky-400 px-6 py-4 font-bold text-slate-950 hover:bg-sky-300">ทดลองใช้ CpiPOS ฟรี 7 วัน</Link>
            <Link href="/downloads#android" className="rounded-xl border border-white/60 px-6 py-4 font-bold hover:bg-white/10">ดาวน์โหลด Android</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-black">เริ่มต้นใช้งาน POS Android ใน 3 ขั้นตอน</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["1. เตรียมอุปกรณ์", "ตรวจสอบมือถือหรือแท็บเล็ต Android ที่ร้านใช้อยู่และเลือกเวอร์ชันดาวน์โหลดที่เหมาะสม"],
            ["2. ทดลองขายจริง", "เพิ่มสินค้าและราคา ทดลองเปิดบิลและขั้นตอนรับชำระเงินของร้าน"],
            ["3. ประเมินการใช้งาน", "ตรวจสอบยอดขายและขั้นตอนปิดกะ แล้วเปรียบเทียบแพ็กเกจตามความต้องการ"],
          ].map(([title, body]) => <li key={title} className="rounded-2xl border border-blue-100 bg-blue-50 p-6"><h3 className="text-xl font-bold text-blue-900">{title}</h3><p className="mt-3 leading-7 text-slate-700">{body}</p></li>)}
        </ol>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-black">เลือกใช้ให้เหมาะกับร้านของคุณ</h2>
          <p className="mt-4 leading-8">ร้านกาแฟและร้านอาหารสามารถเริ่มจากเมนูและรายการขายที่ใช้จริง ส่วนร้านค้าปลีกสามารถเริ่มจากรายการสินค้า ราคา และสต๊อก โดยตรวจสอบความเหมาะสมของอุปกรณ์และฟังก์ชันในช่วงทดลอง</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link className="font-bold text-blue-700 underline" href="/packages/pos">ดูราคาและแพ็กเกจ CpiPOS</Link>
            <Link className="font-bold text-blue-700 underline" href="/articles/pos-restaurant-cafe">POS สำหรับร้านอาหารและคาเฟ่</Link>
            <Link className="font-bold text-blue-700 underline" href="/articles/pos-inventory-retail">POS สำหรับร้านค้าปลีก</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-black">คำถามที่พบบ่อยเกี่ยวกับระบบ POS Android</h2>
        <div className="mt-8 space-y-4">{faqs.map(({q,a}) => <details key={q} className="rounded-xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold">{q}</summary><p className="mt-3 leading-8 text-slate-700">{a}</p></details>)}</div>
        <div className="mt-12 rounded-2xl bg-blue-950 p-8 text-white"><h2 className="text-2xl font-black">ทดลอง CpiPOS ฟรี 7 วัน</h2><p className="mt-3 text-blue-100">ทดลองใช้งานกับร้านของคุณก่อนเลือกแพ็กเกจ</p><Link href="/trial/pos?utm_source=seo&utm_medium=organic&utm_campaign=pos_android_bottom" className="mt-6 inline-block rounded-xl bg-sky-400 px-6 py-4 font-bold text-slate-950">เริ่มทดลองใช้</Link></div>
      </section>
    </main>
  );
}
