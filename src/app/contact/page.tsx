"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MaterialIcon } from "@/components/ui/material-icon";

const timeSlots = [
  "09:00 AM EST",
  "11:30 AM EST",
  "02:00 PM EST",
  "04:30 PM EST",
];

const calendarDays = [
  { day: 28, disabled: true },
  { day: 29, disabled: true },
  { day: 30, disabled: true },
  { day: 1, disabled: false },
  { day: 2, disabled: false },
  { day: 3, disabled: true },
  { day: 4, disabled: true },
  { day: 5, disabled: false },
  { day: 6, disabled: false },
  { day: 7, disabled: false },
  { day: 8, disabled: false },
  { day: 9, disabled: false },
  { day: 10, disabled: true },
  { day: 11, disabled: true },
  { day: 12, disabled: false },
  { day: 13, disabled: false },
  { day: 14, disabled: false },
  { day: 15, disabled: false },
  { day: 16, disabled: false },
  { day: 17, disabled: true },
  { day: 18, disabled: true },
  { day: 19, disabled: false },
  { day: 20, disabled: false },
  { day: 21, disabled: false },
  { day: 22, disabled: false },
  { day: 23, disabled: false },
  { day: 24, disabled: true },
  { day: 25, disabled: true },
  { day: 26, disabled: false },
  { day: 27, disabled: false },
  { day: 28, disabled: false },
  { day: 29, disabled: false },
  { day: 30, disabled: false },
  { day: 31, disabled: true },
];

export default function ContactPage() {
  const [selectedDay, setSelectedDay] = useState(9);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("submitted");
      setTimeout(() => setFormState("idle"), 2000);
    }, 1500);
  };

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
      {/* Header Section */}
      <ScrollReveal className="col-span-1 lg:col-span-12 mb-12 text-center max-w-3xl mx-auto">
        <h1 className="font-h1 text-primary mb-6">Initiate Consultation</h1>
        <p className="font-body-lg text-on-surface-variant">
          Connect with our architecture specialists to design your automation
          workflow. Select a channel below or schedule a deep-dive strategy
          session.
        </p>
      </ScrollReveal>

      {/* Left Column: Form & Direct Channels */}
      <div className="col-span-1 lg:col-span-7 flex flex-col gap-8">
        {/* Direct Channels Card */}
        <ScrollReveal>
          <div className="card bg-surface-container-lowest rounded-lg border-[0.5px] border-outline-variant p-8 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-outline flex-1 flex items-center justify-center gap-3 py-4 px-6 border-[0.5px] border-outline-variant rounded-full text-primary group">
                <MaterialIcon
                  name="forum"
                  className="text-[20px] text-[#25D366] group-hover:scale-110 transition-transform"
                />
                <span className="font-label-sm text-label-sm">
                  WhatsApp Priority
                </span>
              </button>
              <button className="btn-outline flex-1 flex items-center justify-center gap-3 py-4 px-6 border-[0.5px] border-outline-variant rounded-full text-primary group">
                <MaterialIcon
                  name="call"
                  className="text-[20px] group-hover:scale-110 transition-transform"
                />
                <span className="font-label-sm text-label-sm">Direct Dial</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Form Card */}
        <ScrollReveal delay={100}>
          <div className="card bg-surface-container-lowest rounded-lg border-[0.5px] border-outline-variant p-8">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-[0.5px] border-outline-variant">
              <div className="w-2 h-2 rounded-full bg-secondary pulse-dot" />
              <h2 className="font-h3 text-primary">Intake Protocol</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block">
                    Full Name
                  </label>
                  <input
                    className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-primary placeholder:text-outline"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block">
                    Phone Number
                  </label>
                  <input
                    className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-primary placeholder:text-outline"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block">
                    Company Name
                  </label>
                  <input
                    className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-primary placeholder:text-outline"
                    placeholder="Organization"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant block">
                    Industry Sector
                  </label>
                  <select className="input-field w-full bg-transparent border-0 border-b-[0.5px] border-outline-variant focus:border-secondary focus:ring-0 px-0 py-2 font-body-md text-primary appearance-none cursor-pointer">
                    <option className="text-outline" disabled selected value="">
                      Select classification...
                    </option>
                    <option value="tech">Technology & Software</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare & Biotech</option>
                    <option value="manufacturing">
                      Advanced Manufacturing
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <label className="font-label-sm text-label-sm text-on-surface-variant block">
                  Current Growth Bottleneck
                </label>
                <textarea
                  className="input-field w-full bg-surface-container-low border-[0.5px] border-outline-variant rounded-md focus:border-secondary focus:ring-0 p-4 font-body-md text-primary placeholder:text-outline resize-none mt-2 transition-all focus:bg-surface-container-lowest"
                  placeholder="Describe the structural limitations you are currently facing..."
                  rows={4}
                />
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-primary w-full bg-primary text-on-primary font-label-sm text-label-sm py-4 rounded-full hover:bg-surface-tint transition-colors flex items-center justify-center gap-2 group disabled:opacity-70"
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

      {/* Right Column: Scheduling */}
      <ScrollReveal className="col-span-1 lg:col-span-5" delay={200}>
        <div className="bg-[#111111] rounded-lg border-[0.5px] border-white/10 p-8 h-full flex flex-col text-white card">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full font-label-sm text-label-sm text-white/80 border-[0.5px] border-white/10 mb-4 hover:bg-white/15 transition-colors cursor-default">
              Recommended Action
            </span>
            <h3 className="font-h2 text-white mb-2">
              AI Strategy Consultation
            </h3>
            <p className="font-body-md text-white/60">
              Bypass the intake queue. Book a 45-minute technical review directly
              with our lead automation architects.
            </p>
          </div>

          {/* Calendar Interface */}
          <div className="flex-grow bg-[#1a1a1a] rounded-md border-[0.5px] border-white/10 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6 pb-4 border-b-[0.5px] border-white/10">
              <span className="font-label-sm text-label-sm font-semibold text-white/80 uppercase tracking-widest">
                Select Date
              </span>
              <div className="flex gap-2">
                <button className="p-1.5 rounded hover:bg-white/10 transition-colors active:scale-95">
                  <MaterialIcon
                    name="chevron_left"
                    className="text-[20px] text-white/60"
                  />
                </button>
                <span className="font-body-md px-2">October 2024</span>
                <button className="p-1.5 rounded hover:bg-white/10 transition-colors active:scale-95">
                  <MaterialIcon
                    name="chevron_right"
                    className="text-[20px] text-white/60"
                  />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-6 text-center">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <span key={d} className="font-label-sm text-label-sm text-white/40 py-2">
                  {d}
                </span>
              ))}
              {calendarDays.map(({ day, disabled }) => (
                <span
                  key={day}
                  onClick={() => !disabled && setSelectedDay(day)}
                  className={`calendar-day p-2 ${
                    disabled
                      ? "disabled text-white/20"
                      : selectedDay === day
                      ? "selected"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {day}
                </span>
              ))}
            </div>

            <div className="mt-auto space-y-3">
              <span className="font-label-sm text-label-sm font-semibold text-white/80 uppercase tracking-widest block mb-4">
                Available Slots (Oct {selectedDay})
              </span>
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`time-slot w-full py-3 px-4 border-[0.5px] rounded flex justify-between items-center ${
                    selectedSlot === slot
                      ? "border-white/50 bg-white/10 text-white"
                      : "border-white/20 text-white/80"
                  }`}
                  type="button"
                >
                  <span className="font-body-md">{slot}</span>
                  <MaterialIcon name="schedule" size="text-[16px]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
