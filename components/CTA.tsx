"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".cta-content",
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".cta-content", start: "top 85%" },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="contato" className="py-32 relative overflow-hidden">
      {/* Bg orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="cta-content">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-8 border border-accent/20 rounded-full px-4 py-2 bg-accent/5">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Vagas abertas para Q2 2025
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-black text-silver mb-6 leading-tight">
            Pronto para transformar{" "}
            <span className="gradient-text-accent">sua ideia em realidade?</span>
          </h2>

          <p className="text-silver-dim font-body text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa gratuita de 30 minutos. Vamos entender seu desafio e
            apresentar como podemos resolvê-lo com tecnologia de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="mailto:contato@devdigital.com.br"
              className="btn-shimmer inline-flex items-center justify-center gap-2 text-white font-body font-medium px-8 py-4 rounded-full text-sm"
            >
              <MessageSquare size={16} />
              Solicitar Orçamento
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 text-silver-dim hover:text-silver font-body font-medium px-8 py-4 rounded-full text-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Calendar size={16} />
              Agendar Reunião
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-8 text-xs text-silver-dim font-body">
            {[
              "✓ Reunião 100% gratuita",
              "✓ Proposta em 48h",
              "✓ Sem compromisso",
              "✓ NDA disponível",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
