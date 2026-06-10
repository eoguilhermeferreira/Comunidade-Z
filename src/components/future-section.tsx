"use client";

import { motion } from "framer-motion";

import Team2 from "@/components/ui/team2";

export function FutureSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b0c10] py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40vw] w-[40vw] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
      >
        <Team2 />
      </motion.div>
    </section>
  );
}
