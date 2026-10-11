export type Lang = "th" | "en" | "lo";

type Dict = {
  nav: {
    home: string;
    features: string;
    platforms: string;
    services: string;
    packages: string;
    portfolio: string;
    articles: string;
    trial: string;
    contact: string;
    signup: string;
    downloads: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  platforms: {
    title: string;
    subtitle: string;
    items: {
      platform: string;
      years: string;
      users: string;
      websites: string;
      awards: string;
      clients: string;
      suitable: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: string[];
  };
  packages: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      price: string;
      description: string;
      features: string[];
      badge?: string;
    }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    items: { title: string; category: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    detailsTitle: string;
    detailsSubtitle: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    sending: string;
  };
  additional: {
    title: string;
    subtitle: string;
    items: string[];
  };
  footer: {
    company: string;
    address: string;
    phone: string;
    email: string;
    line: string;
    note: string;
  };
};

export const dict: Record<Lang, Dict> = {
  th: {
    nav: {
      home: "หน้าแรก",
      features: "จุดเด่น",
      platforms: "แพลตฟอร์ม",
      services: "บริการ",
      packages: "แพ็กเกจ",
      portfolio: "เทมเพลต",
      articles: "บทความ",
      trial: "ทดลองใช้งาน",
      contact: "ติดต่อ",
      signup: "สมัครใช้งาน",
      downloads: "ดาวน์โหลด",
    },
    hero: {
      title: "CpiPOS ระบบ POS สำหรับ Android",
      subtitle:
        "มีแท็บเล็ตหรือมือถือ Android ที่รองรับอยู่แล้ว ก็เริ่มใช้ระบบ POS ได้ โดยไม่จำเป็นต้องลงทุนเครื่องใหม่ตั้งแต่วันแรก",
      primaryCta: "ทดลองใช้ฟรี 7 วัน",
      secondaryCta: "ดูรายละเอียด CpiPOS",
      trust: "เหมาะสำหรับร้านอาหาร คาเฟ่ ร้านค้าปลีก และร้านค้าทั่วไป",
    },
    features: {
      title: "CpiPOS ช่วยให้หน้าร้านทำงานง่ายขึ้น",
      subtitle: "เริ่มจากสิ่งที่ร้านต้องใช้จริง: ขายสินค้า จัดการสต๊อก ดูยอดขาย และควบคุมการทำงาน",
      items: [
        {
          title: "เริ่มได้บน Android",
          description: "ใช้อุปกรณ์ Android ที่รองรับอยู่แล้วได้ ไม่จำเป็นต้องซื้อเครื่อง POS ใหม่ก่อน",
        },
        {
          title: "ขายและจัดการสินค้า",
          description: "รองรับงานขายหน้าร้านและการจัดการรายการสินค้าในระบบเดียว",
        },
        {
          title: "สต๊อกและยอดขาย",
          description: "ติดตามข้อมูลสินค้า สต๊อก และยอดขายเพื่อช่วยให้เจ้าของร้านเห็นภาพรวมได้ง่ายขึ้น",
        },
        {
          title: "พร้อมทีมดูแล",
          description: "มีช่องทางติดต่อสำหรับการสมัครใช้งาน การตั้งค่าระบบ และการช่วยเหลือหลังเริ่มใช้งาน",
        },
      ],
    },
    platforms: {
      title: "แพลตฟอร์มที่เราเชี่ยวชาญ",
      subtitle: "สถิติที่แสดงความเชี่ยวชาญในการพัฒนาและดูแลระบบ",
      items: [
        {
          platform: "Cutting Point Enterprise CMS",
          years: "8+ ปี",
          users: "1.2k+",
          websites: "420+",
          awards: "6 รางวัล",
          clients: "180+",
          suitable: "องค์กรที่ต้องการระบบบริหารเนื้อหาที่ปลอดภัยและยืดหยุ่น",
        },
        {
          platform: "Commerce Suite",
          years: "6+ ปี",
          users: "680+",
          websites: "230+",
          awards: "4 รางวัล",
          clients: "95+",
          suitable: "ธุรกิจที่ต้องการเว็บขายของพร้อมระบบชำระเงินครบวงจร",
        },
        {
          platform: "Corporate Cloud",
          years: "7+ ปี",
          users: "900+",
          websites: "310+",
          awards: "5 รางวัล",
          clients: "120+",
          suitable: "องค์กรที่ต้องการอินทราเน็ตและพอร์ทัลเชื่อมต่อระบบภายใน",
        },
        {
          platform: "Brand Experience",
          years: "5+ ปี",
          users: "520+",
          websites: "180+",
          awards: "3 รางวัล",
          clients: "70+",
          suitable: "แบรนด์ที่ต้องการเว็บไซต์เพื่อภาพลักษณ์ระดับพรีเมียม",
        },
        {
          platform: "Data Insight Portal",
          years: "4+ ปี",
          users: "350+",
          websites: "140+",
          awards: "2 รางวัล",
          clients: "40+",
          suitable: "องค์กรที่ต้องการแดชบอร์ดและรายงานเชิงลึกแบบเรียลไทม์",
        },
      ],
    },
    services: {
      title: "บริการหลักของเรา",
      subtitle: "ครบวงจรตั้งแต่กลยุทธ์ไปจนถึงการดูแลระยะยาว",
      items: [
        "ที่ปรึกษาและวางกลยุทธ์ดิจิทัล",
        "ออกแบบ UX/UI และระบบต่างๆ เช่น องค์กร",
        "พัฒนาเว็บไซต์องค์กรและระบบเว็บแอป",
        "ปรับแต่งให้รองรับ SEO และโฆษณาออนไลน์",
        "ดูแลระบบและโฮสติ้งแบบ มีผู้เชี่ยวชาญ",
        "วิเคราะห์ข้อมูลและวัดผลเชิงธุรกิจ",
      ],
    },
    packages: {
      title: "แพ็กเกจ CUTTING POINT INNOVATION Pro",
      subtitle: "ยืดหยุ่นตามขนาดธุรกิจ พร้อมบริการหลังการขาย",
      items: [
        {
          name: "Package small",
          price: "เริ่มต้น 3,000 บาท",
          description: "เหมาะสำหรับแบรนด์ที่ต้องการหน้า Landing Page มืออาชีพ",
          features: [
            "ออกแบบหน้าเดียวครบทุกส่วน",
            "รองรับมือถือและ SEO พื้นฐาน",
            "แบบฟอร์มติดต่อ + Analytics",
            "ส่งมอบภายใน 14 วัน",
            "บริการหลังการขาย 30 วัน",
          ],
          badge: "สำหรับร้านค้าธุระกิจเล็ก",
        },
        {
          name: "Package Business",
          price: "เริ่มต้น 10,000 บาท",
          description: "เว็บไซต์องค์กร 6-8 หน้า พร้อมระบบจัดการเนื้อหา",
          features: [
            "ออกแบบเฉพาะตามแบรนด์",
            "ระบบ CMS จัดการเนื้อหา",
            "เชื่อมต่อโซเชียลและแผนที่",
            "ปรับแต่ง SEO เชิงลึก",
            "บริการดูแลรายเดือน",
          ],
          badge: "สำหรับธุระกิจขนาดกลาง",
        },
        {
          name: "Business Plus+",
          price: "เริ่มต้น 50,000 บาท",
          description: "รองรับฟีเจอร์เฉพาะองค์กรและการเชื่อมต่อระบบภายใน",
          features: [
            "วิเคราะห์ UX/UI เชิงลึก",
            "ระบบสมาชิกหรือพอร์ทัล",
            "รองรับหลายภาษาและหลายสาขา",
            "เพิ่มเติมส่วนอื่นๆ ตามต้องการ",
            "บริการดูแลรายเดือน",
          ],
          badge: "สำหรับองค์กรขนาดใหญ่",
        },
      ],
    },
    portfolio: {
      title: "เทมเพลตของเรา",
      subtitle: "ตัวอย่างเว็บไซต์จากหลากหลายอุตสาหกรรม",
      items: [
        { title: "Riviera Hotels", category: "Hospitality" },
        { title: "Siam Logistics", category: "Logistics" },
        { title: "Metro Healthcare", category: "Healthcare" },
        { title: "Orchid Finance", category: "Finance" },
        { title: "Aurora Education", category: "Education" },
        { title: "Atlas Manufacturing", category: "Manufacturing" },
      ],
    },
    contact: {
      title: "เริ่มต้นโปรเจกต์ของคุณ",
      subtitle: "ทีมที่ปรึกษาพร้อมตอบกลับภายใน 1 วันทำการ",
      detailsTitle: "ข้อมูลติดต่อ",
      detailsSubtitle: "ติดต่อทีมงานได้โดยตรง หรือผ่านไลน์สำหรับงานเร่งด่วน",
      name: "ชื่อ-นามสกุล",
      phone: "เบอร์โทรศัพท์",
      email: "อีเมล",
      message: "รายละเอียดที่ต้องการ",
      submit: "ส่งข้อความ",
      success: "ขอบคุณสำหรับการติดต่อ เราจะรีบกลับไปหาคุณ",
      sending: "กำลังส่ง...",
    },
    additional: {
      title: "บริการเพิ่มเติม",
      subtitle: "เสริมความแข็งแรงให้เว็บไซต์ของคุณแบบครบวงจร",
      items: [
        "ฮสติ้งพร้อมใช้งานสำหรับการผลิต + โครงสร้างพื้นฐานคลาวด์",
        "ออกแบบระบบสำหรับองค์กร",
        "ปรับปรุงความเร็วและความปลอดภัย",
        "ออกแบบสื่อดิจิทัลและแบรนด์ไกด์ไลน์",
        "ดูแลระบบและแก้ไขปัญหาทันที",
      ],
    },
    footer: {
      company: "บริษัท คัตติ้ง พอยท์ อินโนเวชั่น จำกัด",
      address:
        "139/32 หมู่บ้านนันทนาการ์เด้นท์ ตำบลบ้านกลาง อำเภอเมืองปทุมธานี จังหวัดปทุมธานี 12000",
      phone: "0843374982",
      email: "cuttingpointtech@gmail.com",
      line: "ไลน์: @974qhtym",
      note: "โซลูชันดิจิทัลระดับองค์กร ครอบคลุมเว็บไซต์ แอปพลิเคชัน และระบบภายใน",
    },
  },
  en: {
    nav: {
      home: "Home",
      features: "Highlights",
      platforms: "Platforms",
      services: "Services",
      packages: "Packages",
      portfolio: "Templates",
      articles: "Articles",
      trial: "Try it",
      contact: "Contact",
      signup: "Start Free Trial",
      downloads: "Downloads",
    },
    hero: {
      title: "CpiPOS — POS for Android",
      subtitle:
        "Already have a compatible Android tablet or phone? Start using a POS system without buying new hardware on day one.",
      primaryCta: "Start a 7-day free trial",
      secondaryCta: "Explore CpiPOS",
      trust: "Built for restaurants, cafés, retail stores, and general merchants.",
    },
    features: {
      title: "CpiPOS keeps front-of-house operations simple",
      subtitle: "Start with what stores actually need: sales, products, inventory, and store visibility.",
      items: [
        {
          title: "Start on Android",
          description: "Use a compatible Android device you already have before investing in dedicated POS hardware.",
        },
        {
          title: "Sales and products",
          description: "Handle front-counter sales and product management in one system.",
        },
        {
          title: "Inventory and sales visibility",
          description: "Keep product, stock, and sales information easier to review in one place.",
        },
        {
          title: "Support when you start",
          description: "Contact our team for onboarding, system setup, and assistance after launch.",
        },
      ],
    },
    platforms: {
      title: "Platforms we master",
      subtitle: "Proven capability across industries and enterprise teams.",
      items: [
        {
          platform: "Cutting Point Enterprise CMS",
          years: "8+ years",
          users: "1.2k+",
          websites: "420+",
          awards: "6 awards",
          clients: "180+",
          suitable: "For teams that need secure, flexible content operations.",
        },
        {
          platform: "Commerce Suite",
          years: "6+ years",
          users: "680+",
          websites: "230+",
          awards: "4 awards",
          clients: "95+",
          suitable: "For businesses selling online with end-to-end payments.",
        },
        {
          platform: "Corporate Cloud",
          years: "7+ years",
          users: "900+",
          websites: "310+",
          awards: "5 awards",
          clients: "120+",
          suitable: "For intranets and portals connected to internal systems.",
        },
        {
          platform: "Brand Experience",
          years: "5+ years",
          users: "520+",
          websites: "180+",
          awards: "3 awards",
          clients: "70+",
          suitable: "For premium brand storytelling and corporate image sites.",
        },
        {
          platform: "Data Insight Portal",
          years: "4+ years",
          users: "350+",
          websites: "140+",
          awards: "2 awards",
          clients: "40+",
          suitable: "For real-time dashboards and executive reporting.",
        },
      ],
    },
    services: {
      title: "Core services",
      subtitle: "Strategy to launch, with long-term operational support.",
      items: [
        "Digital strategy and consulting",
        "UX/UI design and information architecture",
        "Enterprise website & web app development",
        "SEO and conversion optimization",
        "Managed hosting & support",
        "Business analytics and reporting",
      ],
    },
    packages: {
      title: "CUTTING POINT INNOVATION Pro packages",
      subtitle: "Flexible by business size, with after-sales support.",
      items: [
        {
          name: "Package small",
          price: "Starting at 3,000 THB",
          description: "Ideal for brands that need a professional landing page.",
          features: [
            "One-page design with complete sections",
            "Mobile-ready + basic SEO setup",
            "Contact form + analytics",
            "Delivery within 14 days",
            "30-day after-sales support",
          ],
          badge: "For small businesses",
        },
        {
          name: "Package Business",
          price: "Starting at 10,000 THB",
          description: "6–8 page corporate website with content management (CMS).",
          features: [
            "Brand-tailored design",
            "CMS for content management",
            "Social + map integrations",
            "Advanced SEO tuning",
            "Monthly care service",
          ],
          badge: "For growing businesses",
        },
        {
          name: "Business Plus+",
          price: "Starting at 50,000 THB",
          description: "Enterprise features and internal system integrations.",
          features: [
            "Deep UX/UI analysis",
            "Membership or portal system",
            "Multi-language + multi-branch support",
            "Additional features as needed",
            "Monthly care service",
          ],
          badge: "For large organizations",
        },
      ],
    },
    portfolio: {
      title: "Recent work",
      subtitle: "Selected projects across premium industries.",
      items: [
        { title: "Riviera Hotels", category: "Hospitality" },
        { title: "Siam Logistics", category: "Logistics" },
        { title: "Metro Healthcare", category: "Healthcare" },
        { title: "Orchid Finance", category: "Finance" },
        { title: "Aurora Education", category: "Education" },
        { title: "Atlas Manufacturing", category: "Manufacturing" },
      ],
    },
    contact: {
      title: "Start your project",
      subtitle: "Our consultants will respond within one business day.",
      detailsTitle: "Contact details",
      detailsSubtitle: "Reach our team directly or via Line for priority requests.",
      name: "Full name",
      phone: "Phone number",
      email: "Email address",
      message: "Project details",
      submit: "Send message",
      success: "Thank you. We will contact you shortly.",
      sending: "Sending...",
    },
    additional: {
      title: "Additional services",
      subtitle: "Strengthen your digital presence with expert care.",
      items: [
        "Production-ready hosting + cloud infrastructure",
        "Enterprise system design",
        "Performance and security optimization",
        "Digital asset design + brand guidelines",
        "Ongoing support and rapid issue resolution",
      ],
    },
    footer: {
      company: "CUTTING POINT INNOVATION CO., LTD.",
      address:
        "139/32 Nantana Garden Village, Ban Klang, Mueang Pathum Thani, Pathum Thani 12000, Thailand",
      phone: "+66 84 337 4982",
      email: "cuttingpointtech@gmail.com",
      line: "Line: @974qhtym",
      note: "Enterprise digital solutions across websites, applications, and internal systems.",
    },
  },
  lo: {
    nav: {
      home: "ໜ້າຫຼັກ",
      features: "ຈຸດເດັ່ນ",
      platforms: "ແພລດຟອມ",
      services: "ບໍລິການ",
      packages: "ແພັກເກັດ",
      portfolio: "ແມ່ແບບ",
      articles: "ບົດຄວາມ",
      trial: "ທົດລອງໃຊ້ງານ",
      contact: "ຕິດຕໍ່",
      signup: "ສະໝັກໃຊ້ງານ",
      downloads: "ດາວໂຫຼດ",
    },
    hero: {
      title: "CpiPOS — ລະບົບ POS ສຳລັບ Android",
      subtitle:
        "ຖ້າມີແທັບເລັດ ຫຼື ໂທລະສັບ Android ທີ່ຮອງຮັບ ສາມາດເລີ່ມໃຊ້ POS ໄດ້ໂດຍບໍ່ຈຳເປັນຊື້ເຄື່ອງໃໝ່ຕັ້ງແຕ່ມື້ທຳອິດ",
      primaryCta: "ທົດລອງຟຣີ 7 ມື້",
      secondaryCta: "ເບິ່ງ CpiPOS",
      trust: "ເໝາະສຳລັບຮ້ານອາຫານ ຄາເຟ ຮ້ານຄ້າປີກ ແລະ ຮ້ານຄ້າທົ່ວໄປ",
    },
    features: {
      title: "CpiPOS ຊ່ວຍໃຫ້ວຽກໜ້າຮ້ານງ່າຍຂຶ້ນ",
      subtitle: "ເລີ່ມຈາກວຽກທີ່ຮ້ານຕ້ອງໃຊ້ຈິງ: ຂາຍສິນຄ້າ ຈັດການສະຕັອກ ແລະ ເບິ່ງຍອດຂາຍ",
      items: [
        {
          title: "ເລີ່ມໄດ້ເທິງ Android",
          description: "ໃຊ້ອຸປະກອນ Android ທີ່ຮອງຮັບຢູ່ແລ້ວໄດ້ ກ່ອນລົງທຶນເຄື່ອງ POS ເພີ່ມ",
        },
        {
          title: "ການຂາຍແລະສິນຄ້າ",
          description: "ຈັດການການຂາຍໜ້າຮ້ານແລະລາຍການສິນຄ້າໃນລະບົບດຽວ",
        },
        {
          title: "ສະຕັອກແລະຍອດຂາຍ",
          description: "ຕິດຕາມຂໍ້ມູນສິນຄ້າ ສະຕັອກ ແລະ ຍອດຂາຍໄດ້ງ່າຍຂຶ້ນ",
        },
        {
          title: "ມີທີມງານຊ່ວຍເຫຼືອ",
          description: "ຕິດຕໍ່ທີມງານເພື່ອສະໝັກ ຕັ້ງຄ່າ ແລະ ຮັບການຊ່ວຍເຫຼືອຫຼັງເລີ່ມໃຊ້",
        },
      ],
    },
    platforms: {
      title: "ແພລດຟອມທີ່ພວກເຮົາຊ່ຽວຊານ",
      subtitle: "ສະຖິຕິທີ່ສະແດງຄວາມຊ່ຽວຊານໃນການພັດທະນາ ແລະ ດູແລລະບົບ",
      items: [
        {
          platform: "Cutting Point Enterprise CMS",
          years: "8+ ປີ",
          users: "1.2k+",
          websites: "420+",
          awards: "6 ລາງວັນ",
          clients: "180+",
          suitable: "ເໝາະສຳລັບອົງກອນທີ່ຕ້ອງການ CMS ທີ່ປອດໄພ ແລະ ຍືດຫຍຸ່ນ",
        },
        {
          platform: "Commerce Suite",
          years: "6+ ປີ",
          users: "680+",
          websites: "230+",
          awards: "4 ລາງວັນ",
          clients: "95+",
          suitable: "ເໝາະສຳລັບທຸລະກິດຂາຍອອນໄລນ໌ທີ່ຕ້ອງການການຊຳລະເງິນຄົບວົງຈອນ",
        },
        {
          platform: "Corporate Cloud",
          years: "7+ ປີ",
          users: "900+",
          websites: "310+",
          awards: "5 ລາງວັນ",
          clients: "120+",
          suitable: "ເໝາະສຳລັບອິນທຣາເນັດ/ພອດທັລ ເຊື່ອມຕໍ່ລະບົບພາຍໃນ",
        },
        {
          platform: "Brand Experience",
          years: "5+ ປີ",
          users: "520+",
          websites: "180+",
          awards: "3 ລາງວັນ",
          clients: "70+",
          suitable: "ເໝາະສຳລັບແບຣນດ໌ທີ່ຕ້ອງການເວັບໄຊພາບລັກສະນະພຣີເມຍມ",
        },
        {
          platform: "Data Insight Portal",
          years: "4+ ປີ",
          users: "350+",
          websites: "140+",
          awards: "2 ລາງວັນ",
          clients: "40+",
          suitable: "ເໝາະສຳລັບແດຊບອດ ແລະ ລາຍງານແບບເວລາຈິງ",
        },
      ],
    },
    services: {
      title: "ບໍລິການຫຼັກຂອງພວກເຮົາ",
      subtitle: "ຄົບວົງຈອນຕັ້ງແຕ່ກົນລະຍຸດ ຈົນເຖິງການດູແລລະຍະຍາວ",
      items: [
        "ທີ່ປຶກສາ ແລະ ວາງກົນລະຍຸດດິຈິຕອນ",
        "ອອກແບບ UX/UI ແລະ ໂຄງສ້າງຂໍ້ມູນ",
        "ພັດທະນາເວັບໄຊອົງກອນ ແລະ Web App",
        "ປັບແຕ່ງໃຫ້ຮອງຮັບ SEO ແລະ ການໂຄສະນາອອນໄລນ໌",
        "ດູແລໂຮສຕິ້ງ/ລະບົບ ດ້ວຍທີມຜູ້ຊ່ຽວຊານ",
        "ວິເຄາະຂໍ້ມູນ ແລະ ວັດຜົນເຊິງທຸລະກິດ",
      ],
    },
    packages: {
      title: "ແພັກເກັດ CUTTING POINT INNOVATION Pro",
      subtitle: "ປັບໄດ້ຕາມຂະໜາດທຸລະກິດ ພ້ອມການດູແລຫຼັງການຂາຍ",
      items: [
        {
          name: "Package Small",
          price: "ເລີ່ມຕົ້ນ 3,000 ບາດ",
          description: "ເໝາະສຳລັບແບຣນດ໌ທີ່ຕ້ອງການ Landing Page ແບບມືອາຊີບ",
          features: [
            "ອອກແບບໜ້າດຽວ ຄົບທຸກສ່ວນ",
            "ຮອງຮັບມືຖື ແລະ SEO ພື້ນຖານ",
            "ຟອມຕິດຕໍ່ + Analytics",
            "ສົ່ງມອບພາຍໃນ 14 ວັນ",
            "ຊ່ວຍເຫຼືອຫຼັງສົ່ງມອບ 30 ວັນ",
          ],
          badge: "ສຳລັບທຸລະກິດຂະໜາດນ້ອຍ",
        },
        {
          name: "Package Business",
          price: "ເລີ່ມຕົ້ນ 10,000 ບາດ",
          description: "ເວັບໄຊອົງກອນ 6-8 ໜ້າ ພ້ອມລະບົບຈັດການເນື້ອຫາ",
          features: [
            "ອອກແບບຕາມແບຣນດ໌",
            "CMS ສຳລັບຈັດການເນື້ອຫາ",
            "ເຊື່ອມຕໍ່ Social ແລະ ແຜນທີ່",
            "ປັບແຕ່ງ SEO ເຊິງເລິກ",
            "ບໍລິການດູແລລາຍເດືອນ",
          ],
          badge: "ສຳລັບທຸລະກິດກຳລັງເຕີບໂຕ",
        },
        {
          name: "Business Plus+",
          price: "ເລີ່ມຕົ້ນ 50,000 ບາດ",
          description: "ຮອງຮັບຟີເຈີສຳລັບອົງກອນ ແລະ ການເຊື່ອມຕໍ່ລະບົບພາຍໃນ",
          features: [
            "ວິເຄາະ UX/UI ເຊິງເລິກ",
            "ລະບົບສະມາຊິກ/ພອດທັລ",
            "ຮອງຮັບຫຼາຍພາສາ ແລະ ຫຼາຍສາຂາ",
            "ເພີ່ມຟີເຈີຕາມຄວາມຕ້ອງການ",
            "ບໍລິການດູແລລາຍເດືອນ",
          ],
          badge: "ສຳລັບອົງກອນຂະໜາດໃຫຍ່",
        },
      ],
    },
    portfolio: {
      title: "ແມ່ແບບເວັບໄຊຂອງພວກເຮົາ",
      subtitle: "ຕົວຢ່າງແມ່ແບບເວັບໄຊຈາກຫຼາກຫຼາຍອຸດສາຫະກຳ",
      items: [
        { title: "Riviera Hotels", category: "Hospitality" },
        { title: "Siam Logistics", category: "Logistics" },
        { title: "Metro Healthcare", category: "Healthcare" },
        { title: "Orchid Finance", category: "Finance" },
        { title: "Aurora Education", category: "Education" },
        { title: "Atlas Manufacturing", category: "Manufacturing" },
      ],
    },
    contact: {
      title: "ເລີ່ມຕົ້ນໂຄງການຂອງທ່ານ",
      subtitle: "ທີມທີ່ປຶກສາຈະຕອບກັບພາຍໃນ 1 ວັນເຮັດວຽກ",
      detailsTitle: "ຂໍ້ມູນຕິດຕໍ່",
      detailsSubtitle: "ຕິດຕໍ່ທີມງານໄດ້ໂດຍກົງ ຫຼື ຜ່ານ LINE ສຳລັບງານດ່ວນ",
      name: "ຊື່-ນາມສະກຸນ",
      phone: "ເບີໂທ",
      email: "ອີເມວ",
      message: "ລາຍລະອຽດທີ່ຕ້ອງການ",
      submit: "ສົ່ງຂໍ້ຄວາມ",
      success: "ຂອບໃຈທີ່ຕິດຕໍ່ ພວກເຮົາຈະຕິດຕໍ່ກັບໄປໄວໆນີ້",
      sending: "ກຳລັງສົ່ງ...",
    },
    additional: {
      title: "ບໍລິການເພີ່ມເຕີມ",
      subtitle: "ເສີມຄວາມແຂງແຮງໃຫ້ເວັບໄຊຂອງທ່ານແບບຄົບວົງຈອນ",
      items: [
        "ໂຮສຕິ້ງພ້ອມໃຊ້ງານ + ໂຄງສ້າງ Cloud ພື້ນຖານ",
        "ອອກແບບລະບົບສຳລັບອົງກອນ",
        "ປັບປຸງຄວາມໄວ ແລະ ຄວາມປອດໄພ",
        "ອອກແບບສື່ດິຈິຕອນ ແລະ ຄູ່ມືແບຣນດ໌",
        "ດູແລລະບົບ ແລະ ແກ້ໄຂປັນຫາໄດ້ທັນທີ",
      ],
    },
    footer: {
      company: "CUTTING POINT INNOVATION CO., LTD.",
      address:
        "139/32 Nantana Garden Village, Ban Klang, Mueang Pathum Thani, Pathum Thani 12000, Thailand",
      phone: "0843374982",
      email: "cuttingpointtech@gmail.com",
      line: "LINE: @974qhtym",
      note: "ໂຊລູຊັນດິຈິຕອນລະດັບອົງກອນ: ເວັບໄຊ, ແອັບ, ແລະ ລະບົບພາຍໃນ",
    },
  },
};

export const getCopy = (lang: Lang) => dict[lang];
