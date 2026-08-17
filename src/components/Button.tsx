import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "champagne" | "outline" | "outline-light" | "text";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.12em] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  solid:
    "bg-charcoal text-ivory border border-charcoal hover:bg-champagne hover:border-champagne hover:text-charcoal",
  champagne:
    "bg-champagne text-charcoal border border-champagne hover:bg-charcoal hover:border-charcoal hover:text-ivory",
  outline:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory",
  "outline-light":
    "bg-transparent text-ivory border border-ivory/70 hover:bg-ivory hover:text-charcoal",
  text: "bg-transparent text-charcoal border-b border-charcoal/40 tracking-[0.08em] normal-case hover:border-champagne hover:text-champagne px-0 py-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-xs",
  lg: "px-9 py-4.5 text-sm",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({ variant = "solid", size = "md", children, className, ...props }: ButtonProps) {
  const classes = cn(base, variant !== "text" && sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
