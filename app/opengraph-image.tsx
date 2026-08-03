import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/seo.config";

export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #030303 70%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Glow Effect */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            width: "600px",
            height: "300px",
            background: "rgba(99, 102, 241, 0.25)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "9999px",
            fontSize: "14px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a5b4fc",
            marginBottom: "24px",
          }}
        >
          {SITE_CONFIG.tagline}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "1000px",
            background: "linear-gradient(to bottom right, #ffffff, #94a3b8)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "20px",
          }}
        >
          {SITE_CONFIG.name}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            textAlign: "center",
            color: "#94a3b8",
            maxWidth: "850px",
            lineHeight: 1.4,
          }}
        >
          Full-Stack Web, Mobile Apps, Custom AI Systems &amp; IoT Engineering
        </div>

        {/* Footer info */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "60px",
            right: "60px",
            display: "flex",
            justifyContent: "space-between",
            width: "1080px",
            fontSize: "16px",
            color: "#64748b",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "20px",
          }}
        >
          <span>queryholic.in</span>
          <span>Chennai, India · Global Delivery</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
