"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBackground from "./ui/HeroBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020826] flex items-center justify-center px-4">
      
      {/* HERO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <HeroBackground 
          color1="#051050"
          color2="#12083a"
          color3="#0f0c4f"
          timeSpeed={0.25}
          colorBalance={-0.05}
          warpStrength={1.95}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className="relative z-10 w-full max-w-7xl h-[900px] flex items-center justify-center">

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
          className="absolute left-20 top-[195px]
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
          className="absolute right-12 top-[380px]
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

        {/* ===================================================== */}
        {/* SEÇÃO DE CTA - ABAIXO DA LOGO */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[680px] flex flex-col items-center gap-9 z-20"
        >
          <p className="text-white text-center text-base max-w-2xl leading-relaxed">
            Transforme sua visão em realidade com soluções digitais inovadoras. 
            Estamos prontos para levar seu negócio ao próximo nível.
          </p>

          <div className="flex gap-5 flex-wrap justify-center">
            <button className="w-[200] h-[50] bg-[#ffb800] text-[#ffffff] font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
              Solicitar Orçamento
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button className="w-[200] h-[50] border border-[#ffffff] text-[#ffffff] hover:bg-[#f5a623]/10 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
              Ver Serviços
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}