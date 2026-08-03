import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/seo.config";
import { SERVICES_DATA } from "@/lib/services-data";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  const title = service ? service.title : "Custom Software Solutions";
  const desc = service ? service.metaDescription : SITE_CONFIG.defaultDescription;

  return new ImageResponse(
    (
      <div
        style={{
          background: "radial-gradient(circle at 50% 0%, #1e1b4b 0%, #030303 75%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "50px",
            width: "500px",
            height: "400px",
            background: "rgba(99, 102, 241, 0.2)",
            filter: "blur(90px)",
            borderRadius: "50%",
          }}
        />

        {/* Top brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              padding: "6px 16px",
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#a5b4fc",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {SITE_CONFIG.name} · Services
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "950px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              background: "linear-gradient(to right, #ffffff, #c7d2fe)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              lineHeight: 1.4,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              overflow: "hidden",
            }}
          >
            {desc}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            fontSize: "16px",
            color: "#64748b",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <span>https://queryholic.in/services/{slug}</span>
          <span>Enterprise &amp; Startup Technology Partner</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
