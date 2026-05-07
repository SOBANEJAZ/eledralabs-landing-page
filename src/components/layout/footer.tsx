"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VerticalLines } from "@/components/ui/vertical-lines";

const footerLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full max-w-7xl mx-auto bg-[#EEECE8] border-t-[0.5px] border-neutral-900/10 mt-auto z-10 relative isolate overflow-hidden">
      <VerticalLines className="absolute z-0" />
      <div className="relative z-10 grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="text-base font-bold text-neutral-900">Eledralabs</span>
          <span className="font-sans text-xs tracking-wide uppercase text-neutral-500 opacity-80">
            &copy; 2024 Eledralabs. Architectural automation.
          </span>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end font-sans text-xs tracking-wide uppercase">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`footer-link transition-colors opacity-80 hover:opacity-100 ${
                pathname === link.href
                  ? "text-neutral-900 underline"
                  : "text-neutral-400 hover:text-neutral-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
