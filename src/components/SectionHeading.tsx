import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={cn("max-w-2xl", isCenter ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-sans uppercase tracking-[0.28em]",
            isDark ? "text-champagne-soft" : "text-taupe-dark"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-serif-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.1] font-medium",
          isDark ? "text-ivory" : "text-charcoal"
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            isDark ? "text-ivory/75" : "text-charcoal/70",
            isCenter ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
