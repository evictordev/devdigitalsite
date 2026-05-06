"use client";

import { useEffect, useRef } from "react";
import { Zap, Shield, Layers, Globe } from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Alta Performance",
    desc: "Sistemas otimizados para responder em milissegundos, mesmo sob alto tráfego.",
    color: "text-accent",
    bg: "bg-accent/5",
    border: "border-accent/20",
  },
  {
    icon: Shield,
    title: "Segurança Robusta",
    desc: "Autenticação avançada, criptografia ponta a ponta e conformidade com LGPD.",
    color: "text-teal",
    bg: "bg-teal/5",
    border: "border-teal/20",
  },
  {
    icon: Layers,
    title: "Escalabilidade",
    desc: "Arquitetura cloud-native que cresce junto com o seu negócio sem fricção.",
    color: "text-accent",
    bg: "bg-accent/5",
    border: "border-accent/20",
  },
  {
    icon: Globe,
    title: "Presença Global",
    desc: "Deploy multi-região com CDN global para latências mínimas em qualquer lugar.",
    color: "text-teal",
    bg: "bg-teal/5",
    border: "border-teal/20",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".about-tag",
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            scrollTrigger: { trigger: ".about-tag", start: "top 85%" },
          }
        );

        gsap.fromTo(
          ".about-headline",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: ".about-headline", start: "top 85%" },
          }
        );

        gsap.fromTo(
          ".about-text",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: { trigger: ".about-text", start: "top 85%" },
          }
        );

        gsap.fromTo(
          ".diff-card",
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: ".diff-card", start: "top 85%" },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left */}
          <div>
            <div className="about-tag inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-6">
              <span className="w-8 h-px bg-accent" />
              Sobre a Dev Digital
            </div>
            <h2 className="about-headline font-display text-4xl md:text-5xl font-black leading-tight text-silver mb-8">
              Engenharia de software{" "}
              <span className="gradient-text-accent">sem concessões</span>.
            </h2>
            <p className="about-text font-body text-silver-dim text-lg leading-relaxed mb-6">
              Somos uma software house especializada em soluções digitais de alta complexidade.
              Nossa equipe combina expertise técnica com visão de negócio para entregar
              produtos que realmente movem o ponteiro.
            </p>
            <p className="about-text font-body text-silver-dim leading-relaxed">
              Desde startups em crescimento acelerado até grandes corporações,
              desenvolvemos sistemas que suportam milhões de requisições diárias
              com confiabilidade e performance acima da média do mercado.
            </p>
          </div>

          {/* Right — visual */}
          <div className="relative">
            <div className="border-gradient rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Uptime garantido", value: "99.9%" },
                  { label: "Projetos ativos", value: "34" },
                  { label: "Clientes", value: "80+" },
                  { label: "NPS Score", value: "92" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-ink-muted/50 rounded-2xl p-5 border border-white/5"
                  >
                    <div className="stat-number font-display text-3xl font-black mb-1">
                      {item.value}
                    </div>
                    <div className="text-xs text-silver-dim font-body">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-ink-muted/50 rounded-2xl p-5 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-body font-medium text-silver">Sistemas em produção</div>
                  <div className="text-xs text-silver-dim mt-0.5">Monitoramento 24/7 ativo</div>
                </div>
                <div className="ml-auto text-teal font-mono text-xs">LIVE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Differentials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {differentials.map((diff) => (
            <div
              key={diff.title}
              className={`diff-card card-glow border-gradient rounded-2xl p-6 ${diff.bg}`}
            >
              <div
                className={`w-10 h-10 rounded-xl ${diff.bg} border ${diff.border} flex items-center justify-center mb-4`}
              >
                <diff.icon size={18} className={diff.color} />
              </div>
              <h3 className="font-display font-bold text-silver text-lg mb-2">{diff.title}</h3>
              <p className="text-sm text-silver-dim font-body leading-relaxed">{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
