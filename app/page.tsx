"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ReactNode, useState } from "react";

/* VARIANT ANIMASI */
const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

/* WRAPPER SECTION */
type SectionProps = {
  children: ReactNode;
  variants: Variants;
};

const Section = ({ children, variants }: SectionProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-8"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-200 px-6 py-16 flex justify-center">
      <div className="max-w-3xl w-full bg-gray-900/70 rounded-2xl p-8 shadow-lg">

     {/* HAMBURGER MENU (FIXED) */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="flex flex-col gap-1 p-3 rounded-xl bg-gray-900/80 backdrop-blur
                    hover:bg-gray-800 transition shadow-lg"
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* DROPDOWN MENU */}
       {openMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-20 right-6 z-50
                      bg-gray-800 rounded-xl p-4 space-y-2 shadow-xl"
          >
            <a
              href="#tentang"
              onClick={() => setOpenMenu(false)}
              className="block hover:text-white"
            >
              Tentang Saya
            </a>
            <a
              href="#hobi"
              onClick={() => setOpenMenu(false)}
              className="block hover:text-white"
            >
              Hobi
            </a>
            <a
              href="#pengalaman"
              onClick={() => setOpenMenu(false)}
              className="block hover:text-white"
            >
              Pengalaman
            </a>
            <a
              href="#lokasi"
              onClick={() => setOpenMenu(false)}
              className="block hover:text-white"
            >
              Lokasi
            </a>
          </motion.div>
        )}

        {/* UCAPAN */}
        <Section variants={fade}>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">
              Halo, selamat datang 👋
            </h1>
            <p className="text-gray-400 mt-2">
              Ini adalah halaman profil sederhana saya
            </p>
          </div>
        </Section>

        {/* CHIBI */}
        <Section variants={zoomIn}>
          <div className="flex justify-center">
            <Image
              src="/chibinaa.png"
              alt="Chibi Dina"
              width={260}
              height={260}
              priority
              className="drop-shadow-xl"
            />
          </div>
        </Section>

      

        {/* TENTANG */}
        <Section variants={slideLeft}>
          <section id="tentang">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Tentang Saya
            </h2>
             <div className="flex justify-center">
            <Image
              src="/foto aku1.jpg"
              alt="foto aku1"
              width={180}
              height={180}
              className="object-cover rounded-2xl border border-gray-700 shadow-md"
            />
          </div>
            <p className="text-gray-400">
              Saya seorang siswa yang mengambil jurusan teknik.
              Di jurusan ini saya mempelajari dasar-dasar teknik software dan hardware. 
              Dalam bidang software, saya pernah mempelajari dan menggunakan HTML, CSS, 
              JavaScript, Laravel, dan Next.js untuk membuat serta mengembangkan website sederhana. 
              Selain itu, saya juga memiliki pengalaman dasar dalam bidang hardware, seperti pemasangan CCTV, 
              serta mempelajari konsep dasar jaringan dan konfigurasi dasar Mikrotik.
            </p>
          </section>
        </Section>

        {/* HOBI */}
        <Section variants={slideRight}>
          <section id="hobi">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Hobi
            </h2>
            <p className="text-gray-400">
              Saya memiliki beberapa hobi yang saya lakukan di waktu luang,
              di antaranya bersepeda gunung untuk menjaga kebugaran dan menikmati alam, 
              menggambar serta membuat animasi sebagai sarana menyalurkan kreativitas, 
              bermain game untuk hiburan, membuat website secara acak sebagai media eksplorasi dan 
              latihan kemampuan, serta memasak sebagai kegiatan yang melatih kemandirian dan kreativitas.
            </p>
          </section>
        </Section>

        {/* PENGALAMAN */}
        <Section variants={slideUp}>
          <section id="pengalaman">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Pengalaman
            </h2>
            <ul className="text-gray-400 space-y-1">
              <li>Website sederhana</li>
              <li>Project frontend sekolah</li>
              <li>Kerja tim kecil</li>
            </ul>
          </section>
        </Section>

       {/* LOKASI */}
        <Section variants={fade}>
          <section id="lokasi">
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Lokasi
            </h2>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Selorejo+Dau+Malang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                        text-gray-400 hover:text-white
                        transition underline-offset-4 hover:underline"
            >
              🔒 📍 Malang, Selorejo (Dau)
            </a>

            <p className="text-xs text-gray-500 mt-1">
              Lokasi disamarkan, klik untuk membuka Google Maps
            </p>
          </section>
        </Section>


        {/* WHATSAPP */}
        <Section variants={zoomIn}>
          <div className="flex justify-center">
            <a
              href="https://wa.me/6282140205994"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </Section>

      </div>
    </main>
  );
}
