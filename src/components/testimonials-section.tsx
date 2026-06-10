"use client";

import { motion } from "framer-motion";

import {
  TestimonialCarousel,
  type Testimonial,
} from "@/components/ui/testimonial";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Membro da Comunidade Z",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=faces",
    description:
      "Em breve, depoimentos reais de quem faz parte da Comunidade Z aparecerão aqui.",
  },
  {
    id: 2,
    name: "Membro da Comunidade Z",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    description:
      "Faça parte agora e seu depoimento pode ser um dos primeiros a inspirar outras pessoas.",
  },
  {
    id: 3,
    name: "Membro da Comunidade Z",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=faces",
    description:
      "Construído por pessoas que acreditam em crescer juntas, não sozinhas.",
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <TestimonialCarousel
            testimonials={testimonials}
            className="mx-auto max-w-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
