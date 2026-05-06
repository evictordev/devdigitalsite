"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#processo", label: "Processo" },
    { href: "#resultados", label: "Resultados" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="relative w-9 h-9 flex items-center justify-center overflow-hidden
                    font-syne font-black text-[14px] text-navy tracking-tight"
        >
          <Image 
            src="/dd.svg" 
            alt="DEV DIGITAL" 
            fill
            className="object-contain cursor-pointer" 
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-silver-dim hover:text-silver transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contato"
            className="btn-shimmer text-sm font-body font-medium text-white px-5 py-2.5 rounded-full"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-silver-dim hover:text-silver transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4 bg-ink-soft/95 backdrop-blur-xl border-t border-white/5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-silver-dim hover:text-silver transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="block btn-shimmer text-sm font-medium text-white px-5 py-2.5 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </nav>
  );
}
