"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MaterialIcon } from "@/components/ui/material-icon";

const industries = [
  { value: "healthcare", label: "Healthcare & Wellness" },
  { value: "home-services", label: "Home Services" },
  { value: "real-estate", label: "Real Estate" },
  { value: "legal", label: "Legal Services" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "tech", label: "Technology & Software" },
  { value: "finance", label: "Financial Services" },
  { value: "manufacturing", label: "Advanced Manufacturing" },
  { value: "education", label: "Education & EdTech" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "submitted">("idle");
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("submitted");
      setTimeout(() => setFormState("idle"), 2000);
    }, 1500);
  };

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 pt-28 pb-12">
      {/* Header Section */}
      <ScrollReveal className="col-span-1 lg:col-span-12 mb-12 text-center max-w-3xl mx-auto">
        <h1 className="font-h1 text-primary mb-6">Initiate Consultation</h1>
        <p className="font-body-lg text-on-surface-variant">
          Connect with our architecture specialists to design your automation
          workflow. Select a channel below or fill out the intake form.
        </p>
      </ScrollReveal>

      {/* Form */}
      <div className="col-span-1 lg:col-span-12 flex flex-col gap-8 max-w-3xl mx-auto w-full">
        <ScrollReveal>
          <div className="card bg-[#111111] rounded-lg border-[0.5px] border-white/10 p-8">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-[0.5px] border-white/10">
              <div className="w-2 h-2 rounded-full bg-secondary pulse-dot" />
              <h2 className="font-h3 text-white">Intake Protocol</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-white/60 block">
                    Full Name
                  </label>
                  <input
                    className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-white/20 focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-white placeholder:text-white/30"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-white/60 block">
                    Email Address
                  </label>
                  <input
                    className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-white/20 focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-white placeholder:text-white/30"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-white/60 block">
                    Phone Number
                  </label>
                  <input
                    className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-white/20 focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-white placeholder:text-white/30"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-white/60 block">
                    Company Name
                  </label>
                  <input
                    className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-white/20 focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-white placeholder:text-white/30"
                    placeholder="Acme Inc."
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-white/60 block">
                    Website URL
                  </label>
                  <input
                    className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-white/20 focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-white placeholder:text-white/30"
                    placeholder="https://yoursite.com"
                    type="url"
                  />
                  <span className="text-white/30 font-label-sm text-[11px]">Optional</span>
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-white/60 block">
                    Industry Sector
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-white/20 focus:border-secondary px-0 py-2 font-body-md text-left flex items-center justify-between cursor-pointer group"
                    >
                      <span className={selectedIndustry ? "text-white" : "text-white/30"}>
                        {selectedIndustry
                          ? industries.find((i) => i.value === selectedIndustry)?.label
                          : "Select your industry..."}
                      </span>
                      <MaterialIcon
                        name="expand_more"
                        className={`text-[20px] text-white/40 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border-[0.5px] border-white/10 rounded-lg overflow-hidden shadow-xl shadow-black/40 z-50 dropdown-enter max-h-48 overflow-y-auto">
                        {industries.map((industry) => (
                          <button
                            key={industry.value}
                            type="button"
                            onClick={() => {
                              setSelectedIndustry(industry.value);
                              setDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 font-body-md transition-colors flex items-center justify-between ${
                              selectedIndustry === industry.value
                                ? "bg-white/10 text-white"
                                : "text-white/70 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <span>{industry.label}</span>
                            {selectedIndustry === industry.value && (
                              <MaterialIcon name="check" className="text-[18px] text-secondary" />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <label className="font-label-sm text-label-sm text-white/60 block">
                  Title of Message
                </label>
                <input
                  className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-white/20 focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-white placeholder:text-white/30"
                  placeholder="e.g. workflow automation, redesign my landing page, help me convert more leads with AI"
                  type="text"
                />
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-primary w-full bg-white text-black font-label-sm text-label-sm py-4 rounded-full hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {formState === "idle" && (
                    <>
                      <span>Submit Architecture Request</span>
                      <MaterialIcon
                        name="arrow_forward"
                        size="text-[18px]"
                        className="arrow-right"
                      />
                    </>
                  )}
                  {formState === "submitting" && (
                    <span className="animate-pulse">Processing...</span>
                  )}
                  {formState === "submitted" && (
                    <span>Submitted ✓</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>

    </main>
  );
}
