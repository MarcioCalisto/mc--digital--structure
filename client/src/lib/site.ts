/** Configurações centralizadas de marca, contatos e âncoras. */
export const siteConfig = {
  name: "Márcio Calisto",
  role: "Software Engineer",
  instagramHandle: "@marciocalisto_",
  instagramUrl: "https://instagram.com/marciocalisto_",
  email: "[EDITAR: seu-e-mail@dominio.com]",
  whatsappNumber: "[EDITAR: somente-dígitos-do-whatsapp]",
  navigation: [
    { label: "Sobre", href: "#sobre", id: "sobre" },
    { label: "Serviços", href: "#servicos", id: "servicos" },
    { label: "Como trabalho", href: "#processo", id: "processo" },
    { label: "Projetos", href: "#projetos", id: "projetos" },
    { label: "Contato", href: "#contato", id: "contato" },
  ],
} as const;

/**
 * Cria uma URL de WhatsApp com contexto para a conversa.
 * @reutilizavel sim
 */
export function getWhatsAppUrl(
  message = "Olá Márcio, vim pelo seu site e quero falar sobre um projeto."
) {
  const phone = siteConfig.whatsappNumber;
  const encodedMessage = encodeURIComponent(message);

  // Mantém o marcador explícito até que o número real seja informado.
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
