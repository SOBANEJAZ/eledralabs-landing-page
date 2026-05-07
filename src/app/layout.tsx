import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

import { VerticalLines } from "@/components/ui/vertical-lines";

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
        className="relative bg-[#EEECE8] text-on-background min-h-screen font-body-md selection:bg-primary-container selection:text-on-primary-container antialiased"
      >
        <VerticalLines
          className="fixed z-[1]"
          innerClassName="mx-auto h-full w-full max-w-7xl px-6 md:px-12"
        />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
