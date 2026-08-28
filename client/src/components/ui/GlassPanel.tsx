import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hoverable?: boolean;
};

/**
 * Fornece uma superfície translúcida com borda luminosa opcional para agrupar conteúdo.
 * Recebe conteúdo filho, classes extras e o controle de interação por hover.
 * @reutilizavel sim
 */
export function GlassPanel({ children, hoverable = false, className, ...props }: GlassPanelProps) {
  return (
    <div className={cn("glass-panel", hoverable && "glass-panel--interactive", className)} {...props}>
      {children}
    </div>
  );
}

