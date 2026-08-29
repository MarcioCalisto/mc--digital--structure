import { Braces } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { stack } from "@/lib/data/stack";

/**
 * Exibe a base tecnológica em uma grade editorial discreta, sem deslocar o foco da proposta de valor.
 * Não recebe props porque os itens ficam centralizados em lib/data/stack para edição rápida.
 * @reutilizavel não
 */
export function Stack() {
  return (
    <section
      aria-label="Stack tecnológico"
      className="border-y border-white/[0.055] bg-[#090b17]/60 py-8"
    >
      <ScrollReveal className="container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl border border-violet-300/17 bg-violet-500/8">
            <Braces className="size-4 text-violet-200" />
          </span>
          <div>
            <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.13em] text-cyan-200">
              Stack tecnológico
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              Ferramentas escolhidas pelo contexto, não por moda.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map(item => (
            <div
              key={item.name}
              className="rounded-lg border border-white/[0.09] bg-white/[0.025] px-2.5 py-2"
            >
              <span className="block text-[0.7rem] font-bold text-slate-200">
                {item.name}
              </span>
              <span className="block pt-0.5 font-mono text-[0.52rem] uppercase tracking-[0.1em] text-slate-600">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
