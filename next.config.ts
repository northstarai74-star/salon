import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography ships as trusted, locally-generated SVG until
    // real salon photography replaces it; safe to allow since no external
    // or user-supplied SVGs are ever served through this path.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
