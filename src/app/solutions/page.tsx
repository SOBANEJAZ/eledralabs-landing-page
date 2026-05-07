import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MaterialIcon } from "@/components/ui/material-icon";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="max-w-[1200px] mx-auto min-h-screen flex flex-col pt-32 relative isolate overflow-hidden">
      {/* Hero Section */}
      <section className="border-b-[0.5px] border-outline-variant pt-24 pb-32 px-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <ScrollReveal className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-[0.5px] border-outline-variant bg-surface-container-low mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary pulse-dot" />
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">
              Architecture Suite
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className="relative z-10">
          <h1 className="font-h1 text-primary max-w-4xl mb-6 tracking-tight">
            Engineered for scale. <br />{" "}
            <span className="text-outline">Designed for clarity.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200} className="relative z-10">
          <p className="font-body-lg text-on-surface-variant max-w-2xl">
            We build precision-engineered Web and AI workflows that reduce
            operational drag, optimize aesthetics, and automate your most critical
            systems.
          </p>
        </ScrollReveal>
      </section>

      {/* Section 1: Web Solutions */}
      <section className="border-b-[0.5px] border-outline-variant flex flex-col lg:flex-row relative">
        {/* Section Header (Left Col) */}
        <div className="lg:w-1/3 p-8 lg:border-r-[0.5px] border-outline-variant bg-surface-container-lowest border-b-[0.5px] lg:border-b-0 flex flex-col justify-between relative z-10">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MaterialIcon
                  name="widgets"
                  className="text-secondary text-sm"
                  filled
                />
                <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">
                  Phase 01
                </span>
              </div>
              <h2 className="font-h2 text-primary mb-4">Web Solutions</h2>
              <p className="font-body-md text-on-surface-variant">
                High-speed, SEO-ready architectures paired with uncompromising
                aesthetic interfaces.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="hidden lg:flex items-center justify-center h-32 w-full border-[0.5px] border-outline-variant rounded-lg bg-surface-container-low mt-12 relative overflow-hidden group cursor-pointer hover:border-secondary/30 transition-colors">
              <MaterialIcon
                name="view_quilt"
                className="text-outline-variant text-4xl group-hover:text-secondary transition-colors group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Bento Grid Content (Right Col) */}
        <div className="lg:w-2/3 p-8 bg-surface-container-low grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

          {/* Card 1 (Spans full width) */}
          <ScrollReveal>
            <div className="card card-interactive card-glow md:col-span-2 border-[0.5px] border-outline-variant rounded-xl p-8 bg-surface-container-lowest shadow-sm relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="icon-circle w-12 h-12 rounded-full border-[0.5px] border-outline-variant flex items-center justify-center bg-background shrink-0">
                <MaterialIcon name="developer_mode" className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-h3 text-primary mb-3">
                  Custom Website Development
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Bespoke digital platforms engineered from the ground up. We
                  utilize modern frameworks to ensure robust security, infinite
                  scalability, and semantic structures that search engines
                  prioritize.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group"
                >
                  Explore Architecture
                  <MaterialIcon
                    name="arrow_forward"
                    size="text-sm"
                    className="arrow-right"
                  />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={100}>
            <div className="card card-glow border-[0.5px] border-outline-variant rounded-xl p-6 bg-surface-container-lowest shadow-sm relative z-10">
              <div className="icon-circle w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mb-6">
                <MaterialIcon
                  name="palette"
                  className="text-secondary text-sm"
                />
              </div>
              <h3 className="font-h3 text-primary mb-2">UI/UX Design</h3>
              <p className="font-body-md text-on-surface-variant">
                Minimalist, cognitive-load-reducing interfaces that guide users
                naturally toward conversion endpoints.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay={200}>
            <div className="card card-glow border-[0.5px] border-outline-variant rounded-xl p-6 bg-surface-container-lowest shadow-sm relative z-10">
              <div className="icon-circle w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mb-6">
                <MaterialIcon
                  name="speed"
                  className="text-secondary text-sm"
                />
              </div>
              <h3 className="font-h3 text-primary mb-2">
                Performance Optimization
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Sub-second load times achieved through edge caching, asset
                minification, and optimized server-side rendering.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: AI & Automation */}
      <section className="flex flex-col lg:flex-row relative">
        {/* Section Header (Left Col) */}
        <div className="lg:w-1/3 p-8 lg:border-r-[0.5px] border-outline-variant bg-surface-container-low border-b-[0.5px] lg:border-b-0 flex flex-col justify-between relative z-10">
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MaterialIcon
                  name="smart_toy"
                  className="text-secondary text-sm"
                  filled
                />
                <span className="font-label-sm text-label-sm uppercase text-secondary tracking-widest">
                  Phase 02
                </span>
              </div>
              <h2 className="font-h2 text-primary mb-4">AI & Automation</h2>
              <p className="font-body-md text-on-surface-variant">
                Intelligent systems designed to capture leads 24/7 and
                drastically reduce human support volume.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bento Grid Content (Right Col) */}
        <div className="lg:w-2/3 p-8 bg-background grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Card 1: AI Voice Agents (Spans full) */}
          <ScrollReveal>
            <div className="card card-interactive md:col-span-2 border-[0.5px] border-outline-variant rounded-xl p-1 bg-surface-container-lowest shadow-sm flex flex-col md:flex-row overflow-hidden">
              <div className="p-8 flex-1 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed w-fit mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary pulse-dot" />
                  <span className="font-label-sm text-label-sm text-[11px] uppercase">
                    Active 24/7
                  </span>
                </div>
                <h3 className="font-h3 text-primary mb-3">AI Voice Agents</h3>
                <p className="font-body-md text-on-surface-variant">
                  Deploy conversational voice agents capable of handling inbound
                  calls, routing inquiries, and executing seamless appointment
                  booking without human intervention.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group mt-6 w-fit"
                >
                  Deploy Now
                  <MaterialIcon
                    name="arrow_forward"
                    size="text-sm"
                    className="arrow-right"
                  />
                </Link>
              </div>
              <div className="w-full md:w-2/5 min-h-[200px] bg-surface-container border-t-[0.5px] md:border-t-0 md:border-l-[0.5px] border-outline-variant flex items-center justify-center relative overflow-hidden group">
                {/* Abstract soundwave visual */}
                <div className="flex items-end gap-1.5 h-16 opacity-40 group-hover:opacity-60 transition-opacity">
                  <div className="w-2 bg-outline-variant h-4 rounded-full transition-all duration-300 group-hover:h-6" />
                  <div className="w-2 bg-outline-variant h-8 rounded-full transition-all duration-300 group-hover:h-12" />
                  <div className="w-2 bg-secondary h-12 rounded-full transition-all duration-300 group-hover:h-16" />
                  <div className="w-2 bg-outline-variant h-6 rounded-full transition-all duration-300 group-hover:h-10" />
                  <div className="w-2 bg-outline-variant h-3 rounded-full transition-all duration-300 group-hover:h-5" />
                  <div className="w-2 bg-outline-variant h-5 rounded-full transition-all duration-300 group-hover:h-8" />
                  <div className="w-2 bg-secondary h-10 rounded-full transition-all duration-300 group-hover:h-14" />
                  <div className="w-2 bg-outline-variant h-4 rounded-full transition-all duration-300 group-hover:h-7" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={100}>
            <div className="card card-glow border-[0.5px] border-outline-variant rounded-xl p-8 bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <MaterialIcon
                  name="chat"
                  className="text-primary text-3xl"
                />
                <span className="font-label-sm text-label-sm text-outline-variant uppercase">
                  LLM Core
                </span>
              </div>
              <h3 className="font-h3 text-primary mb-2 mt-auto">
                Custom LLM Chatbots
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Trained on your proprietary data to handle complex FAQs and
                technical support instantly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group mt-6 w-fit"
              >
                Configure
                <MaterialIcon
                  name="arrow_forward"
                  size="text-sm"
                  className="arrow-right"
                />
              </Link>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay={200}>
            <div className="card card-glow border-[0.5px] border-outline-variant rounded-xl p-8 bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <MaterialIcon
                  name="sync_alt"
                  className="text-primary text-3xl"
                />
                <span className="font-label-sm text-label-sm text-outline-variant uppercase">
                  Workflow
                </span>
              </div>
              <h3 className="font-h3 text-primary mb-2 mt-auto">
                IT Service Automations
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Automate ticket routing, password resets, and routine diagnostics
                to free your engineering team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group mt-6 w-fit"
              >
                Automate
                <MaterialIcon
                  name="arrow_forward"
                  size="text-sm"
                  className="arrow-right"
                />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
