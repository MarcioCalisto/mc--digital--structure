import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type GlowIconProps = {
  icon: LucideIcon;
  className?: string;
  tone?: "violet" | "cyan" | "spectrum";
};

/**
 * Exibe um ícone de contorno dentro de um contêiner luminoso para sinalizar conceitos técnicos.
 * Recebe o componente de ícone, o tom de destaque e classes adicionais.
 * @reutilizavel sim
 */
export function GlowIcon({ icon: Icon, tone = "spectrum", className }: GlowIconProps) {
  return (
    <span className={cn("glow-icon", `glow-icon--${tone}`, className)}>
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.7} />
    </span>
  );
}

