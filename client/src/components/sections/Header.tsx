import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { getWhatsAppUrl, siteConfig } from "@/lib/site";

/**
 * Exibe navegação fixa, acompanha a seção atualmente visível e oferece menu móvel acessível.
 * Não recebe props: consome os rótulos e destinos centralizados na configuração do site.
 * @reutilizavel não
 */
export function Header() {
  const [activeSection, setActiveSection] = useState("sobre");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = siteConfig.navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    // A observação privilegia a seção mais presente no centro da viewport, evitando troca excessiva no scroll.
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-34% 0px -56%", threshold: [0.05, 0.2, 0.4] }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto flex h-15 w-full max-w-[77rem] items-center justify-between rounded-2xl border border-white/10 bg-[#090b17]/80 px-3 shadow-[0_12px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-4">
        <a
          href="#inicio"
          aria-label="Voltar ao início"
          className="group grid size-9 place-items-center rounded-xl border border-white/14 bg-white/[0.035] font-display text-sm font-bold tracking-[-0.1em] text-white transition-colors hover:border-cyan-300/50"
        >
          <span className="bg-gradient-to-br from-violet-300 to-cyan-300 bg-clip-text text-transparent">
            MC
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {siteConfig.navigation.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-lg px-2.5 py-2 text-[0.74rem] font-bold transition-colors ${activeSection === item.id ? "text-cyan-200" : "text-slate-400 hover:text-white"}`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center sm:flex">
          <GradientButton
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            showArrow
            className="group min-h-9 px-3.5 text-xs"
          >
            <MessageCircle aria-hidden="true" className="size-3.5" />
            Falar comigo
          </GradientButton>
        </div>

        <button
          type="button"
          className="grid size-9 place-items-center rounded-xl border border-white/12 bg-white/[0.035] text-slate-100 lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mt-2 max-w-[77rem] rounded-2xl border border-white/10 bg-[#0c0f20]/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navegação móvel" className="grid gap-1">
              {siteConfig.navigation.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-200 transition-colors hover:bg-white/[0.06] hover:text-cyan-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="size-4" /> Falar comigo
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
