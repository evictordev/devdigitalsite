"use client";

import { useEffect, useRef } from "react";
import { Code2, Bot, Plug, BarChart3, Smartphone, Cloud, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    desc: "Aplicações web de alta performance construídas com Next.js, React e as melhores práticas de engenharia.",
    tags: ["Next.js", "TypeScript", "Node.js"],
    color: "accent",
  },
  {
    icon: Bot,
    title: "Automações Inteligentes",
    desc: "Fluxos automatizados que eliminam trabalho repetitivo e aumentam a produtividade da sua equipe.",
    tags: ["RPA", "Python", "n8n"],
    color: "teal",
  },
  {
    icon: Plug,
    title: "Integrações & APIs",
    desc: "Conectamos sistemas legados e plataformas modernas com APIs robustas, seguras e bem documentadas.",
    tags: ["REST", "GraphQL", "Webhooks"],
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    desc: "Painéis de dados em tempo real para você tomar decisões baseadas em evidências, não em intuição.",
    tags: ["Dados", "BI", "Visualização"],
    color: "teal",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    desc: "Aplicativos nativos e multiplataforma com experiências fluidas em iOS e Android.",
    tags: ["React Native", "Expo", "Flutter"],
    color: "accent",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Infraestrutura escalável, pipelines de CI/CD e monitoramento proativo para operações sem fricção.",
    tags: ["AWS", "Docker", "Kubernetes"],
    color: "teal",
  },
];

const colorMap: Record<string, { icon: string; bg: string; border: string; tag: string }> = {
  accent: {
    icon: "text-accent",
    bg: "bg-accent/5",
    border: "border-accent/20",
    tag: "bg-accent/10 text-accent",
  },
  teal: {
    icon: "text-teal",
    bg: "bg-teal/5",
    border: "border-teal/20",
    tag: "bg-teal/10 text-teal",
  },
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".services-header",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: ".services-header", start: "top 85%" },
          }
        );

        gsap.fromTo(
          ".service-card",
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: { each: 0.1, grid: "auto", from: "start" },
            ease: "power3.out",
            scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="servicos" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-soft/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="services-header text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            O que fazemos
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-silver mb-6">
            Soluções para cada{" "}
            <span className="gradient-text-accent">desafio digital</span>
          </h2>
          <p className="text-silver-dim font-body text-lg max-w-2xl mx-auto">
            Do zero ao deploy, cobrimos todo o ciclo de desenvolvimento com
            tecnologia de ponta e metodologias ágeis.
          </p>
        </div>

        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.title}
                className="service-card group card-glow border-gradient rounded-2xl p-7 cursor-pointer relative overflow-hidden"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-accent/3 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                <div className="relative">
                  <div
                    className={`w-11 h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5`}
                  >
                    <service.icon size={20} className={colors.icon} />
                  </div>

                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-silver text-xl">{service.title}</h3>
                    <ArrowUpRight
                      size={16}
                      className="text-silver-dim/0 group-hover:text-silver-dim transition-all duration-300 mt-1 flex-shrink-0"
                    />
                  </div>

                  <p className="text-sm text-silver-dim font-body leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-mono px-2.5 py-1 rounded-full ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
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
