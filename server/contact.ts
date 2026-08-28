import { z } from "zod";

export const contactInput = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120, "Nome muito longo."),
  email: z.string().trim().email("Informe um e-mail válido.").max(320, "E-mail muito longo."),
  projectType: z.enum(["Sistema Web", "Automação", "Consultoria em IA", "Outro"]),
  message: z.string().trim().min(12, "Conte um pouco mais sobre o projeto.").max(4000, "Mensagem muito longa."),
  honeypot: z.string().max(256).optional().default(""),
});

export type ContactInput = z.infer<typeof contactInput>;
export type ContactResult =
  | { success: true; code: "SENT" | "SPAM_ACCEPTED" }
  | { success: false; code: "EMAIL_NOT_CONFIGURED" | "RATE_LIMITED" | "EMAIL_FAILED" };

const requestLog = new Map<string, number>();
const RATE_WINDOW_MS = 10 * 60 * 1000;

/**
 * Valida e encaminha um contato pelo servidor, sem expor credenciais ao navegador.
 * Recebe os dados tipados e uma chave de origem derivada da requisição.
 * @reutilizavel sim
 */
export async function sendContactEmail(input: ContactInput, sourceKey: string): Promise<ContactResult> {
  if (input.honeypot) return { success: true, code: "SPAM_ACCEPTED" };

  const now = Date.now();
  const previous = requestLog.get(sourceKey);
  if (previous && now - previous < RATE_WINDOW_MS) return { success: false, code: "RATE_LIMITED" };
  requestLog.set(sourceKey, now);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) return { success: false, code: "EMAIL_NOT_CONFIGURED" };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: input.email,
        subject: `[Portfólio] Novo contato: ${input.projectType}`,
        text: `Nome: ${input.name}\nE-mail: ${input.email}\nTipo: ${input.projectType}\n\n${input.message}`,
      }),
    });

    if (!response.ok) return { success: false, code: "EMAIL_FAILED" };
    return { success: true, code: "SENT" };
  } catch {
    return { success: false, code: "EMAIL_FAILED" };
  }
}

/**
 * Extrai uma chave estável para o rate limit sem confiar em um único cabeçalho.
 * Recebe a requisição Express e considera IP ou encaminhamento do proxy.
 * @reutilizavel sim
 */
export function getRequestSource(req: { ip?: string; headers?: Record<string, string | string[] | undefined> }) {
  const forwarded = req.headers?.["x-forwarded-for"];
  const forwardedValue = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return forwardedValue?.split(",")[0]?.trim() || req.ip || "unknown";
}
