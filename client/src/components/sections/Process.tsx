import { CheckCircle2, Compass, Rocket, Search } from "lucide-react";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { number: "01", title: "Diagnóstico", text: "Entendemos contexto, gargalos e prioridade real antes de escolher qualquer tecnologia.", icon: Search },
  { number: "02", title: "Proposta", text: "Escopo, direção e investimento claros para você saber exatamente o que será construído.", icon: Compass },
  { number: "03", title: "Desenvolvimento", text: "Design e código evoluem juntos, com entregas que mantêm visibilidade do processo.", icon: Rocket },
  { number: "04", title: "Entrega & suporte", text: "Publicação organizada, transferência de contexto e próximos passos para sustentar a operação.", icon: CheckCircle2 },
] as const;

/**
 * Detalha a sequência de trabalho em quatro momentos, reduzindo ambiguidades do processo comercial.
 * Não recebe props porque as etapas representam o método de trabalho definido para este portfólio.
 * @reutilizavel não
 */
export function Process() {
  return (
    <section id="processo" className="section">
      <div className="container">
        <ScrollReveal><SectionHeading eyebrow="Como eu trabalho" title="Clareza no processo evita surpresa no projeto." description="Uma boa entrega começa antes do código. O processo dá ritmo à conversa, protege o escopo e mantém cada decisão conectada ao resultado desejado." /></ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.06} className="relative lg:pr-6">
              {index < steps.length - 1 ? <span className="absolute left-[2.1rem] top-5 hidden h-px w-[calc(100%-2.1rem)] bg-gradient-to-r from-violet-400/40 to-cyan-300/20 lg:block" aria-hidden="true" /> : null}
              <div className="relative"><span className="font-mono text-[0.68rem] font-bold tracking-[0.14em] text-violet-300">{step.number}</span><div className="mt-4"><GlowIcon icon={step.icon} tone={index % 2 === 0 ? "violet" : "cyan"} /></div><h3 className="mt-5 font-display text-xl font-bold tracking-[-0.045em] text-white">{step.title}</h3><p className="mt-2 max-w-[15rem] text-xs leading-6 text-slate-400">{step.text}</p></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

