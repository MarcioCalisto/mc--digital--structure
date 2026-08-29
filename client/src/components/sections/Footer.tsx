import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site";

/**
 * Fecha a experiência com links de navegação, contato, Instagram e identificação técnica do projeto.
 * Não recebe props porque utiliza dados centralizados da configuração de marca.
 * @reutilizavel não
 */
export function Footer() {
  return (
    <footer className="border-t border-white/[0.065] bg-[#05060b] py-10">
      <div className="container">
        <div className="grid gap-9 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <span className="font-display text-xl font-bold tracking-[-0.08em] text-white">
              MC
            </span>
            <p className="mt-3 max-w-sm text-xs leading-6 text-slate-500">
              Sistemas, web, automações e IA para transformar processos manuais
              em estrutura de negócio.
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.13em] text-cyan-200">
              Navegação
            </p>
            <div className="mt-3 grid gap-2">
              {siteConfig.navigation.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-xs font-semibold text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.13em] text-cyan-200">
              Conexões
            </p>
            <div className="mt-3 grid gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
              >
                WhatsApp <ArrowUpRight className="size-3" />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
              >
                {siteConfig.instagramHandle} <ArrowUpRight className="size-3" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs font-semibold text-slate-400 transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.065] pt-5 text-[0.62rem] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Márcio Calisto. Todos os direitos
            reservados.
          </span>
          <span>Feito com React + TypeScript + Tailwind.</span>
        </div>
      </div>
    </footer>
  );
}
