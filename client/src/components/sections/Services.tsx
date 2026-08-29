import { Check, Code2, Layers2, Sparkles, Workflow } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { GlowIcon } from "@/components/ui/GlowIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services, type ServiceIcon } from "@/lib/data/services";

const icons: Record<ServiceIcon, typeof Layers2> = {
  layers: Layers2,
  code: Code2,
  workflow: Workflow,
  sparkles: Sparkles,
};
const tones = ["violet", "cyan", "spectrum", "violet"] as const;

/**
 * Apresenta as quatro frentes de atuação por meio de cards alimentados por dados tipados.
 * Não recebe props, pois a lista é mantida em lib/data/services para facilitar sua edição.
 * @reutilizavel não
 */
export function Services() {
  return (
    <section
      id="servicos"
      className="section border-y border-white/[0.055] bg-[#080a14]/42"
    >
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Pilares de atuação"
            title="Soluções digitais que entram na operação — e não só na apresentação."
            description="Cada projeto encontra a combinação certa entre experiência, regras de negócio e automação. O ponto é criar algo útil agora e sustentável depois."
          />
        </ScrollReveal>
        <div className="mt-11 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <ScrollReveal key={service.title} delay={index * 0.055}>
                <GlassPanel hoverable className="h-full p-5">
                  <GlowIcon icon={Icon} tone={tones[index]} />
                  <p className="mt-6 font-mono text-[0.59rem] font-bold uppercase tracking-[0.12em] text-cyan-200/80">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.05em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-white/[0.075] pt-4">
                    {service.items.map(item => (
                      <li
                        key={item}
                        className="flex gap-2 text-[0.7rem] font-semibold text-slate-300"
                      >
                        <Check className="mt-0.5 size-3 shrink-0 text-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
