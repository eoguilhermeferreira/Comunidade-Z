"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Muitas pessoas tentam crescer sozinhas.",
  "Acreditamos que o crescimento acontece mais rápido quando estamos cercados pelas pessoas certas.",
  "A Comunidade Z nasceu para conectar, inspirar e impulsionar pessoas rumo ao próximo nível.",
];

export function WhySection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        {paragraphs.map((text, i) => (
          <motion.p
            key={text}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
            className={
              i === paragraphs.length - 1
                ? "bg-gradient-to-r from-sky-300 via-blue-400 to-purple-400 bg-clip-text text-2xl font-semibold leading-relaxed text-transparent sm:text-3xl md:text-4xl"
                : "text-xl font-medium leading-relaxed text-white/70 sm:text-2xl md:text-3xl"
            }
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
