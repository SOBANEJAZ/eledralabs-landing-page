"use client";

import Link from "next/link";
import Image from "next/image";
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
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 60);
      setCondensed(currentScroll > 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`nav-pill fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] flex items-center justify-between z-50 bg-stone-50/80 backdrop-blur-md rounded-full border-[0.5px] border-neutral-900/10 shadow-sm transition-all duration-700 will-change-transform ${
        condensed ? "max-w-4xl py-3 px-6" : "max-w-7xl py-4 px-8"
      } ${scrolled ? "shadow-md" : ""}`}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-mark.png"
          alt="Eledralabs"
          width={44}
          height={44}
          sizes="44px"
          priority
          className="rounded-2xl ring-1 ring-neutral-900/10 shadow-sm bg-neutral-100 object-contain p-1"
        />
        <span
          className={`font-bold tracking-tighter text-neutral-900 transition-all duration-700 ${
            condensed ? "text-xl" : "text-2xl"
          }`}
        >
          Eledralabs
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 transition-all duration-700">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link font-sans text-xl font-medium tracking-tight transition-colors ${
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
        <Link
          href="/contact"
          className={`btn-primary bg-primary text-on-primary font-sans text-base font-medium rounded-full hover:bg-opacity-90 transition-all duration-700 active:scale-95 ${
            condensed ? "px-6 py-3" : "px-7 py-3.5"
          }`}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
