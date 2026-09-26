import { ImageResponse } from "next/og";

export const alt = "FreeGoTV premium streaming";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "linear-gradient(135deg, #111111 0%, #1a151a 58%, #4a1020 100%)", color: "white", display: "flex", height: "100%", justifyContent: "center", width: "100%" }}>
      <div style={{ alignItems: "center", display: "flex", flexDirection: "column", textAlign: "center" }}>
        <div style={{ alignItems: "center", display: "flex", fontSize: 72, fontWeight: 900, letterSpacing: -3 }}><span style={{ alignItems: "center", background: "#ff1744", borderRadius: 22, display: "flex", height: 94, justifyContent: "center", marginRight: 24, width: 94 }}>F</span>FreeGo<span style={{ color: "#ff4568" }}>TV</span></div>
        <div style={{ color: "#d4d4d8", display: "flex", fontSize: 34, marginTop: 38 }}>Premium streaming, clearly connected.</div>
      </div>
    </div>,
    size,
  );
}
