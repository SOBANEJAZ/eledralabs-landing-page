import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MaterialIcon } from "@/components/ui/material-icon";
import { AnimatedHero } from "@/components/ui/animated-hero";

export default function Home() {
  return (
    <main className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-24 relative">

      {/* Hero Section with Animated Canvas */}
      <ScrollReveal>
        <div className="relative z-10">
          <AnimatedHero />
        </div>
      </ScrollReveal>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <ScrollReveal delay={0}>
          <Link href="/solutions" className="card card-glow flex flex-col p-8 rounded-lg border-[0.5px] border-[#11111114] group overflow-hidden">
            <div className="icon-circle-bounce w-12 h-12 flex items-center justify-center rounded-full border-[0.5px] border-[#11111114] mb-6">
              <MaterialIcon name="widgets" className="text-primary" />
            </div>
            <h3 className="font-h3 text-primary mb-2">Web Solutions</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              High-speed, SEO-ready architectures paired with uncompromising aesthetic interfaces.
            </p>
            <span className="inline-flex items-center gap-2 font-label-sm text-primary uppercase tracking-wide mt-auto">
              Explore
              <MaterialIcon name="arrow_forward" size="text-sm" className="arrow-right" />
            </span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Link href="/solutions" className="card card-glow flex flex-col p-8 rounded-lg border-[0.5px] border-[#11111114] group overflow-hidden">
            <div className="icon-circle-bounce w-12 h-12 flex items-center justify-center rounded-full border-[0.5px] border-[#11111114] mb-6">
              <MaterialIcon name="smart_toy" className="text-primary" />
            </div>
            <h3 className="font-h3 text-primary mb-2">AI & Automation</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              Intelligent systems designed to capture leads 24/7 and drastically reduce human support volume.
            </p>
            <span className="inline-flex items-center gap-2 font-label-sm text-primary uppercase tracking-wide mt-auto">
              Explore
              <MaterialIcon name="arrow_forward" size="text-sm" className="arrow-right" />
            </span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Link href="/industries" className="card card-glow flex flex-col p-8 rounded-lg border-[0.5px] border-[#11111114] group overflow-hidden">
            <div className="icon-circle-bounce w-12 h-12 flex items-center justify-center rounded-full border-[0.5px] border-[#11111114] mb-6">
              <MaterialIcon name="domain" className="text-primary" />
            </div>
            <h3 className="font-h3 text-primary mb-2">Industry Solutions</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              Tailored automation for specialized industries including healthcare, real estate, and more.
            </p>
            <span className="inline-flex items-center gap-2 font-label-sm text-primary uppercase tracking-wide mt-auto">
              Explore
              <MaterialIcon name="arrow_forward" size="text-sm" className="arrow-right" />
            </span>
          </Link>
        </ScrollReveal>
      </div>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="relative z-10 bg-[#111111] rounded-lg border-[0.5px] border-white/10 p-12 text-center text-white">
          <h2 className="font-h2 text-white mb-4">Ready to automate?</h2>
          <p className="font-body-lg text-white/60 max-w-xl mx-auto mb-8">
            Book a 45-minute technical review directly with our lead automation architects.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 bg-white text-primary font-label-sm px-8 py-4 rounded-full hover:bg-white/90 transition-colors active:scale-95"
          >
            Schedule Consultation
            <MaterialIcon name="arrow_forward" size="text-sm" className="arrow-right" />
          </Link>
        </section>
      </ScrollReveal>
    </main>
  );
}
