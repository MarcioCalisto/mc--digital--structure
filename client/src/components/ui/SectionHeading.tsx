import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Padroniza a hierarquia de título das seções com rótulo técnico e descrição opcional.
 * Recebe os textos de contexto, título, descrição, alinhamento e classes complementares.
 * @reutilizavel sim
 */
export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {description ? <p className="section-description mt-5">{description}</p> : null}
    </div>
  );
}

