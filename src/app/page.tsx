import { Hero } from "@/components/hero";
import { WhySection } from "@/components/why-section";
import { BenefitsSection } from "@/components/benefits-section";
import { FutureSection } from "@/components/future-section";
import { EventsSection } from "@/components/events-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-black">
      <Hero />
      <WhySection />
      <BenefitsSection />
      <FutureSection />
      <EventsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
