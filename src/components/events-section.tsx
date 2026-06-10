"use client";

import { motion } from "framer-motion";
import { Mic, Wrench, Network, GraduationCap } from "lucide-react";

import { Card } from "@/components/ui/card";

const events = [
  {
    icon: Mic,
    title: "Palestras",
    description:
      "Conteúdo direto de quem está construindo negócios e carreiras de impacto.",
  },
  {
    icon: Wrench,
    title: "Workshops",
    description:
      "Sessões práticas para desenvolver habilidades que aceleram seu crescimento.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Encontros para criar conexões reais com pessoas que pensam grande.",
  },
  {
    icon: GraduationCap,
    title: "Mentorias",
    description:
      "Acompanhamento próximo para destravar o seu próximo passo.",
  },
];

export function EventsSection() {
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
            Experiências por vir
          </h2>
          <p className="mt-4 text-lg text-white/60">
            O que está reservado para quem fizer parte da Comunidade Z.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            >
              <Card className="group relative h-full overflow-hidden border-slate-700/40 bg-slate-800/30 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                <div className="absolute inset-0 -z-10 bg-white/0 opacity-0 transition-opacity duration-500 group-hover:bg-white/5 group-hover:opacity-100" />
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-slate-700/40 bg-slate-700/30 transition-transform duration-500 group-hover:scale-110 group-hover:border-white/40">
                  <event.icon className="size-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {event.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
