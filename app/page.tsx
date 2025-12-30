"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

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

/* WRAPPER SECTION (ANTI ERROR) */
const Section = ({
  children,
  variants,
}: {
  children: ReactNode;
  variants: Variants;
}) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="mb-8"
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-6 py-16 flex justify-center">
      <div className="max-w-3xl w-full bg-gray-900/70 rounded-2xl p-8 shadow-lg">

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

        {/* FOTO */}
        <Section variants={zoomIn}>
          <div className="flex justify-center">
            <Image
              src="/foto-aku.jpg"
              alt="Foto Saya"
              width={180}
              height={180}
              className="object-cover rounded-2xl border border-gray-700 shadow-md"
            />
          </div>
        </Section>

        {/* TENTANG */}
        <Section variants={slideLeft}>
          <section>
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Tentang Saya
            </h2>
            <p className="text-gray-400">
              Pelajar yang tertarik pada dunia teknologi dan pengembangan web.
              Fokus belajar konsisten dan bertahap.
            </p>
          </section>
        </Section>

        {/* HOBI */}
        <Section variants={slideRight}>
          <section>
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Hobi
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Naik sepeda motor</li>
              <li>Ngoding & eksplor</li>
              <li>Dengerin musik</li>
            </ul>
          </section>
        </Section>

        {/* PENGALAMAN */}
        <Section variants={slideUp}>
          <section>
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Pengalaman
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>• Website sederhana</li>
              <li>• Project frontend sekolah</li>
              <li>• Kerja tim kecil</li>
            </ul>
          </section>
        </Section>

        {/* LOKASI */}
        <Section variants={fade}>
          <section>
            <h2 className="text-lg font-semibold text-gray-100 mb-2">
              Lokasi
            </h2>
            <p className="text-gray-400">📍 Bandung, Jawa Barat</p>
          </section>
        </Section>

        {/* WHATSAPP */}
        <Section variants={zoomIn}>
          <div className="flex justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </Section>

      </div>
    </div>
  );
}
