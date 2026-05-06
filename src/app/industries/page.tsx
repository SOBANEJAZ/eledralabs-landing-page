import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MaterialIcon } from "@/components/ui/material-icon";
import Link from "next/link";

const industries = [
  {
    icon: "monitor_heart",
    title: "Healthcare & Wellness",
    subtitle: "Dental Clinics & Medical Spas",
    features: [
      "Patient intake automation",
      "24/7 intelligent scheduling",
      "HIPAA-compliant chatbots",
    ],
    span: "md:col-span-8",
  },
  {
    icon: "home_repair_service",
    title: "Home Services",
    subtitle: "HVAC, Plumbing & Electrical",
    features: [
      "AI Voice Agent for 24/7 booking",
      "AI Booking & Dispatch routing",
    ],
    span: "md:col-span-4",
  },
  {
    icon: "real_estate_agent",
    title: "Real Estate",
    subtitle: "Streamline property inquiries and client acquisition.",
    steps: [
      { num: "01", text: "Lead qualification flows" },
      { num: "02", text: "Automated viewing scheduling" },
      { num: "03", text: "Property info chatbots" },
    ],
    span: "md:col-span-12",
  },
  {
    icon: "gavel",
    title: "Legal Services",
    subtitle: "Law Firms & Consultancies",
    features: [
      "Client intake automation",
      "Document preparation workflows",
    ],
    span: "md:col-span-6",
  },
  {
    icon: "shopping_cart",
    title: "E-commerce",
    subtitle: "Online Retail & D2C Brands",
    features: [
      "AI product recommendations",
      "Order tracking automation",
    ],
    span: "md:col-span-6",
  },
];

export default function IndustriesPage() {
  return (
    <main className="flex-grow pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col gap-24 relative">

      {/* Header Section */}
      <ScrollReveal>
        <header className="flex flex-col gap-6 max-w-3xl relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary pulse-dot" />
            <span className="font-label-sm text-secondary uppercase tracking-widest">
              Industry Solutions
            </span>
          </div>
          <h1 className="font-h1 text-primary">
            Automation engineered for specific workflows.
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">
            Discover how Eledralabs transforms operations across highly
            specialized industries with tailored AI infrastructure.
          </p>
        </header>
      </ScrollReveal>

      {/* Solutions Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {/* Healthcare & Wellness — Full Width */}
        <ScrollReveal className="md:col-span-12">
          <div className="card card-glow flex flex-col md:flex-row gap-8 p-8 md:p-12 bg-surface-container-lowest rounded-lg border-[0.5px] border-[#11111114] group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container-high rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="flex-1 flex flex-col gap-8 relative z-10">
              <div className="icon-circle-bounce w-12 h-12 flex items-center justify-center rounded-full bg-surface-container border-[0.5px] border-[#11111114]">
                <MaterialIcon
                  name="monitor_heart"
                  className="text-primary"
                />
              </div>
              <div>
                <h2 className="font-h2 text-primary mb-4">
                  Healthcare & Wellness
                </h2>
                <p className="font-body-lg text-on-surface-variant mb-6 max-w-xl">
                  Dental Clinics & Medical Spas
                </p>
                <ul className="flex flex-col gap-3 font-body-md text-on-surface-variant">
                  <li className="list-item-check flex items-center gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm"
                    />
                    Patient intake automation
                  </li>
                  <li className="list-item-check flex items-center gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm"
                    />
                    24/7 intelligent scheduling
                  </li>
                  <li className="list-item-check flex items-center gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm"
                    />
                    HIPAA-compliant chatbots
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group/link mt-4 w-fit"
              >
                Learn more
                <MaterialIcon
                  name="arrow_forward"
                  size="text-sm"
                  className="arrow-right"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Home Services */}
        <ScrollReveal className="md:col-span-6 h-full">
          <div className="card card-glow flex flex-col justify-between p-8 bg-surface-container-lowest rounded-lg border-[0.5px] border-[#11111114] group overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 relative z-10 h-full">
              <div className="icon-circle-bounce w-12 h-12 flex items-center justify-center rounded-full bg-surface-container border-[0.5px] border-[#11111114]">
                <MaterialIcon
                  name="home_repair_service"
                  className="text-primary"
                />
              </div>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="font-h2 text-primary mb-2">Home Services</h2>
                  <p className="font-body-md text-on-surface-variant mb-6">
                    HVAC, Plumbing & Electrical
                  </p>
                  <ul className="flex flex-col gap-3 font-body-md text-on-surface-variant">
                    <li className="list-item-check flex items-start gap-3">
                      <MaterialIcon
                        name="check"
                        className="text-secondary text-sm mt-1"
                      />
                      <span>AI Voice Agent for 24/7 booking</span>
                    </li>
                    <li className="list-item-check flex items-start gap-3">
                      <MaterialIcon
                        name="check"
                        className="text-secondary text-sm mt-1"
                      />
                      <span>AI Booking & Dispatch routing</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group/link mt-6 w-fit"
                >
                  Explore
                  <MaterialIcon
                    name="arrow_forward"
                    size="text-sm"
                    className="arrow-right"
                  />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Real Estate */}
        <ScrollReveal delay={100} className="md:col-span-6 h-full">
          <div className="card card-glow flex flex-col justify-between p-8 bg-surface-container-lowest rounded-lg border-[0.5px] border-[#11111114] group overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="icon-circle-bounce w-12 h-12 flex items-center justify-center rounded-full bg-surface-container border-[0.5px] border-[#11111114]">
                <MaterialIcon
                  name="real_estate_agent"
                  className="text-primary"
                />
              </div>
              <div>
                <h2 className="font-h2 text-primary mb-2">Real Estate</h2>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Streamline property inquiries and client acquisition.
                </p>
                <ul className="flex flex-col gap-3 font-body-md text-on-surface-variant">
                  <li className="list-item-check flex items-start gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm mt-1"
                    />
                    <span>Lead qualification flows</span>
                  </li>
                  <li className="list-item-check flex items-start gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm mt-1"
                    />
                    <span>Automated viewing scheduling</span>
                  </li>
                  <li className="list-item-check flex items-start gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm mt-1"
                    />
                    <span>Property info chatbots</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group/link mt-2 w-fit"
              >
                Get started
                <MaterialIcon
                  name="arrow_forward"
                  size="text-sm"
                  className="arrow-right"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Legal Services */}
        <ScrollReveal delay={100} className="md:col-span-6 h-full">
          <div className="card card-glow flex flex-col justify-between p-8 bg-surface-container-lowest rounded-lg border-[0.5px] border-[#11111114] group overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="icon-circle-bounce w-12 h-12 flex items-center justify-center rounded-full bg-surface-container border-[0.5px] border-[#11111114]">
                <MaterialIcon name="gavel" className="text-primary" />
              </div>
              <div>
                <h2 className="font-h2 text-primary mb-2">Legal Services</h2>
                <p className="font-body-md text-on-surface-variant mb-4">
                  Law Firms & Consultancies
                </p>
                <ul className="flex flex-col gap-3 font-body-md text-on-surface-variant">
                  <li className="list-item-check flex items-start gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm mt-1"
                    />
                    <span>Client intake automation</span>
                  </li>
                  <li className="list-item-check flex items-start gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm mt-1"
                    />
                    <span>Document preparation workflows</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group/link mt-6 w-fit"
            >
              Learn more
              <MaterialIcon
                name="arrow_forward"
                size="text-sm"
                className="arrow-right"
              />
            </Link>
          </div>
        </ScrollReveal>

        {/* E-commerce */}
        <ScrollReveal delay={200} className="md:col-span-6 h-full">
          <div className="card card-glow flex flex-col justify-between p-8 bg-surface-container-lowest rounded-lg border-[0.5px] border-[#11111114] group overflow-hidden relative h-full">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="icon-circle-bounce w-12 h-12 flex items-center justify-center rounded-full bg-surface-container border-[0.5px] border-[#11111114]">
                <MaterialIcon
                  name="shopping_cart"
                  className="text-primary"
                />
              </div>
              <div>
                <h2 className="font-h2 text-primary mb-2">E-commerce</h2>
                <p className="font-body-md text-on-surface-variant mb-4">
                  Online Retail & D2C Brands
                </p>
                <ul className="flex flex-col gap-3 font-body-md text-on-surface-variant">
                  <li className="list-item-check flex items-start gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm mt-1"
                    />
                    <span>AI product recommendations</span>
                  </li>
                  <li className="list-item-check flex items-start gap-3">
                    <MaterialIcon
                      name="check"
                      className="text-secondary text-sm mt-1"
                    />
                    <span>Order tracking automation</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-wide group/link mt-6 w-fit"
            >
              Learn more
              <MaterialIcon
                name="arrow_forward"
                size="text-sm"
                className="arrow-right"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
