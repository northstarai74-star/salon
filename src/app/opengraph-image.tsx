import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Lumière Hair & Beauty Studio — Where Your Best Look Begins";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#211d1a",
          backgroundImage: "linear-gradient(135deg, #211d1a 0%, #322c27 55%, #7c6c5a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 90,
            height: 1,
            backgroundColor: "#c6a15b",
            marginBottom: 28,
          }}
        />
        <div style={{ display: "flex", fontSize: 92, letterSpacing: 14, color: "#faf7f2" }}>LUMIERE</div>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#e6d3ae", marginTop: 22 }}>
          HAIR &amp; BEAUTY STUDIO
        </div>
        <div
          style={{
            display: "flex",
            width: 90,
            height: 1,
            backgroundColor: "#c6a15b",
            marginTop: 28,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
