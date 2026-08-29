import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ChevronRight, Code2, Sparkles } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { GlassPanel } from "@/components/ui/GlassPanel";

const terminalCode = `async function automatizarProcesso() {
  const fluxo = await mapearOperacao();
  const sistema = estruturar(fluxo);
  return sistema.executar({ escala: true });
}`;

/**
 * Apresenta a proposta de valor e o terminal interativo que funciona como assinatura visual da página.
 * Não recebe props, pois a mensagem de posicionamento faz parte da composição institucional.
 * @reutilizavel não
 */
export function Hero() {
  const [typedCode, setTypedCode] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setTypedCode(terminalCode);
      return;
    }

    let cursor = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const startTimeout = window.setTimeout(() => {
      intervalId = setInterval(() => {
        cursor += 1;
        setTypedCode(terminalCode.slice(0, cursor));
        if (cursor >= terminalCode.length) {
          if (intervalId) clearInterval(intervalId);
          window.setTimeout(() => {
            cursor = 0;
            setTypedCode("");
          }, 2400);
        }
      }, 17);
    }, 320);

    return () => {
      window.clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [reduceMotion]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[760px] items-center overflow-hidden pb-18 pt-34 sm:min-h-[790px] sm:pb-24 sm:pt-31"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[7rem] mx-auto h-[28rem] max-w-5xl rounded-full bg-gradient-to-r from-violet-600/10 via-sky-500/8 to-cyan-400/10 blur-3xl" />
      <div className="container relative grid items-center gap-13 lg:grid-cols-[1.04fr_0.96fr] lg:gap-11">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="mb-7 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-cyan-200/90">
            <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8]" />
            Sistemas · Web · Automações · IA
          </div>
          <h1 className="max-w-3xl font-display text-[clamp(3.25rem,7.1vw,6rem)] font-bold leading-[0.91] tracking-[-0.075em] text-white">
            Tecnologia deixou de ser diferencial.{" "}
            <span className="gradient-text">Hoje é estrutura.</span>
          </h1>
          <p className="mt-7 max-w-xl text-[1rem] leading-8 text-slate-300 sm:text-[1.07rem]">
            Eu transformo processos manuais e operações bagunçadas em sistemas,
            experiências web e automações que fazem sentido para o seu negócio.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GradientButton href="#contato" showArrow className="group px-5">
              Solicitar orçamento
            </GradientButton>
            <GradientButton
              href="#projetos"
              variant="secondary"
              className="px-5"
            >
              Ver projetos{" "}
              <ChevronRight aria-hidden="true" className="size-4" />
            </GradientButton>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs font-semibold text-slate-500">
            <span className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.035]">
              <Code2 className="size-3.5 text-violet-300" />
            </span>
            Design e código trabalhando pelo mesmo objetivo.
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.62,
            delay: reduceMotion ? 0 : 0.11,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-7 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/15 blur-2xl" />
          <GlassPanel className="relative min-h-[355px] p-0 sm:min-h-[390px]">
            <div className="flex items-center justify-between border-b border-white/9 px-4 py-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <i className="size-2 rounded-full bg-rose-400/80" />
                <i className="size-2 rounded-full bg-amber-300/80" />
                <i className="size-2 rounded-full bg-cyan-300/80" />
              </div>
              <span className="font-mono text-[0.62rem] tracking-[0.12em] text-slate-500">
                MC / AUTOMATION_ENGINE
              </span>
              <Sparkles
                className="size-3.5 text-violet-300"
                aria-hidden="true"
              />
            </div>
            <div className="relative grid min-h-[307px] grid-cols-[2.8rem_1fr] overflow-hidden sm:min-h-[342px]">
              <div
                className="border-r border-white/8 bg-black/10 py-5 text-center font-mono text-[0.65rem] leading-6 text-slate-700"
                aria-hidden="true"
              >
                01
                <br />
                02
                <br />
                03
                <br />
                04
                <br />
                05
                <br />
                06
              </div>
              <div className="relative overflow-hidden p-5 sm:p-6">
                <div className="terminal-scanline pointer-events-none absolute inset-x-0 top-0 h-18" />
                <div className="mb-6 flex items-center gap-2 font-mono text-[0.66rem] text-emerald-300/90">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  engine online{" "}
                  <span className="text-slate-600">/ pronto para executar</span>
                </div>
                <pre
                  aria-label="Exemplo de código de automação"
                  className="m-0 whitespace-pre-wrap font-mono text-[0.72rem] leading-6 text-slate-200 sm:text-[0.78rem]"
                >
                  <code>
                    {typedCode}
                    <span className="ml-0.5 inline-block h-[1em] w-[0.45em] animate-pulse bg-cyan-300 align-[-0.12em]" />
                  </code>
                </pre>
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-white/8 pt-4 font-mono text-[0.61rem] uppercase tracking-[0.08em] text-slate-500">
                  <span>processo: estruturado</span>
                  <span className="text-cyan-300">100% operável</span>
                </div>
              </div>
            </div>
          </GlassPanel>
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-violet-300/18 bg-[#15122b]/90 px-3 py-2 font-mono text-[0.61rem] uppercase tracking-[0.1em] text-violet-200 shadow-xl backdrop-blur md:flex">
            <span className="size-1.5 rounded-full bg-violet-300" />
            Processos &gt; improvisos
          </div>
        </motion.div>
      </div>
      <a
        href="#sobre"
        aria-label="Ir para a seção sobre"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.58rem] font-mono uppercase tracking-[0.15em] text-slate-600 sm:flex"
      >
        <span>scroll</span>
        <ArrowDown className="size-3 animate-bounce" />
      </a>
    </section>
  );
}
