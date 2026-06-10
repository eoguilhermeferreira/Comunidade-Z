"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Card } from "@/components/ui/card";

const placeholders = [
  {
    quote:
      "Em breve, depoimentos reais de quem faz parte da Comunidade Z aparecerão aqui.",
    name: "Membro da Comunidade Z",
    role: "Em breve",
  },
  {
    quote:
      "Faça parte agora e seu depoimento pode ser um dos primeiros a inspirar outras pessoas.",
    name: "Membro da Comunidade Z",
    role: "Em breve",
  },
  {
    quote:
      "Construído por pessoas que acreditam em crescer juntas, não sozinhas.",
    name: "Membro da Comunidade Z",
    role: "Em breve",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[#0b0c10] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Vozes da Comunidade
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Histórias de quem está construindo o futuro junto com a gente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {placeholders.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            >
              <Card className="flex h-full flex-col justify-between gap-6 border-slate-700/40 bg-slate-800/30 p-6 backdrop-blur-sm">
                <Quote className="size-6 text-sky-400/60" />
                <p className="text-sm leading-relaxed text-white/70">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-slate-700/40 pt-4">
                  <div className="size-9 rounded-full bg-gradient-to-br from-sky-400/40 to-purple-400/40" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
