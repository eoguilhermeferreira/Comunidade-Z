"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  BookOpen,
  Lightbulb,
  Globe2,
  TrendingUp,
} from "lucide-react";

import DisplayCards from "@/components/ui/display-cards";

const benefits = [
  {
    icon: <Users className="size-4 text-blue-300" />,
    title: "Networking",
    description: "Conecte-se com pessoas ambiciosas.",
    date: "Comunidade Z",
  },
  {
    icon: <CalendarDays className="size-4 text-blue-300" />,
    title: "Eventos",
    description: "Experiências presenciais e online.",
    date: "Comunidade Z",
  },
  {
    icon: <BookOpen className="size-4 text-blue-300" />,
    title: "Conteúdo Exclusivo",
    description: "Aprenda com conteúdos selecionados.",
    date: "Comunidade Z",
  },
  {
    icon: <Lightbulb className="size-4 text-blue-300" />,
    title: "Oportunidades",
    description: "Conheça novos projetos e negócios.",
    date: "Comunidade Z",
  },
  {
    icon: <Globe2 className="size-4 text-blue-300" />,
    title: "Comunidade",
    description: "Faça parte de algo maior.",
    date: "Comunidade Z",
  },
  {
    icon: <TrendingUp className="size-4 text-blue-300" />,
    title: "Crescimento",
    description: "Desenvolva sua mentalidade e habilidades.",
    date: "Comunidade Z",
  },
];

const stackPositions = [
  "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
];

function buildGroup(start: number) {
  return benefits.slice(start, start + 3).map((b, i) => ({
    ...b,
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: stackPositions[i],
  }));
}

export function BenefitsSection() {
  const groups = [buildGroup(0), buildGroup(3)];

  return (
    <section className="relative w-full bg-black py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            O que você ganha ao entrar
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Tudo que você precisa para acelerar sua jornada de crescimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-24 md:grid-cols-2 md:gap-12">
          {groups.map((cards, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.2, ease: "easeOut" }}
              className="flex justify-center pt-8"
            >
              <DisplayCards cards={cards} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
