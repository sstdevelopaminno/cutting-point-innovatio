import type { Locale } from "@/lib/locale";

type BreadcrumbItem = {
  name: string;
  item: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceSchema = {
  name: string;
  description: string;
  serviceType: string;
  url: string;
};

type ArticleSchema = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
};

type StructuredDataProps = {
  locale: Locale;
  includeGlobal?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  service?: ServiceSchema;
  article?: ArticleSchema;
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cuttingpointinnovation.vercel.app";

const CONTACT = {
  email: "cuttingpointtech@gmail.com",
  phoneLocal: "0985460355",
  phoneE164: "+66985460355",
  line: "https://lin.ee/z8qLGjU",
  facebook: "https://www.facebook.com/122134406553382800",
  contactUrl: "https://cuttingpointinnovation.vercel.app/contact",
} as const;

const companyInfo = {
  th: {
    name: "บริษัท คัตติ้ง พอยท์ อินโนเวชั่น จำกัด",
    alternateName: "CUTTING POINT INNOVATION CO., LTD.",
    description:
      "บริษัท คัตติ้ง พอยท์ อินโนเวชั่น จำกัด ผู้พัฒนา CpiPOS ระบบ POS สำหรับร้านอาหาร คาเฟ่ ร้านค้าปลีก และร้านค้าทั่วไป รองรับอุปกรณ์ Android ที่รองรับ พร้อมบริการด้านไอทีและการดูแลระบบ",
  },
  en: {
    name: "CUTTING POINT INNOVATION CO., LTD.",
    alternateName: "บริษัท คัตติ้ง พอยท์ อินโนเวชั่น จำกัด",
    description:
      "CUTTING POINT INNOVATION CO., LTD. develops CpiPOS, an Android POS system for restaurants, cafés, retail stores, and general merchants, alongside IT services and system support.",
  },
  lo: {
    name: "CUTTING POINT INNOVATION CO., LTD.",
    alternateName: "บริษัท คัตติ้ง พอยท์ อินโนเวชั่น จำกัด",
    description:
      "CUTTING POINT INNOVATION CO., LTD. develops CpiPOS, a POS system for compatible Android devices, with IT services and system support for businesses.",
  },
};
function uniqueGraphId(id: string) {
  return id.replace(/\/+$/, "");
}

export default function StructuredData({
  locale,
  includeGlobal = false,
  breadcrumbs,
  faqs,
  service,
  article,
}: StructuredDataProps) {
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const info = companyInfo[locale];
  const graph: Record<string, unknown>[] = [];

  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;

  const ensureOrganization = (mode: "minimal" | "full") => {
    const exists = graph.some(
      (node) => typeof node["@id"] === "string" && node["@id"] === organizationId
    );
    if (exists) {
      return;
    }

    const baseOrg = {
      "@type": "Organization",
      "@id": organizationId,
      name: info.name,
      alternateName: info.alternateName,
      url: `${baseUrl}/`,
      description: info.description,
      email: CONTACT.email,
      telephone: CONTACT.phoneE164,
      sameAs: [CONTACT.line, CONTACT.facebook],
    };

    graph.push(
      mode === "full"
        ? {
            ...baseOrg,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: CONTACT.phoneE164,
                contactType: "customer support",
                email: CONTACT.email,
                url: CONTACT.contactUrl,
                availableLanguage: ["th", "en", "lo"],
              },
            ],
          }
        : baseOrg
    );
  };

  if (includeGlobal) {
    ensureOrganization("full");
    graph.push({
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: info.name,
      alternateName: info.alternateName,
      url: `${baseUrl}/`,
      description: info.description,
      telephone: CONTACT.phoneE164,
      email: CONTACT.email,
      sameAs: [CONTACT.line, CONTACT.facebook],
      areaServed: {
        "@type": "Country",
        name: "Thailand",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "139/32 หมู่บ้านนันทนาการ์เด้นท์ ตำบลบ้านกลาง",
        addressLocality: "อำเภอเมืองปทุมธานี",
        addressRegion: "ปทุมธานี",
        postalCode: "12000",
        addressCountry: "TH",
      },
    });
    graph.push({
      "@type": "WebSite",
      "@id": websiteId,
      url: `${baseUrl}/`,
      name: "CUTTING POINT INNOVATION CO., LTD.",
      publisher: { "@id": organizationId },
      inLanguage: locale,
    });
  }

  if (service) {
    ensureOrganization(includeGlobal ? "full" : "minimal");

    const serviceUrl = uniqueGraphId(service.url);
    graph.push({
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.name,
      description: service.description,
      serviceType: service.serviceType,
      provider: { "@id": organizationId },
      areaServed: {
        "@type": "Country",
        name: "Thailand",
      },
      url: serviceUrl,
    });
  }

  if (article) {
    ensureOrganization(includeGlobal ? "full" : "minimal");

    const articleUrl = uniqueGraphId(article.url);
    graph.push({
      "@type": "Article",
      "@id": `${articleUrl}#article`,
      headline: article.headline,
      description: article.description,
      url: articleUrl,
      mainEntityOfPage: { "@id": `${articleUrl}#webpage` },
      author: { "@id": organizationId },
      publisher: { "@id": organizationId },
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      image: article.image,
      inLanguage: locale,
    });
  }

  const pageUrl =
    uniqueGraphId(article?.url ?? service?.url ?? breadcrumbs?.[breadcrumbs.length - 1]?.item ?? `${baseUrl}/`) ||
    `${baseUrl}/`;

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faqpage`,
      url: pageUrl,
      name:
        article?.headline ??
        service?.name ??
        (locale === "th" ? "คำถามที่พบบ่อย | CUTTING POINT INNOVATION" : "FAQ | CUTTING POINT INNOVATION CO., LTD."),
      isPartOf: { "@id": websiteId },
      inLanguage: locale,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (breadcrumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    });
  }

  if (service || article || breadcrumbs?.length || faqs?.length) {
    ensureOrganization(includeGlobal ? "full" : "minimal");

    if (includeGlobal) {
      // `WebSite` is already included above.
    } else {
      graph.push({
        "@type": "WebSite",
        "@id": websiteId,
        url: `${baseUrl}/`,
        name: "CUTTING POINT INNOVATION CO., LTD.",
        publisher: { "@id": organizationId },
        inLanguage: locale,
      });
    }

    graph.push({
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: article?.headline ?? service?.name ?? info.name,
      isPartOf: { "@id": websiteId },
      about: service ? { "@id": `${uniqueGraphId(service.url)}#service` } : undefined,
      mainEntity: article ? { "@id": `${uniqueGraphId(article.url)}#article` } : undefined,
      breadcrumb: breadcrumbs?.length ? { "@id": `${pageUrl}#breadcrumb` } : undefined,
      inLanguage: locale,
    });
  }

  if (!graph.length) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
