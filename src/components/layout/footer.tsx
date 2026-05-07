"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
      <div className="relative z-10 grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="flex items-center gap-3 text-base font-bold text-neutral-900">
            <Image
              src="/logo-mark.png"
              alt="Eledralabs"
              width={26}
              height={26}
              sizes="26px"
              className="rounded-lg ring-1 ring-neutral-900/10 shadow-sm bg-neutral-100 object-contain p-0.5"
            />
            Eledralabs
          </span>
          <span className="font-sans text-xs tracking-wide uppercase text-neutral-500 opacity-80">
            &copy; 2026 Eledralabs. Architectural automation.
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
