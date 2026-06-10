"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { renderCanvas } from "@/components/ui/canvas";

const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
});

export function Hero() {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0b0c10]">
      <HeroScene />

      <canvas
        id="canvas"
        className="pointer-events-none absolute inset-0 z-0"
      />

      {/* Cursor spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={500}
      />

      {/* Nebula glow background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_75%)]" />
      </div>

      {/* Floating logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mb-8 flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-[0_0_60px_rgba(56,189,248,0.35)] backdrop-blur-xl md:h-32 md:w-32"
      >
        <div className="absolute inset-0 z-10 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
        <Image
          src="/logo-z.jpg"
          alt="Comunidade Z"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="max-w-4xl text-balance px-4 text-center text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        O próximo nível
        <br />
        <span className="text-white/60">começa aqui.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65 }}
        className="mt-6 max-w-xl text-balance px-4 text-center text-base text-white/60 sm:text-lg md:text-xl"
      >
        Conecte-se com pessoas que querem crescer, aprender e construir algo
        maior.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85 }}
        className="mt-10 flex flex-col gap-4 px-4 sm:flex-row"
      >
        <Button
          size="lg"
          className="group relative overflow-hidden rounded-full bg-white px-8 py-6 text-base font-semibold text-black shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-transform hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            Entrar na Comunidade
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="group relative overflow-hidden rounded-full border-white/20 bg-white/5 px-8 py-6 text-base font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:border-white/40 hover:bg-white/10"
        >
          <span className="relative z-10">Conheça o Movimento</span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </Button>
      </motion.div>
    </section>
  );
}
