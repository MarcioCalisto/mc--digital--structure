import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GradientButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  showArrow?: boolean;
};

/**
 * Renderiza um link de ação com variantes de destaque, contorno ou texto.
 * Recebe destino, conteúdo, variante visual e a opção de exibir uma seta.
 * @reutilizavel sim
 */
export function GradientButton({
  children,
  className,
  variant = "primary",
  showArrow = false,
  ...props
}: GradientButtonProps) {
  return (
    <a className={cn("gradient-button", `gradient-button--${variant}`, className)} {...props}>
      <span>{children}</span>
      {showArrow ? <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> : null}
    </a>
  );
}

