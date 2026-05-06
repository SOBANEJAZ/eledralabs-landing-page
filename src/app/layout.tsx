import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eledralabs - Architectural Automation",
  description:
    "Precision-engineered Web and AI workflows that reduce operational drag, optimize aesthetics, and automate your most critical systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} light`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#EEECE8] text-on-background min-h-screen flex flex-col font-body-md selection:bg-primary-container selection:text-on-primary-container antialiased"
      >
        {/* Global 12-column grid background */}
        <div className="fixed inset-0 pointer-events-none z-0 grid grid-cols-12 gap-6 px-6 md:px-12 max-w-7xl mx-auto w-full opacity-[0.03]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="col-span-1 border-r border-[#111]" />
          ))}
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
