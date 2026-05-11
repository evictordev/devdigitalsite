"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020826] flex items-center justify-center px-4">

      {/* CONTAINER PRINCIPAL */}
      <div className="relative w-full max-w-7xl h-[700px] flex items-center justify-center">

        {/* ===================================================== */}
        {/* SVG DAS LINHAS */}
        {/* ===================================================== */}

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1400 700"
          fill="none"
        >

          {/* LINHA ESQUERDA */}
          <motion.path
            d="M460 410 H320 V360 H260 V240"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            className="drop-shadow-[0_0_6px_white]"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />

          {/* SETA ESQUERDA */}
          <motion.path
            d="M252 250 L260 240 L268 250 Z"
            fill="white"
            className="drop-shadow-[0_0_6px_white]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.3,
            }}
          />

          {/* LINHA DIREITA */}
          <motion.path
            d="M930 225 H1070 V260"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            className="drop-shadow-[0_0_6px_white]"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.8,
              delay: 0.3,
              ease: "easeInOut",
            }}
          />

          {/* SETA DIREITA */}
          <motion.path
            d="M1062 250 L1070 260 L1078 250 Z"
            fill="white"
            className="drop-shadow-[0_0_6px_white]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.8,
              duration: 0.3,
            }}
          />
        </svg>

        {/* ===================================================== */}
        {/* CARD ESQUERDO */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-20 top-[95px]
                     w-[325px] h-[145px]
                     border border-[#f5a623]
                     rounded-md
                     bg-[#08112c]/80
                     backdrop-blur-md
                     p-3"
        >
          <h2 className="text-white text-3xl font-bold leading-tight">
            Transformamos ideias em{" "}
            <span className="text-[#f5a623]">Soluções</span> Digitais.
          </h2>
        </motion.div>

        {/* ===================================================== */}
        {/* LOGO */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative w-[350px] h-[350px] lg:w-[418px] lg:h-[334px]"
        >
          <Image
            src="/hero/3dlogodevdigital.png"
            alt="Logo"
            fill
            priority
            quality={100}
            className="object-contain"
          />
        </motion.div>

        {/* ===================================================== */}
        {/* CARD DIREITO */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="absolute right-12 top-[280px]
                     w-[325px] h-[145px]
                     border border-[#f5a623]
                     rounded-md
                     bg-[#08112c]/80
                     backdrop-blur-md
                     p-3"
        >
          <h2 className="text-white text-3xl font-bold leading-tight">
            Experiências digitais que te deixam em{" "}
            <span className="text-[#f5a623]">altíssimo nível</span>.
          </h2>
        </motion.div>

      </div>
    </section>
  );
}