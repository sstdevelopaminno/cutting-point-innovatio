import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cuttingpointinnovation.vercel.app";

export const metadata: Metadata = {
  title: "CpiPOS ລະບົບ POS ສໍາລັບຮ້ານຄ້າໃນລາວ | ທົດລອງໃຊ້",
  description: "ຮູ້ຈັກ CpiPOS ລະບົບຂາຍໜ້າຮ້ານສໍາລັບ Android ເໝາະກັບຮ້ານຄ້າ ຄາເຟ ແລະຮ້ານອາຫານ. ສາມາດເບິ່ງ Web Demo ແລະຂໍທົດລອງໃຊ້ 7 ມື້ໄດ້.",
  alternates: { canonical: "/laos/pos" },
  openGraph: { title: "CpiPOS ສໍາລັບຮ້ານຄ້າໃນລາວ", description: "ລະບົບ POS ສໍາລັບ Android ແລະຮ້ານຄ້າໃນລາວ", url: new URL("/laos/pos", SITE_URL).toString(), type: "website" },
  robots: { index: true, follow: true },
};

export default function LaosPosPage() {
  return <main lang="lo" className="min-h-screen bg-slate-50 text-slate-900">
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="text-sm font-bold tracking-widest text-blue-700">CpiPOS · LAOS</p>
      <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">ລະບົບ POS ສໍາລັບຮ້ານຄ້າ ຄາເຟ ແລະຮ້ານອາຫານໃນລາວ</h1>
      <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">CpiPOS ຊ່ວຍຈັດການການຂາຍ ສິນຄ້າ ສະຕັອກ ແລະຂໍ້ມູນຮ້ານຄ້າ ໂດຍເນັ້ນການໃຊ້ງານຜ່ານອຸປະກອນ Android ທີ່ຮອງຮັບ.</p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/trial/pos?utm_source=laos_landing&utm_medium=organic&utm_campaign=laos_launch" className="rounded-xl bg-blue-700 px-6 py-4 font-bold text-white hover:bg-blue-800">ເບິ່ງ Web Demo</Link>
        <Link href="/register-store?utm_source=laos_landing&utm_medium=organic&utm_campaign=laos_launch" className="rounded-xl border border-blue-700 px-6 py-4 font-bold text-blue-800 hover:bg-blue-50">ຂໍທົດລອງໃຊ້ 7 ມື້</Link>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {[["ຂາຍໜ້າຮ້ານ","ຈັດການລາຍການຂາຍແລະສິນຄ້າ"],["ສະຕັອກສິນຄ້າ","ຕິດຕາມຂໍ້ມູນສິນຄ້າໃນຮ້ານ"],["ຂໍ້ມູນຍອດຂາຍ","ກວດເບິ່ງຜົນການຂາຍເພື່ອຊ່ວຍບໍລິຫານຮ້ານ"]].map(([title,body])=><article key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 leading-8 text-slate-600">{body}</p></article>)}
      </div>
      <section className="mt-14 rounded-2xl bg-blue-50 p-7">
        <h2 className="text-2xl font-bold">ກ່ອນເລີ່ມໃຊ້ງານຈິງ</h2>
        <p className="mt-3 leading-8 text-slate-700">Web Demo ແມ່ນສໍາລັບທົດລອງຟັງຊັນເບື້ອງຕົ້ນ. ການທົດລອງໃຊ້ກັບຮ້ານຈິງ 7 ມື້ຕ້ອງສົ່ງຄໍາຂໍແລະລໍຖ້າທີມງານກວດສອບ. ກະລຸນາຢືນຢັນການຮອງຮັບເງິນກີບ (LAK), ໃບຮັບເງິນ ແລະອຸປະກອນກັບທີມງານກ່ອນນໍາໃຊ້ໃນຮ້ານ.</p>
      </section>
      <p className="mt-10 text-sm text-slate-500">CUTTING POINT INNOVATION CO., LTD. · CpiPOS</p>
    </section>
  </main>;
}
