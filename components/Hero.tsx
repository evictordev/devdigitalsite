"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;

      // Floating animation for orbs
      gsap.to(".orb-1", {
        y: -30,
        x: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".orb-2", {
        y: 20,
        x: -20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
      gsap.to(".orb-3", {
        y: -15,
        x: 25,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    };

    initGSAP();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-overlay"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal/8 rounded-full blur-3xl" />
        <div className="orb-3 absolute top-1/2 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </div>

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 4px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-40 items-center">
          {/* Left */}
          <div>
            <h1 className="hero-headline font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              <span className="block text-silver">Transformamos ideias em</span>
              <span className="block gradient-text-accent">Soluções</span>
              <span className="block text-silver">Digitais.</span>
            </h1>

            <p className="hero-sub font-body text-lg text-silver-dim leading-relaxed mb-10 max-w-lg">
              Desenvolvemos sistemas web, automações e APIs que escalam com sua empresa.
              Cada linha de código é escrita com obsessão por performance e experiência.
            </p>

            <div className="hero-cta flex flex-wrap gap-4">
              <a
                href="#contato"
                className="btn-shimmer inline-flex items-center gap-2 text-white font-body font-medium px-7 py-3.5 rounded-full text-sm"
              >
                Solicitar Orçamento
                <ArrowRight size={16} />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 text-silver-dim hover:text-silver font-body font-medium px-7 py-3.5 rounded-full text-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="hero-visual hidden lg:block relative">
            <div className="relative">
              {/* Code window */}
              <div className="border-gradient rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3.5 bg-ink-muted/60 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <span className="ml-3 text-xs font-mono text-silver-dim">nexus-api.ts</span>
                </div>
                <div className="p-6 bg-ink-soft/80 backdrop-blur-sm font-mono text-sm leading-relaxed">
                  <div className="text-silver-dim">
                    <span className="text-purple-400">import</span>
                    <span className="text-silver"> {"{ createServer }"} </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-teal"> &apos;nexus&apos;</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-accent"> server</span>
                    <span className="text-silver"> = createServer{"({"}</span>
                  </div>
                  <div className="ml-4">
                    <div>
                      <span className="text-teal">port</span>
                      <span className="text-silver">: </span>
                      <span className="text-orange-300">3000</span>
                      <span className="text-silver">,</span>
                    </div>
                    <div>
                      <span className="text-teal">cache</span>
                      <span className="text-silver">: </span>
                      <span className="text-green-400">true</span>
                      <span className="text-silver">,</span>
                    </div>
                    <div>
                      <span className="text-teal">auth</span>
                      <span className="text-silver">: </span>
                      <span className="text-teal">&apos;jwt&apos;</span>
                      <span className="text-silver">,</span>
                    </div>
                    <div>
                      <span className="text-teal">monitoring</span>
                      <span className="text-silver">: </span>
                      <span className="text-green-400">true</span>
                    </div>
                  </div>
                  <div className="text-silver">{"}"});</div>
                  <div className="mt-3">
                    <span className="text-purple-400">await</span>
                    <span className="text-accent"> server</span>
                    <span className="text-silver">.start();</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-4 bg-accent animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-teal text-ink-soft text-xs font-mono font-bold px-3 py-1.5 rounded-full glow-teal animate-float-slow">
                ✓ Online
              </div>
              <div className="absolute -bottom-4 -left-4 border-gradient rounded-xl px-4 py-2.5 bg-ink-soft">
                <div className="text-xs text-silver-dim font-body">Latência média</div>
                <div className="text-lg font-display font-bold text-teal">12ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink to-transparent pointer-events-none" />
    </section>
  );
}
