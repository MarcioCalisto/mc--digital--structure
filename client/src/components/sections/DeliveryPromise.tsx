import { Gauge, Layers3, ShieldCheck } from "lucide-react";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const deliveries = [
  {
    title: "Clareza de escopo",
    text: "Você entende o que será construído, por que aquilo importa e onde cada entrega se encaixa.",
    icon: Layers3,
    tone: "violet" as const,
  },
  {
    title: "Performance desde a base",
    text: "Experiência responsiva, decisões técnicas conscientes e atenção a detalhes que influenciam o uso.",
    icon: Gauge,
    tone: "cyan" as const,
  },
  {
    title: "Entrega responsável",
    text: "Código organizado, contexto documentado e uma base que não depende de improviso para evoluir.",
    icon: ShieldCheck,
    tone: "spectrum" as const,
  },
] as const;

/**
 * Comunica princípios de entrega verificáveis sem inventar depoimentos, avaliações ou resultados de clientes.
 * Não recebe props porque os princípios são parte da proposta desta landing page.
 * @reutilizavel não
 */
export function DeliveryPromise() {
  return (
    <section className="section border-y border-white/[0.055] bg-[#090b17]/45">
      <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <ScrollReveal>
          <SectionHeading
            eyebrow="O que eu entrego"
            title="Não é só uma interface. É uma base mais confiável para operar."
            description="Sem promessas vagas ou depoimentos inventados: estes são compromissos de processo que orientam cada projeto."
          />
        </ScrollReveal>
        <div className="grid gap-3 sm:grid-cols-3">
          {deliveries.map((delivery, index) => (
            <ScrollReveal
              key={delivery.title}
              delay={index * 0.06}
              className="rounded-xl border border-white/[0.085] bg-white/[0.025] p-4"
            >
              <GlowIcon icon={delivery.icon} tone={delivery.tone} />
              <h3 className="mt-4 text-sm font-bold text-white">
                {delivery.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                {delivery.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
