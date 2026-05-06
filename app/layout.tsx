import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Dev Digital — Software de Alta Performance",
  description:
    "Desenvolvemos soluções digitais sob medida: sistemas web, automações, APIs e integrações para empresas que não aceitam mediocridade.",
  keywords: ["desenvolvimento de software", "web", "APIs", "automação", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${syne.variable} ${dmSans.variable} ${dmMono.variable} font-body bg-ink text-silver antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
