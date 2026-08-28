import { ArrowUpRight, Braces, Target } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Contextualiza a atuação profissional e reserva um local explícito para a fotografia do portfólio.
 * Não recebe props porque o conteúdo é institucional e tem edição centralizada nesta composição.
 * @reutilizavel não
 */
export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ScrollReveal className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/20 to-cyan-500/10 blur-xl" />
          <GlassPanel className="relative aspect-[0.91] overflow-hidden p-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(56,189,248,0.22),transparent_23%),linear-gradient(135deg,rgba(168,85,247,0.19),transparent_48%)]" />
            <div className="absolute inset-x-7 top-7 flex items-center justify-between font-mono text-[0.6rem] font-bold uppercase tracking-[0.13em] text-slate-400"><span>Perfil / 01</span><span className="text-cyan-300">Disponível p/ projetos</span></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid size-35 place-items-center rounded-full border border-dashed border-cyan-200/32 bg-gradient-to-br from-violet-500/12 to-cyan-400/8 shadow-[0_0_45px_rgba(56,189,248,0.12)] sm:size-42"><Braces className="size-15 text-cyan-100/80 sm:size-17" strokeWidth={1.1} /></div>
            </div>
            <div className="absolute inset-x-7 bottom-7 rounded-xl border border-white/10 bg-black/20 p-3.5 backdrop-blur"><p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.11em] text-violet-200">[EDITAR: inserir foto profissional de Márcio]</p><p className="mt-1 text-xs leading-5 text-slate-400">Idealmente com iluminação azul-roxa, preservando a identidade visual.</p></div>
          </GlassPanel>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SectionHeading eyebrow="Sobre" title="O digital não precisa parecer complicado para funcionar de verdade." description="Sou Márcio Calisto, Software Engineer. Trabalho na interseção entre estratégia, design e engenharia para construir estruturas digitais que acompanham o ritmo do negócio." />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">A conversa começa no processo: onde a operação trava, o que ainda vive em planilhas e quais decisões precisam ficar mais claras. Daí, o produto ganha forma com código consistente, interface bem resolvida e foco no que muda a rotina.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-4"><GlowIcon icon={Target} tone="violet" className="shrink-0" /><div><h3 className="text-sm font-bold text-white">Negócio antes da interface</h3><p className="mt-1 text-xs leading-5 text-slate-400">A solução nasce da operação, não de uma tela aleatória.</p></div></div>
            <div className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.025] p-4"><GlowIcon icon={ArrowUpRight} tone="cyan" className="shrink-0" /><div><h3 className="text-sm font-bold text-white">Escala com clareza</h3><p className="mt-1 text-xs leading-5 text-slate-400">Estrutura suficiente para crescer sem redesenhar tudo depois.</p></div></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

