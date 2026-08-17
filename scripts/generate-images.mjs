#!/usr/bin/env node
/**
 * Generates elegant, on-brand SVG placeholder photography for the salon site.
 * Real photography should replace these 1:1 by filename before production launch.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "images");
mkdirSync(OUT_DIR, { recursive: true });

const PALETTE = {
  ivory: "#faf7f2",
  ivoryDim: "#f3ede3",
  charcoal: "#211d1a",
  charcoalSoft: "#322c27",
  beige: "#e9ddcd",
  taupe: "#a4917d",
  taupeDark: "#7c6c5a",
  champagne: "#c6a15b",
  champagneSoft: "#e6d3ae",
};

const GRADIENTS = [
  { from: PALETTE.charcoal, to: PALETTE.taupeDark, light: false },
  { from: PALETTE.taupeDark, to: PALETTE.taupe, light: false },
  { from: PALETTE.taupe, to: PALETTE.beige, light: true },
  { from: PALETTE.champagneSoft, to: PALETTE.ivoryDim, light: true },
  { from: PALETTE.charcoalSoft, to: PALETTE.champagne, light: false },
  { from: PALETTE.beige, to: PALETTE.champagneSoft, light: true },
  { from: PALETTE.charcoal, to: PALETTE.charcoalSoft, light: false },
];

const ICONS = {
  scissors:
    '<circle cx="6" cy="6" r="2.1"/><circle cx="6" cy="18" r="2.1"/><line x1="7.6" y1="7.3" x2="20" y2="17.5"/><line x1="7.6" y1="16.7" x2="20" y2="6.5"/>',
  droplet:
    '<path d="M12 3.2c0 0-6.4 8-6.4 12.1a6.4 6.4 0 1 0 12.8 0C18.4 11.2 12 3.2 12 3.2Z"/>',
  sparkle:
    '<path d="M12 2.6 13.7 9.6 20.6 11.3 13.7 13 12 20 10.3 13 3.4 11.3 10.3 9.6Z"/>',
  ring:
    '<path d="M12 19.8C4.6 14.2 2.4 9.6 6 6.4c2.4-2.1 5-0.6 6 1.7 1-2.3 3.6-3.8 6-1.7 3.6 3.2 1.4 7.8-6 13.4Z"/>',
  comb: '<path d="M5 4v16M9 4v10.5M13 4v10.5M17 4v10.5M5 4h12"/>',
  mirror:
    '<circle cx="12" cy="9.2" r="6.1"/><line x1="12" y1="15.3" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/>',
  camera:
    '<rect x="3" y="7" width="18" height="13" rx="2.2"/><path d="M8 7 9.8 4h4.4L16 7"/><circle cx="12" cy="13.6" r="3.4"/>',
  instagram:
    '<rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="16.3" cy="7.7" r="0.7" fill="currentColor" stroke="none"/>',
  heart:
    '<path d="M12 20.2C5.6 15.6 3 11.7 3 8.4 3 5.6 5.2 3.4 8 3.4c1.7 0 3.2 0.9 4 2.3 0.8-1.4 2.3-2.3 4-2.3 2.8 0 5 2.2 5 5 0 3.3-2.6 7.2-9 11.8Z"/>',
  leaf: '<path d="M4 20c8-1 13-6 15-15C10 6 5 11 4 20Z"/><path d="M4 20c2-4.5 5.5-8 11.5-12"/>',
};

function escapeXml(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

let uid = 0;
function svgPlaceholder({ width, height, label, tag, icon = "sparkle", gradient }) {
  uid += 1;
  const gid = `g${uid}`;
  const fid = `f${uid}`;
  const g = gradient ?? GRADIENTS[uid % GRADIENTS.length];
  const ink = g.light ? PALETTE.charcoal : PALETTE.ivory;
  const accent = g.light ? PALETTE.taupeDark : PALETTE.champagneSoft;
  const iconPath = ICONS[icon] ?? ICONS.sparkle;
  const fontSize = Math.max(15, Math.round(width * 0.026));
  const tagSize = Math.max(10, Math.round(width * 0.013));
  const iconSize = Math.round(Math.min(width, height) * 0.09);
  const cx = width / 2;
  const cy = height / 2 - fontSize * 0.6;

  const safeLabel = escapeXml(label);
  const safeTag = escapeXml((tag ?? "LUMIÈRE STUDIO").toUpperCase());

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${safeLabel}">
  <defs>
    <linearGradient id="${gid}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${g.from}"/>
      <stop offset="100%" stop-color="${g.to}"/>
    </linearGradient>
    <filter id="${fid}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="${Math.round(width * 0.05)}"/>
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="${g.to}"/>
  <rect width="${width}" height="${height}" fill="url(#${gid})"/>
  <g filter="url(#${fid})" opacity="0.35">
    <circle cx="${width * 0.16}" cy="${height * 0.18}" r="${width * 0.16}" fill="${accent}"/>
    <circle cx="${width * 0.86}" cy="${height * 0.82}" r="${width * 0.2}" fill="${g.from}"/>
    <circle cx="${width * 0.78}" cy="${height * 0.14}" r="${width * 0.1}" fill="${PALETTE.ivory}" opacity="0.5"/>
  </g>
  <rect x="${width * 0.028}" y="${height * 0.028}" width="${width * 0.944}" height="${height * 0.944}" fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="1.5"/>
  <g transform="translate(${cx - iconSize / 2}, ${cy - iconSize * 1.15}) scale(${iconSize / 24})" fill="none" stroke="${accent}" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
    ${iconPath}
  </g>
  <text x="${cx}" y="${cy + fontSize * 0.9}" font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}" fill="${ink}" text-anchor="middle" letter-spacing="${fontSize * 0.04}">${safeLabel}</text>
  <text x="${width * 0.05}" y="${height * 0.95}" font-family="Helvetica, Arial, sans-serif" font-size="${tagSize}" fill="${accent}" letter-spacing="${tagSize * 0.22}" text-transform="uppercase">${safeTag}</text>
  <text x="${width * 0.95}" y="${height * 0.95}" font-family="Helvetica, Arial, sans-serif" font-size="${tagSize}" fill="${accent}" text-anchor="end" letter-spacing="${tagSize * 0.22}">${width}×${height}</text>
</svg>`;
}

function write(name, opts) {
  const svg = svgPlaceholder(opts);
  writeFileSync(join(OUT_DIR, `${name}.svg`), svg, "utf8");
}

// ---- Hero ----
write("hero-salon", {
  width: 2000,
  height: 1250,
  label: "LUMIÈRE HAIR & BEAUTY STUDIO",
  tag: "Flagship Atelier — Madison Avenue",
  icon: "sparkle",
  gradient: GRADIENTS[0],
});

// ---- Services (category grid) ----
const services = [
  ["service-haircuts-styling", "Haircuts & Styling", "scissors"],
  ["service-hair-colour", "Hair Colour", "droplet"],
  ["service-highlights-balayage", "Highlights & Balayage", "sparkle"],
  ["service-hair-treatments", "Hair Treatments", "leaf"],
  ["service-bridal-occasion", "Bridal & Occasion", "ring"],
  ["service-beauty-services", "Beauty Services", "heart"],
];
services.forEach(([name, label, icon], i) =>
  write(name, { width: 1000, height: 1250, label, tag: "Service", icon, gradient: GRADIENTS[i % GRADIENTS.length] })
);

// ---- Featured / signature editorial ----
const featured = [
  ["featured-signature-balayage", "Signature Balayage", "sparkle", 1400, 1750],
  ["featured-precision-haircut", "Precision Haircut", "scissors", 1750, 1300],
  ["featured-luxury-treatment", "Luxury Hair Treatment", "leaf", 1400, 1750],
  ["featured-bridal-styling", "Bridal Styling", "ring", 1750, 1300],
];
featured.forEach(([name, label, icon, w, h], i) =>
  write(name, { width: w, height: h, label, tag: "Signature Edit", icon, gradient: GRADIENTS[(i + 2) % GRADIENTS.length] })
);

// ---- Gallery ----
const galleryCats = [
  ["haircut", "Haircuts", "scissors"],
  ["colour", "Colour", "droplet"],
  ["styling", "Styling", "comb"],
  ["bridal", "Bridal", "ring"],
];
galleryCats.forEach(([slug, label, icon], ci) => {
  for (let i = 1; i <= 4; i += 1) {
    const portrait = i % 2 === 0;
    write(`gallery-${slug}-${String(i).padStart(2, "0")}`, {
      width: portrait ? 1000 : 1200,
      height: portrait ? 1300 : 1000,
      label: `${label} ${String(i).padStart(2, "0")}`,
      tag: "Our Work",
      icon,
      gradient: GRADIENTS[(ci + i) % GRADIENTS.length],
    });
  }
});

// ---- Before / After ----
const beforeAfter = [
  ["01", "Sun-Kissed Balayage", "sparkle"],
  ["02", "Colour Correction", "droplet"],
  ["03", "Precision Bob Restyle", "scissors"],
  ["04", "Bridal Updo Reveal", "ring"],
];
beforeAfter.forEach(([id, label, icon], i) => {
  write(`before-after-${id}-before`, {
    width: 1000,
    height: 1250,
    label: `${label} — Before`,
    tag: "Before",
    icon,
    gradient: GRADIENTS[(i + 6) % GRADIENTS.length],
  });
  write(`before-after-${id}-after`, {
    width: 1000,
    height: 1250,
    label: `${label} — After`,
    tag: "After",
    icon,
    gradient: GRADIENTS[(i + 3) % GRADIENTS.length],
  });
});

// ---- Stylists ----
const stylists = ["stylist-01", "stylist-02", "stylist-03", "stylist-04", "stylist-05"];
const stylistNames = ["Aria Chen", "Marcus Webb", "Sofia Moreau", "Elena Petrova", "Noah Bennett"];
stylists.forEach((name, i) =>
  write(name, {
    width: 1000,
    height: 1250,
    label: stylistNames[i],
    tag: "Lumière Team",
    icon: "mirror",
    gradient: GRADIENTS[(i + 1) % GRADIENTS.length],
  })
);

// ---- Salon interior ----
const interiors = [
  ["salon-interior-01", "Reception & Lounge"],
  ["salon-interior-02", "Styling Studio"],
  ["salon-interior-03", "Colour & Treatment Room"],
];
interiors.forEach(([name, label], i) =>
  write(name, {
    width: 1800,
    height: 1150,
    label,
    tag: "The Studio",
    icon: "mirror",
    gradient: GRADIENTS[(i + 4) % GRADIENTS.length],
  })
);

// ---- Social gallery ----
for (let i = 1; i <= 8; i += 1) {
  write(`social-${String(i).padStart(2, "0")}`, {
    width: 900,
    height: 900,
    label: `@lumiere.studio`,
    tag: "Instagram",
    icon: "instagram",
    gradient: GRADIENTS[i % GRADIENTS.length],
  });
}

console.log("Generated placeholder imagery in public/images");
