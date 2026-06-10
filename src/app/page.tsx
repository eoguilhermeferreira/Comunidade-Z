import { Hero } from "@/components/hero";
import { WhySection } from "@/components/why-section";
import { BenefitsSection } from "@/components/benefits-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-black">
      <Hero />
      <WhySection />
      <BenefitsSection />
    </main>
  );
}
