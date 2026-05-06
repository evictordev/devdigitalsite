"use client";

import { useEffect, useRef } from "react";
import { Search, Pencil, Code2, Rocket, HeartHandshake, Star } from "lucide-react";
import Particles from "@/components/animations/particles/Particles";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descoberta & Planejamento",
    desc: "Imersão profunda no seu negócio, mapeamento de requisitos e definição da arquitetura ideal. Nenhum detalhe é deixado de lado.",
    duration: "1–2 semanas",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design & Prototipagem",
    desc: "UX research, wireframes e protótipos interativos para validar a experiência antes de escrever uma linha de código.",
    duration: "1–2 semanas",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desenvolvimento",
    desc: "Sprints ágeis com entregas incrementais, revisões de código rigorosas e testes automatizados em cada etapa.",
    duration: "4–12 semanas",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega & Deploy",
    desc: "Deploy zero-downtime com rollback automático, monitoramento em tempo real e documentação completa.",
    duration: "1 semana",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Suporte Contínuo",
    desc: "Monitoramento proativo, atualizações de segurança e evoluções do produto conforme seu negócio cresce.",
    duration: "Ongoing",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Header animation
        gsap.fromTo(
          ".process-header",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: ".process-header", start: "top 85%" },
          }
        );

        // Progress line — the key scroll animation
        gsap.fromTo(
          ".process-line-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".process-steps",
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1,
            },
          }
        );

        // Each step card
        steps.forEach((_, i) => {
          gsap.fromTo(
            `.process-step-${i}`,
            { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: `.process-step-${i}`,
                start: "top 85%",
              },
            }
          );

          // Star activation when line passes
          gsap.to(
            `.process-dot-${i} svg`,
            {
              opacity: 1,
              filter: "drop-shadow(0 0 12px rgba(255, 184, 0, 0.8)) drop-shadow(0 0 6px rgba(255, 201, 51, 0.6))",
              duration: 0.6,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: `.process-step-${i}`,
                start: "top 80%",
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} id="processo" className="py-32 relative overflow-hidden">
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .shimmer-glow {
          animation: shimmer 3s infinite;
          background-size: 1000px 100%;
          filter: drop-shadow(0 0 8px rgba(255, 184, 0, 0.6)) drop-shadow(0 0 4px rgba(255, 201, 51, 0.4));
        }
      `}</style>

      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particles
            className="w-full h-full"
            particleCount={490}
            particleSpread={15}
            speed={0.12}
            particleColors={["#EAB308"]}
            moveParticlesOnHover={true}
            particleHoverFactor={0.1}
            alphaParticles={true}
            particleBaseSize={90}
            sizeRandomness={0.9}
            cameraDistance={13}
            disableRotation
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="process-header text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-6">
            <span className="w-8 h-px bg-accent" />
            Como trabalhamos
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-silver mb-6">
            Processo{" "}
            <span className="gradient-text-accent">transparente</span>,<br />
            resultados previsíveis.
          </h2>
          <p className="text-silver-dim font-body text-lg max-w-2xl mx-auto">
            Cada projeto segue um fluxo estruturado que elimina surpresas e
            maximiza a qualidade da entrega.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps relative max-w-4xl mx-auto">
          {/* Vertical line track */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-px">
            {/* Animated fill */}
            <div
              className="process-line-fill w-full h-full origin-top shimmer-glow"
              style={{
                background: "linear-gradient(to bottom, #FFB800, #FFC933)",
                transformOrigin: "top",
              }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`process-step-${i} relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Mobile / Desktop star */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex-shrink-0">
                  <div
                    className={`process-dot-${i}`}
                  >
                    <Star size={20} className="text-accent fill-accent" style={{ opacity: 0.3 }} />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 w-full md:w-[45%] ${
                    i % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                  }`}
                >
                  <div className="group card-glow border-gradient rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-6xl font-display font-black text-white/[0.03] select-none leading-none">
                      {step.number}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                        <step.icon size={16} className="text-accent" />
                      </div>
                      <span className="font-mono text-xs text-accent tracking-widest">
                        ETAPA {step.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-silver text-xl mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-silver-dim font-body leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                      <span className="text-xs font-mono text-teal">{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
