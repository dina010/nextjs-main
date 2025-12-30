import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans px-6 sm:px-10 flex flex-col items-center justify-center">

      <header className="text-center py-16 px-4 max-w-3xl w-full">

        {/* FOTO PROFESIONAL */}
        <div className="mb-6">
          <Image
            src="/foto-aku.jpg"   // lokasi di public/
            alt="Foto Profil Maulidina"
            width={180}
            height={180}
            className="rounded-full object-cover border-4 border-pink-500/70 shadow-[0_0_27px_-5px_rgba(236,72,153,0.45)] hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* NAMA */}
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          Maulidina
        </h1>mng                                                                                           

        {/* DESKRIPSI */}
        <p className="text-xl sm:text-2xl text-gray-300 mt-3 font-light">
          Siswa Pengembang Web & Desainer Kreatif
        </p>

        <div className="border-b border-pink-500/40 w-28 mx-auto my-6"></div>

        {/* BIO */}
        <p className="text-lg text-gray-400 leading-relaxed">
          Saya antusias mempelajari dunia pengembangan web dan desain kreatif.
          Fokus saya saat ini adalah membangun antarmuka yang modern, bersih, dan
          mudah digunakan. Senang dapat terus belajar dan berkembang.
        </p>

      </header>

    </div>
  );
}
