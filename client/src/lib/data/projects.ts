export type Project = {
  id: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  tags: readonly string[];
  accent: "violet" | "cyan" | "spectrum";
};

export const projects: readonly Project[] = [
  {
    id: "sistema-operacional",
    category: "Sistema sob medida",
    title: "[EDITAR: Nome do sistema para negócio]",
    problem: "[EDITAR: Processo manual, informações espalhadas e rotina sem visão de operação.]",
    solution: "[EDITAR: Plataforma centralizando o fluxo, as regras e as informações importantes.]",
    result: "[EDITAR: Ganho operacional, redução de retrabalho ou decisão mais rápida.]",
    tags: ["Sistema", "UX", "Operação"],
    accent: "violet",
  },
  {
    id: "site-performance",
    category: "Web de alta performance",
    title: "[EDITAR: Nome do site institucional]",
    problem: "[EDITAR: Presença digital sem clareza de serviço, diferenciais e caminho de conversão.]",
    solution: "[EDITAR: Site institucional em React, com arquitetura de conteúdo e CTAs estratégicos.]",
    result: "[EDITAR: Mais clareza de posicionamento e uma base preparada para captar oportunidades.]",
    tags: ["React", "SEO", "Conversão"],
    accent: "cyan",
  },
  {
    id: "automacao-comercial",
    category: "Automação de processo",
    title: "[EDITAR: Nome da automação comercial]",
    problem: "[EDITAR: Rotinas repetitivas entre atendimento, planilhas e acompanhamento.]",
    solution: "[EDITAR: Fluxo automatizado conectando etapas, alertas e registros necessários.]",
    result: "[EDITAR: Operação mais previsível e tempo devolvido para atividades que exigem decisão.]",
    tags: ["Automação", "Integração", "IA"],
    accent: "spectrum",
  },
];

