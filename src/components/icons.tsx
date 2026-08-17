import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconAward(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.5" r="5.2" />
      <path d="M8.3 12.9 7 21l5-2.6L17 21l-1.3-8.1" />
    </svg>
  );
}

export function IconChat(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 13.7 9.6 20.6 11.3 13.7 13 12 20 10.3 13 3.4 11.3 10.3 9.6Z" />
    </svg>
  );
}

export function IconWand(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 19 12-12" />
      <path d="M14 4h2m2 2v2M4 14v2m2 2h2M18 15h2m0 2v2" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 5 6.2v5.4c0 4.6 3 7.5 7 9.4 4-1.9 7-4.8 7-9.4V6.2Z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.2C5.6 15.6 3 11.7 3 8.4 3 5.6 5.2 3.4 8 3.4c1.7 0 3.2 0.9 4 2.3 0.8-1.4 2.3-2.3 4-2.3 2.8 0 5 2.2 5 5 0 3.3-2.6 7.2-9 11.8Z" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.8 14.9 9 21.8 10 16.9 14.6 18.1 21.5 12 18.2 5.9 21.5 7.1 14.6 2.2 10 9.1 9Z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 3.5 9 5.9c.5.5.5 1.5 0 2.1L7.6 9.4c.9 2.6 2.9 4.6 5.5 5.5l1.4-1.4c.6-.5 1.6-.5 2.1 0l2.4 2.4c.6.6.6 1.6 0 2.2l-1.2 1.2c-.7.7-1.8 1-2.8.7-4.4-1.3-9-5.9-10.3-10.3-.3-1 0-2.1.7-2.8l1.2-1.2c.6-.6 1.6-.6 2 0Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" />
      <path d="m4.5 6.5 7.5 6 7.5-6" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21.5S5.5 15.4 5.5 10a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11.5-6.5 11.5Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.6" cy="7.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="1.6" />
      <path d="M3.5 10h17M8 3.5v4M16 3.5v4" />
    </svg>
  );
}

export function IconNavigation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m12 2 8 18-8-4-8 4 8-18Z" />
    </svg>
  );
}

export const whyChooseUsIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  award: IconAward,
  chat: IconChat,
  sparkle: IconSparkle,
  wand: IconWand,
  shield: IconShield,
  heart: IconHeart,
};
