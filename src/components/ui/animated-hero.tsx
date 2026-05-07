import Link from "next/link";

export function AnimatedHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center px-6 text-center md:min-h-[70vh]">
      <div className="max-w-4xl">
        <h1
          className="font-bold text-[#111] leading-none mb-2"
          style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            letterSpacing: "-2px",
          }}
        >
          Eledralabs
        </h1>
        <p
          className="uppercase mb-6"
          style={{
            fontSize: "clamp(8px, 1.1vw, 11px)",
            letterSpacing: "0.12em",
            color: "#666",
          }}
        >
          Precision automation for your stack
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-[#111] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#222]"
        >
          Get started for free ›
        </Link>
      </div>
    </section>
  );
}
