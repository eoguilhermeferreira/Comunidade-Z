"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[50vw] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600/25 via-purple-600/15 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Faça parte do começo.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-xl text-balance text-base text-white/60 sm:text-lg"
        >
          Os primeiros membros da Comunidade Z terão acesso às oportunidades,
          eventos e experiências que construirão o futuro da comunidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-4"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 px-12 py-8 text-lg font-bold text-white shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              ENTRAR NA COMUNIDADE Z
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
