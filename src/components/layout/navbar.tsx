"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 100);

      if (currentScroll > lastScroll && currentScroll > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`nav-pill fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 py-3 flex items-center justify-between z-50 bg-stone-50/80 backdrop-blur-md rounded-full border-[0.5px] border-neutral-900/10 shadow-sm transition-all duration-300 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${scrolled ? "shadow-md" : ""}`}
    >
      <Link href="/" className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter text-neutral-900">
          Eledralabs
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link font-sans text-sm font-medium tracking-tight transition-colors ${
              pathname === link.href
                ? "text-neutral-900 font-semibold active"
                : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="btn-primary bg-primary text-on-primary font-label-sm px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
}
