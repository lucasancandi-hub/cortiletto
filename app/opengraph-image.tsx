import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
          gap: 28,
          backgroundColor: "#0b0a08",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(201,162,74,0.25), transparent 55%), radial-gradient(circle at 85% 80%, rgba(138,51,36,0.25), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 64,
            height: 64,
            borderRadius: "50%",
            border: "2px solid #c9a24a",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 92,
            letterSpacing: 6,
            color: "#f3ecdf",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#c9a24a",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#a89a86",
          }}
        >
          {siteConfig.address.full}
        </div>
      </div>
    ),
    { ...size }
  );
}
