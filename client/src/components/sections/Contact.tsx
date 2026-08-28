import { type FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWhatsAppUrl, siteConfig } from "@/lib/site";
import { trpc } from "@/lib/trpc";

type ProjectType = "Sistema Web" | "Automação" | "Consultoria em IA" | "Outro";
type FormValues = { name: string; email: string; projectType: ProjectType; message: string; honeypot: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", projectType: "Sistema Web", message: "", honeypot: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Informe seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Informe um e-mail válido.";
  if (values.message.trim().length < 12) errors.message = "Conte um pouco mais sobre o projeto.";
  return errors;
}

/**
 * Coleta leads qualificados e aciona o procedimento server-side sem expor chaves de e-mail no navegador.
 * Não recebe props: contatos e links usam a configuração centralizada da marca.
 * @reutilizavel não
 */
export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState("");
  const mutation = trpc.contact.send.useMutation();

  const update = (field: keyof FormValues, value: string) => {
    setValues(current => ({ ...current, [field]: value }));
    if (errors[field]) setErrors(current => ({ ...current, [field]: undefined }));
    if (statusMessage) setStatusMessage("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    mutation.mutate(values, {
      onSuccess: result => {
        if (result.success) {
          setValues(initialValues);
          setStatusMessage(result.code === "SPAM_ACCEPTED" ? "Obrigado. Recebemos sua mensagem." : "Mensagem recebida. Em breve entro em contato.");
        } else if (result.code === "EMAIL_NOT_CONFIGURED") {
          setStatusMessage("Recebi seus dados no sistema. O envio por e-mail será ativado quando a configuração do Resend for preenchida.");
        } else if (result.code === "RATE_LIMITED") {
          setStatusMessage("Já recebemos uma mensagem deste dispositivo. Aguarde alguns minutos para tentar novamente.");
        } else {
          setStatusMessage("Não foi possível concluir agora. Tente novamente ou fale comigo pelo WhatsApp.");
        }
      },
      onError: () => setStatusMessage("Não foi possível concluir agora. Tente novamente ou fale comigo pelo WhatsApp."),
    });
  };

  return (
    <section id="contato" className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <ScrollReveal>
          <SectionHeading eyebrow="Contato" title="Tem um processo travando? Vamos entender o que pode virar estrutura." description="Conte o contexto, o que você já tentou e onde gostaria de chegar. A primeira conversa serve para separar urgência de solução — sem proposta genérica." />
          <div className="mt-8 grid gap-3">
            <a href={getWhatsAppUrl("Olá Márcio, vim pelo seu site e quero conversar sobre um projeto.")} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] p-4 transition-colors hover:border-cyan-300/30"><span className="grid size-10 place-items-center rounded-lg bg-emerald-400/10 text-emerald-300"><MessageCircle className="size-4" /></span><span><span className="block text-xs font-bold text-white">Falar pelo WhatsApp</span><span className="mt-1 block text-[0.68rem] text-slate-500">Mensagem pré-preenchida para agilizar.</span></span></a>
            <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] p-4 transition-colors hover:border-violet-300/30"><span className="grid size-10 place-items-center rounded-lg bg-violet-400/10 text-violet-300"><Mail className="size-4" /></span><span><span className="block text-xs font-bold text-white">{siteConfig.email}</span><span className="mt-1 block text-[0.68rem] text-slate-500">[EDITAR: substitua pelo seu e-mail]</span></span></a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <GlassPanel className="p-5 sm:p-7">
            <div className="mb-6 flex items-start justify-between"><div><p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.13em] text-cyan-200">Briefing inicial</p><h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.05em] text-white">Vamos colocar o problema na mesa.</h3></div><Send className="mt-1 size-5 text-violet-300" /></div>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor="website">Não preencha este campo</label><input id="website" tabIndex={-1} autoComplete="off" value={values.honeypot} onChange={event => update("honeypot", event.target.value)} /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="field-label block" htmlFor="name">Seu nome</label><input id="name" name="name" className="field-control" value={values.name} onChange={event => update("name", event.target.value)} placeholder="Como posso te chamar?" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name ? <p className="mt-1.5 text-[0.68rem] text-rose-300">{errors.name}</p> : null}</div>
                <div><label className="field-label block" htmlFor="email">Seu e-mail</label><input id="email" name="email" type="email" className="field-control" value={values.email} onChange={event => update("email", event.target.value)} placeholder="voce@empresa.com" autoComplete="email" aria-invalid={Boolean(errors.email)} />{errors.email ? <p className="mt-1.5 text-[0.68rem] text-rose-300">{errors.email}</p> : null}</div>
              </div>
              <div><label className="field-label block" htmlFor="projectType">O que você precisa?</label><select id="projectType" name="projectType" className="field-control" value={values.projectType} onChange={event => update("projectType", event.target.value as ProjectType)}><option>Sistema Web</option><option>Automação</option><option>Consultoria em IA</option><option>Outro</option></select></div>
              <div><label className="field-label block" htmlFor="message">Conte um pouco sobre o projeto</label><textarea id="message" name="message" className="field-control min-h-32 resize-y" value={values.message} onChange={event => update("message", event.target.value)} placeholder="Qual é o processo, o desafio ou a oportunidade?" aria-invalid={Boolean(errors.message)} />{errors.message ? <p className="mt-1.5 text-[0.68rem] text-rose-300">{errors.message}</p> : null}</div>
              <div className="flex flex-col gap-3 border-t border-white/[0.075] pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-[19rem] text-[0.64rem] leading-5 text-slate-500">Seus dados são usados apenas para responder ao seu contato.</p><button type="submit" disabled={mutation.isPending} className="gradient-button gradient-button--primary group min-w-40"><span>{mutation.isPending ? "Enviando..." : "Enviar briefing"}</span>{mutation.isPending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-3.5" />}</button></div>
              {statusMessage ? <div role="status" className="flex gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] p-3 text-xs leading-5 text-cyan-100">{mutation.data?.success ? <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> : null}<span>{statusMessage}</span></div> : null}
            </form>
          </GlassPanel>
        </ScrollReveal>
      </div>
    </section>
  );
}
