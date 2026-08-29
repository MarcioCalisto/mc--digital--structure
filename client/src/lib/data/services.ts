export type ServiceIcon = "layers" | "code" | "workflow" | "sparkles";

export type Service = {
  title: string;
  eyebrow: string;
  description: string;
  icon: ServiceIcon;
  items: readonly string[];
};

export const services: readonly Service[] = [
  {
    title: "Sistemas",
    eyebrow: "Arquitetura que organiza",
    description:
      "Sistemas sob medida para tirar sua operação da improvisação e colocar processos críticos no lugar certo.",
    icon: "layers",
    items: [
      "Dashboards operacionais",
      "Áreas restritas",
      "Fluxos personalizados",
    ],
  },
  {
    title: "Web",
    eyebrow: "Presença que trabalha",
    description:
      "Sites rápidos, claros e orientados à decisão — alinhando posicionamento, experiência e performance.",
    icon: "code",
    items: ["Landing pages", "Sites institucionais", "Interfaces responsivas"],
  },
  {
    title: "Automações",
    eyebrow: "Menos repetição",
    description:
      "Fluxos que conectam ferramentas e reduzem trabalho manual sem transformar sua rotina em mais um sistema difícil.",
    icon: "workflow",
    items: [
      "Integrações entre ferramentas",
      "Alertas e rotinas",
      "Fluxos de atendimento",
    ],
  },
  {
    title: "IA aplicada",
    eyebrow: "Inteligência útil",
    description:
      "Aplicações de IA integradas ao seu contexto, com foco em acelerar análise, atendimento e execução.",
    icon: "sparkles",
    items: [
      "Assistentes internos",
      "Triagem de informações",
      "Processos aumentados por IA",
    ],
  },
];
