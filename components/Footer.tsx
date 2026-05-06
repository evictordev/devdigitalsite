import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const links = {
  Empresa: ["Sobre", "Serviços", "Processo", "Resultados"],
  Serviços: ["Desenvolvimento Web", "Automações", "APIs & Integrações", "Cloud & DevOps"],
  Legal: ["Privacidade", "Termos de Uso", "LGPD", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-soft/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-accent rounded-md rotate-45" />
                <div className="absolute inset-1 bg-ink-soft rounded-sm rotate-45" />
                <div className="absolute inset-2 bg-teal rounded-sm rotate-45" />
              </div>
              <span className="font-display font-bold text-lg text-silver">
                Nexus<span className="text-accent">Dev</span>
              </span>
            </div>
            <p className="text-sm text-silver-dim font-body leading-relaxed mb-6 max-w-xs">
              Software de alta performance para empresas que recusam mediocridade.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:contato@nexusdev.com.br" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-silver-dim hover:text-silver hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-mono tracking-widest uppercase text-silver-dim mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-silver-dim hover:text-silver transition-colors duration-200 font-body"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-silver-dim font-body">
            © 2025 NexusDev. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-xs font-mono text-silver-dim">
              Todos os sistemas operacionais
            </span>
          </div>
          <p className="text-xs text-silver-dim font-body">
            Fortaleza, CE · Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
