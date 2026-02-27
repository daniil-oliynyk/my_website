import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4 text-center lg:text-left", className)}>
      {label ? (
        <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-text-secondary">
          {label}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
        {description ? (
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
