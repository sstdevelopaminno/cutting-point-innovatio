import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { getRequestedLocale } from "@/lib/locale";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cuttingpointinnovation.com";

type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type ArticleCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  sections: ArticleSection[];
  faqs: { question: string; answer: string }[];
};

type Article = {
  slug: string;
  th: ArticleCopy;
  en: ArticleCopy;
};

const articles: Article[] = [
  {
    slug: "pos-android",
    th: {
      metaTitle: "ระบบ POS Android คืออะไร? เริ่มขายหน้าร้านโดยไม่ต้องซื้อเครื่องใหม่",
      metaDescription:
        "ทำความเข้าใจระบบ POS Android สำหรับร้านอาหาร คาเฟ่ และร้านค้าปลีก พร้อมแนวทางเริ่มใช้ CpiPOS บนแท็บเล็ตหรือมือถือ Android ที่รองรับ และทดลองใช้ฟรี 7 วัน",
      title: "ระบบ POS Android คืออะไร? เริ่มขายหน้าร้านโดยไม่ต้องซื้อเครื่องใหม่",
      lead:
        "ร้านที่มีแท็บเล็ตหรือมือถือ Android ที่รองรับอยู่แล้ว สามารถเริ่มวางระบบขายหน้าร้านได้โดยยังไม่จำเป็นต้องลงทุนซื้อเครื่อง POS เฉพาะทางตั้งแต่วันแรก แนวทางนี้ช่วยให้ร้านทดสอบขั้นตอนขาย สินค้า สต๊อก และข้อมูลยอดขายก่อนตัดสินใจเพิ่ม Hardware ภายหลัง",
      sections: [
        {
          heading: "POS Android เหมาะกับร้านแบบไหน",
          paragraphs: [
            "ระบบ POS บน Android เหมาะกับร้านที่ต้องการเริ่มจากอุปกรณ์ที่มีอยู่แล้ว เช่น ร้านอาหาร คาเฟ่ ร้านค้าปลีก และร้านค้าทั่วไป โดยอุปกรณ์ต้องรองรับการใช้งานของระบบและมีสภาพพร้อมสำหรับงานหน้าร้าน",
            "ข้อดีของการเริ่มแบบนี้คือร้านสามารถโฟกัสที่กระบวนการขายจริงก่อน เช่น การเพิ่มสินค้า การบันทึกการขาย การตรวจสต๊อก และการดูข้อมูลยอดขาย โดยไม่ต้องให้ต้นทุนอุปกรณ์กลายเป็นอุปสรรคแรกของการเริ่มใช้ระบบ",
          ],
          bullets: [
            "เริ่มจากแท็บเล็ตหรือมือถือ Android ที่รองรับ",
            "จัดการงานขาย สินค้า สต๊อก และข้อมูลยอดขาย",
            "ทดลอง workflow หน้าร้านก่อนตัดสินใจเพิ่มเครื่องหรืออุปกรณ์เสริม",
          ],
        },
        {
          heading: "ก่อนเริ่มใช้ POS บน Android ควรเตรียมอะไร",
          paragraphs: [
            "สิ่งสำคัญไม่ใช่แค่ติดตั้งแอป แต่ควรเตรียมข้อมูลพื้นฐานของร้านให้พร้อม เช่น รายการสินค้า ราคา หมวดหมู่ และจำนวนสต๊อกเริ่มต้น เพื่อให้การทดลองสะท้อนการใช้งานจริงมากที่สุด",
            "ควรกำหนดด้วยว่าใครเป็นผู้ดูแลข้อมูลสินค้า ใครใช้งานหน้าขาย และร้านต้องการตรวจยอดขายหรือสต๊อกในช่วงเวลาใด การวางกติกาเล็ก ๆ ตั้งแต่ต้นช่วยลดความสับสนเมื่อนำระบบมาใช้จริง",
          ],
        },
        {
          heading: "CpiPOS ช่วยให้ร้านเริ่มต้นอย่างไร",
          paragraphs: [
            "CpiPOS เป็นระบบ POS สำหรับ Android ที่ออกแบบให้ร้านสามารถเริ่มจากอุปกรณ์ Android ที่รองรับได้ รองรับงานขาย สินค้า สต๊อก และข้อมูลยอดขาย เหมาะกับร้านที่ต้องการทดลองระบบก่อนลงทุน Hardware เพิ่ม",
            "ปัจจุบันสามารถทดลองใช้ CpiPOS ฟรี 7 วัน เพื่อดูว่าขั้นตอนการขายและการจัดการข้อมูลเหมาะกับรูปแบบร้านหรือไม่ จากนั้นค่อยเลือกแพ็กเกจหรืออุปกรณ์เพิ่มเติมตามการใช้งานจริง",
          ],
        },
      ],
      faqs: [
        {
          question: "ต้องซื้อเครื่อง POS ใหม่ก่อนใช้ CpiPOS หรือไม่",
          answer: "ไม่จำเป็น หากมีแท็บเล็ตหรือมือถือ Android ที่รองรับ สามารถเริ่มทดลองระบบบนอุปกรณ์เดิมก่อนได้",
        },
        {
          question: "CpiPOS รองรับงานอะไรบ้าง",
          answer: "รองรับงานขาย สินค้า สต๊อก และข้อมูลยอดขาย โดยรายละเอียดการใช้งานขึ้นอยู่กับแพ็กเกจและการตั้งค่าของร้าน",
        },
        {
          question: "ทดลองใช้งานได้หรือไม่",
          answer: "ได้ ปัจจุบันมีช่วงทดลองใช้ฟรี 7 วันสำหรับ CpiPOS",
        },
      ],
    },
    en: {
      metaTitle: "Android POS: Start selling without buying new hardware first",
      metaDescription:
        "Learn how an Android POS can help restaurants, cafés and retailers start with compatible existing devices, and try CpiPOS free for 7 days.",
      title: "Android POS: Start selling without buying new hardware first",
      lead:
        "A compatible Android tablet or phone can be enough to start testing a structured point-of-sale workflow before investing in dedicated POS hardware.",
      sections: [
        {
          heading: "Who Android POS is for",
          paragraphs: [
            "Android POS is practical for restaurants, cafés, retailers and general merchants that want to begin with compatible devices they already own.",
            "The priority is to validate the sales workflow first: products, transactions, inventory and sales visibility.",
          ],
        },
        {
          heading: "What to prepare",
          paragraphs: [
            "Prepare product names, prices, categories and opening stock so the trial reflects real store operations.",
            "Define who maintains product data and who uses the sales screen to keep store operations consistent.",
          ],
        },
        {
          heading: "How CpiPOS fits",
          paragraphs: [
            "CpiPOS supports sales, products, inventory and sales data on compatible Android devices. A 7-day free trial lets the store test its workflow before choosing additional hardware or a paid package.",
          ],
        },
      ],
      faqs: [
        { question: "Do I need new POS hardware first?", answer: "No. A compatible Android tablet or phone can be used to start." },
        { question: "What does CpiPOS cover?", answer: "Sales, products, inventory and sales data." },
        { question: "Is there a trial?", answer: "Yes. CpiPOS currently offers a 7-day free trial." },
      ],
    },
  },
  {
    slug: "pos-restaurant-cafe",
    th: {
      metaTitle: "โปรแกรม POS ร้านอาหารและคาเฟ่ ควรมีอะไรบ้างก่อนเลือกใช้",
      metaDescription:
        "เช็กลิสต์เลือกระบบ POS สำหรับร้านอาหารและคาเฟ่ ตั้งแต่งานขาย สินค้า สต๊อก ไปจนถึงข้อมูลยอดขาย พร้อมแนวทางทดลอง CpiPOS บน Android ฟรี 7 วัน",
      title: "โปรแกรม POS ร้านอาหารและคาเฟ่ ควรมีอะไรบ้างก่อนเลือกใช้",
      lead:
        "ร้านอาหารและคาเฟ่ควรเลือกระบบ POS จากขั้นตอนทำงานจริง ไม่ใช่ดูเพียงหน้าตาหรือราคา ระบบที่เหมาะควรช่วยให้การขายเป็นระบบ ดูข้อมูลสินค้าและสต๊อกได้ และทำให้เจ้าของร้านเห็นยอดขายได้ชัดขึ้น",
      sections: [
        {
          heading: "เริ่มจากขั้นตอนขายที่พนักงานใช้ทุกวัน",
          paragraphs: [
            "หน้าขายควรเข้าใจง่ายและลดขั้นตอนที่ไม่จำเป็น เพราะเป็นจุดที่พนักงานใช้งานบ่อยที่สุด ยิ่งร้านมีช่วงลูกค้าเข้าพร้อมกัน ความชัดเจนของเมนูสินค้าและขั้นตอนบันทึกการขายยิ่งสำคัญ",
            "ก่อนเลือกระบบ ควรลองจำลองสถานการณ์จริง เช่น การเลือกสินค้า การแก้จำนวนสินค้า และการจบรายการ เพื่อดูว่าทีมหน้าร้านใช้งานได้คล่องหรือไม่",
          ],
        },
        {
          heading: "สินค้าและสต๊อกต้องเชื่อมกับงานขาย",
          paragraphs: [
            "ระบบ POS ที่ดีควรช่วยให้ร้านจัดรายการสินค้าและตรวจข้อมูลสต๊อกได้เป็นระบบ เพื่อให้การขายและการดูสินค้าคงเหลืออยู่ใน workflow เดียวกัน",
            "การมีข้อมูลที่เป็นระบบไม่ได้หมายความว่าสต๊อกจะถูกต้องโดยอัตโนมัติ ร้านยังต้องกำหนดวิธีรับสินค้า ปรับยอด และตรวจนับให้ชัดเจน แต่ระบบช่วยให้ข้อมูลเหล่านี้ติดตามได้ง่ายกว่าการจดหลายที่",
          ],
          bullets: [
            "จัดสินค้าและราคาขายให้ชัดเจน",
            "ตรวจข้อมูลสต๊อกสม่ำเสมอ",
            "ใช้ข้อมูลยอดขายช่วยตัดสินใจว่ารายการใดเคลื่อนไหวดี",
          ],
        },
        {
          heading: "เลือก POS ที่เริ่มทดลองได้ก่อน",
          paragraphs: [
            "สำหรับร้านที่ยังไม่แน่ใจว่าควรลงทุนระบบระดับไหน การเริ่มจาก Android ที่รองรับเป็นทางเลือกที่ช่วยลดแรงเสียดทานในการทดลอง เพราะไม่ต้องซื้อเครื่องใหม่ก่อนทันที",
            "CpiPOS รองรับการขาย สินค้า สต๊อก และข้อมูลยอดขายบน Android ที่รองรับ พร้อมทดลองใช้ฟรี 7 วัน ร้านจึงสามารถใช้ช่วงทดลองตรวจทั้งความเหมาะสมของระบบและความพร้อมของทีมก่อนตัดสินใจ",
          ],
        },
      ],
      faqs: [
        {
          question: "ร้านอาหารหรือคาเฟ่จำเป็นต้องใช้เครื่อง POS โดยเฉพาะหรือไม่",
          answer: "ไม่จำเป็นเสมอไป ร้านสามารถเริ่มจากอุปกรณ์ Android ที่รองรับเพื่อทดลอง workflow ก่อน แล้วค่อยพิจารณา Hardware เพิ่มเมื่อมีความต้องการจริง",
        },
        {
          question: "ควรดูอะไรเป็นอันดับแรกเมื่อเลือกระบบ POS",
          answer: "ควรดูขั้นตอนขายจริง ความง่ายในการจัดสินค้าและสต๊อก รวมถึงความชัดเจนของข้อมูลยอดขาย",
        },
        {
          question: "CpiPOS ทดลองก่อนซื้อได้ไหม",
          answer: "ได้ มีช่วงทดลองใช้ฟรี 7 วันเพื่อให้ร้านประเมินการใช้งานก่อนเลือกแพ็กเกจ",
        },
      ],
    },
    en: {
      metaTitle: "Restaurant and café POS: what to check before choosing",
      metaDescription:
        "A practical checklist for restaurant and café POS covering sales, products, inventory and sales data, with a 7-day CpiPOS trial on Android.",
      title: "Restaurant and café POS: what to check before choosing",
      lead:
        "Choose a POS around the real front-of-house workflow. The system should make sales clear, keep product and inventory data organized, and improve sales visibility.",
      sections: [
        { heading: "Start with the sales workflow", paragraphs: ["Test the common actions staff perform every day and make sure the flow is easy to understand during busy periods."] },
        { heading: "Connect product and inventory data", paragraphs: ["Keep products, prices and stock information organized in the same operational workflow instead of spreading data across multiple places."] },
        { heading: "Trial before committing", paragraphs: ["CpiPOS supports sales, products, inventory and sales data on compatible Android devices and includes a 7-day free trial."] },
      ],
      faqs: [
        { question: "Is dedicated POS hardware required?", answer: "Not always. A compatible Android device can be used to test the workflow first." },
        { question: "What should I evaluate first?", answer: "The sales flow, product and inventory handling, and sales visibility." },
        { question: "Can I try CpiPOS first?", answer: "Yes. A 7-day free trial is currently available." },
      ],
    },
  },
  {
    slug: "pos-inventory-retail",
    th: {
      metaTitle: "POS ร้านค้าปลีกและระบบสต๊อก: จัดการขายและสินค้าให้เป็นระบบ",
      metaDescription:
        "แนวทางใช้ POS สำหรับร้านค้าปลีกเพื่อจัดการงานขาย สินค้า สต๊อก และข้อมูลยอดขาย พร้อมทดลอง CpiPOS บน Android ฟรี 7 วัน",
      title: "POS ร้านค้าปลีกและระบบสต๊อก: จัดการขายและสินค้าให้เป็นระบบ",
      lead:
        "ร้านค้าปลีกมักมีสินค้าหลายรายการและยอดเคลื่อนไหวตลอดวัน หากข้อมูลขายกับข้อมูลสินค้าอยู่คนละที่ เจ้าของร้านจะตรวจสอบได้ยาก ระบบ POS ช่วยรวมงานขาย สินค้า สต๊อก และข้อมูลยอดขายให้อยู่ในกระบวนการเดียวกัน",
      sections: [
        {
          heading: "ปัญหาที่เกิดเมื่อร้านเก็บข้อมูลหลายที่",
          paragraphs: [
            "เมื่อยอดขายจดไว้ที่หนึ่ง รายการสินค้าอยู่อีกไฟล์ และสต๊อกอัปเดตด้วยมืออีกชุด ร้านจะเสียเวลาเทียบข้อมูลและมีโอกาสเกิดความคลาดเคลื่อนมากขึ้น",
            "การใช้ POS ไม่ได้แทนวินัยการจัดการร้าน แต่ช่วยให้ข้อมูลสำคัญอยู่ในระบบเดียวกัน ทำให้ตรวจสอบสถานะสินค้าและยอดขายได้เป็นขั้นตอนมากขึ้น",
          ],
        },
        {
          heading: "จัดสินค้าและสต๊อกให้พร้อมก่อนเริ่ม",
          paragraphs: [
            "ก่อนนำ POS มาใช้ ควรจัดชื่อสินค้า ราคา หมวดหมู่ และจำนวนเริ่มต้นให้เรียบร้อย จากนั้นกำหนดวิธีอัปเดตเมื่อมีสินค้าเข้า สินค้าออก หรือมีการปรับยอด",
            "เมื่อข้อมูลพื้นฐานสะอาด การดูยอดขายและสต๊อกจะมีประโยชน์มากขึ้น เพราะเจ้าของร้านสามารถใช้ข้อมูลเพื่อดูแนวโน้มและตรวจรายการที่ต้องติดตามได้ง่ายกว่าเดิม",
          ],
          bullets: [
            "ใช้ชื่อสินค้าและราคาที่เป็นมาตรฐาน",
            "กำหนดผู้รับผิดชอบการปรับข้อมูลสินค้า",
            "ตรวจสต๊อกเป็นรอบ ไม่พึ่งระบบเพียงอย่างเดียว",
          ],
        },
        {
          heading: "เริ่ม CpiPOS จาก Android ที่มีอยู่ได้",
          paragraphs: [
            "ร้านค้าปลีกที่มีอุปกรณ์ Android ที่รองรับสามารถเริ่มทดลอง CpiPOS ได้ก่อน โดยระบบรองรับงานขาย สินค้า สต๊อก และข้อมูลยอดขาย ทำให้ร้านประเมิน workflow จริงก่อนลงทุนอุปกรณ์เพิ่มเติม",
            "ช่วงทดลองใช้ฟรี 7 วันเหมาะสำหรับตั้งข้อมูลสินค้า ทดลองขาย และดูว่าทีมงานใช้งานได้เหมาะกับร้านหรือไม่ ก่อนพิจารณาแพ็กเกจที่ต้องการใช้ต่อ",
          ],
        },
      ],
      faqs: [
        {
          question: "POS ช่วยให้สต๊อกแม่นยำโดยอัตโนมัติหรือไม่",
          answer: "ระบบช่วยจัดเก็บและติดตามข้อมูล แต่ร้านยังต้องมีขั้นตอนรับสินค้า ปรับยอด และตรวจนับที่ชัดเจนเพื่อให้ข้อมูลสต๊อกถูกต้อง",
        },
        {
          question: "ร้านค้าปลีกขนาดเล็กเริ่มใช้ POS ได้หรือไม่",
          answer: "ได้ หากมีอุปกรณ์ Android ที่รองรับ สามารถเริ่มทดลอง workflow ก่อนและค่อยเพิ่มอุปกรณ์ตามความจำเป็น",
        },
        {
          question: "CpiPOS มีข้อมูลยอดขายหรือไม่",
          answer: "CpiPOS รองรับข้อมูลยอดขายควบคู่กับงานขาย สินค้า และสต๊อก",
        },
      ],
    },
    en: {
      metaTitle: "Retail POS and inventory: organize sales and stock",
      metaDescription:
        "Learn how retail POS can bring sales, products, inventory and sales data into one workflow, with a 7-day CpiPOS trial on compatible Android devices.",
      title: "Retail POS and inventory: organize sales and stock",
      lead:
        "Retail stores handle many product movements every day. A POS can keep sales, products, inventory and sales data in one operational workflow.",
      sections: [
        { heading: "Reduce fragmented records", paragraphs: ["Keeping sales, product lists and stock in different places creates reconciliation work and increases the chance of inconsistencies."] },
        { heading: "Prepare clean product data", paragraphs: ["Standardize product names, prices, categories and opening stock, then define how stock adjustments are handled."] },
        { heading: "Start on compatible Android devices", paragraphs: ["CpiPOS supports sales, products, inventory and sales data, with a 7-day free trial on compatible Android devices."] },
      ],
      faqs: [
        { question: "Does a POS make inventory accurate automatically?", answer: "No. The system supports tracking, but the store still needs clear receiving, adjustment and stock-count procedures." },
        { question: "Can a small retailer start with Android?", answer: "Yes, if the device is compatible." },
        { question: "Does CpiPOS include sales data?", answer: "Yes. Sales data is supported alongside sales, products and inventory." },
      ],
    },
  },
];

const articleBySlug = new Map(articles.map((article) => [article.slug, article]));

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) return {};

  const locale = await getRequestedLocale();
  const copy = locale === "en" ? article.en : article.th;
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const url = `${baseUrl}/articles/${slug}`;

  return {
    metadataBase: new URL(baseUrl),
    title: { absolute: `${copy.metaTitle} | CpiPOS` },
    description: copy.metaDescription,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url,
      type: "article",
      images: [{ url: "/product-showcase/service-pos.png", alt: copy.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.metaTitle,
      description: copy.metaDescription,
      images: ["/product-showcase/service-pos.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function PosArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold">Article not found</h1>
          <p className="mt-4 text-slate-600">The requested CpiPOS guide is not available.</p>
          <Link href="/articles" className="mt-6 inline-flex font-semibold text-blue-700">
            Back to CpiPOS guides
          </Link>
        </div>
      </main>
    );
  }

  const locale = await getRequestedLocale();
  const copy = locale === "en" ? article.en : article.th;
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const pageUrl = `${baseUrl}/articles/${slug}`;

  const crumbs = [
    { label: locale === "en" ? "Home" : "หน้าแรก", href: "/" },
    { label: locale === "en" ? "Articles" : "บทความ", href: "/articles" },
    { label: copy.title },
  ];

  return (
    <>
      <StructuredData
        locale={locale}
        article={{
          headline: copy.title,
          description: copy.metaDescription,
          url: pageUrl,
          datePublished: "2026-10-12",
          dateModified: "2026-10-12",
          image: `${baseUrl}/product-showcase/service-pos.png`,
        }}
        breadcrumbs={[
          { name: locale === "en" ? "Home" : "หน้าแรก", item: `${baseUrl}/` },
          { name: locale === "en" ? "Articles" : "บทความ", item: `${baseUrl}/articles` },
          { name: copy.title, item: pageUrl },
        ]}
        faqs={copy.faqs}
      />

      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-mist py-12">
          <div className="mx-auto w-full max-w-4xl space-y-5 px-6">
            <Breadcrumbs items={crumbs} />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              CpiPOS · SEO Guide
            </p>
            <h1 className="font-[var(--font-heading)] text-3xl font-semibold tracking-tight md:text-5xl">
              {copy.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{copy.lead}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/trial/pos" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
                {locale === "en" ? "Try CpiPOS free for 7 days" : "ทดลองใช้ฟรี CpiPOS 7 วัน"}
              </Link>
              <Link href="/packages/pos" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800">
                {locale === "en" ? "View plans" : "ดูราคาและแพ็กเกจ"}
              </Link>
            </div>
          </div>
        </section>

        <article className="py-14">
          <div className="mx-auto w-full max-w-4xl px-6">
            <div className="space-y-12">
              {copy.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="font-[var(--font-heading)] text-2xl font-semibold text-slate-900 md:text-3xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-700">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-700">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-14 rounded-3xl bg-slate-950 p-7 text-white md:p-10">
              <h2 className="text-2xl font-semibold">
                {locale === "en" ? "Test the workflow before committing" : "ทดลองกับร้านจริงก่อนตัดสินใจ"}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                {locale === "en"
                  ? "Start with a compatible Android device, test the sales workflow, then decide on the package and hardware that fit your store."
                  : "เริ่มจากอุปกรณ์ Android ที่รองรับ ทดลองขั้นตอนขายจริง แล้วค่อยตัดสินใจเลือกแพ็กเกจหรือ Hardware เพิ่มตามความต้องการของร้าน"}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/trial/pos" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                  {locale === "en" ? "Start 7-day trial" : "เริ่มทดลองใช้ฟรี 7 วัน"}
                </Link>
                <Link href="/contact" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white">
                  {locale === "en" ? "Contact the team" : "ติดต่อทีมงาน"}
                </Link>
              </div>
            </section>

            <section className="mt-14">
              <h2 className="text-2xl font-semibold">{locale === "en" ? "Frequently asked questions" : "คำถามที่พบบ่อย"}</h2>
              <div className="mt-6 space-y-4">
                {copy.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-2xl border border-slate-200 p-6">
                    <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <nav className="mt-14 flex flex-wrap gap-4 border-t border-slate-200 pt-8 text-sm font-semibold">
              <Link href="/articles" className="text-blue-700">{locale === "en" ? "More CpiPOS guides" : "ดูบทความ CpiPOS เพิ่มเติม"}</Link>
              <Link href="/trial/pos" className="text-blue-700">{locale === "en" ? "Free trial" : "ทดลองใช้ฟรี"}</Link>
              <Link href="/packages/pos" className="text-blue-700">{locale === "en" ? "Pricing" : "ราคา CpiPOS"}</Link>
              <Link href="/contact" className="text-blue-700">{locale === "en" ? "Contact" : "ติดต่อ"}</Link>
            </nav>
          </div>
        </article>
      </main>
    </>
  );
}
