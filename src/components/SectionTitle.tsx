import { cn } from "@/lib/utils";

export function SectionTitle({ label, title, description, className, id }: {
  label: string;
  title: string;
  description?: string;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("section-title", className)}>
      <p className="eyebrow"><span className="eyebrow-mark" />{label}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-title-description">{description}</p> : null}
    </div>
  );
}
