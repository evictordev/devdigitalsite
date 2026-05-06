"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "CTO, FinTrack",
    avatar: "LF",
    rating: 5,
    text: "A Dev Digital entregou nossa plataforma financeira em tempo recorde. A qualidade do código e a atenção aos detalhes de segurança foram impressionantes. Recomendo sem hesitar.",
    accent: "accent",
  },
  {
    name: "Mariana Costa",
    role: "CEO, Lojix",
    avatar: "MC",
    rating: 5,
    text: "Automatizaram todo nosso processo de gestão de estoque. O que levava 4 horas por dia hoje é feito em 10 minutos. O ROI foi sentido no primeiro mês.",
    accent: "teal",
  },
  {
    name: "Rafael Matos",
    role: "Diretor de Produto, Saúde+",
    avatar: "RM",
    rating: 5,
    text: "Desenvolveram nossa API de telemedicina com uma arquitetura que suporta picos de 50 mil usuários simultâneos. Zero downtime em 18 meses de operação.",
    accent: "accent",
  },
];

const accentMap: Record<string, { border: string; bg: string; avatar: string }> = {
  accent: {
    border: "border-accent/20",
    bg: "bg-accent/5",
    avatar: "bg-accent/20 text-accent",
  },
  teal: {
    border: "border-teal/20",
    bg: "bg-teal/5",
    avatar: "bg-teal/20 text-teal",
  },
};

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".proof-header",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            scrollTrigger: { trigger: ".proof-header", start: "top 85%" },
          }
        );

        gsap.fromTo(
          ".proof-card",
          { opacity: 0, y: 50, rotateX: 5 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: ".proof-cards", start: "top 80%" },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="resultados" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-soft/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="proof-header text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            Resultados reais
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-silver mb-6">
            O que nossos clientes{" "}
            <span className="gradient-text-accent">dizem</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="proof-cards grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => {
            const colors = accentMap[t.accent];
            return (
              <div
                key={t.name}
                className={`proof-card card-glow rounded-2xl p-7 border ${colors.border} ${colors.bg} relative overflow-hidden`}
              >
                <Quote
                  size={40}
                  className="absolute top-4 right-4 text-white/5 fill-white/5"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-sm text-silver-dim font-body leading-relaxed mb-6 relative">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${colors.avatar} flex items-center justify-center text-xs font-bold font-mono`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-body font-medium text-silver">{t.name}</div>
                    <div className="text-xs text-silver-dim">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
