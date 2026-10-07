import type { ReactElement } from "react";

/**
 * Shared visual for every route's generated Open Graph image.
 * Kept font-free (system sans) so it renders identically wherever
 * the image is built, with no external font fetch required.
 */
export function ogTemplate(eyebrow: string, title: string): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#221609",
        backgroundImage:
          "radial-gradient(circle at 85% 20%, rgba(176,129,58,0.35), transparent 45%), radial-gradient(circle at 10% 85%, rgba(140,90,56,0.3), transparent 50%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: 999,
            backgroundColor: "#D9B26E",
          }}
        />
        <span
          style={{
            fontSize: 28,
            color: "#D9B26E",
            fontStyle: "italic",
            letterSpacing: 1,
          }}
        >
          {eyebrow}
        </span>
      </div>

      <div
        style={{
          marginTop: 28,
          fontSize: 64,
          color: "#F8F2E7",
          lineHeight: 1.1,
          maxWidth: 920,
          display: "flex",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: 48,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 32, color: "#F8F2E7", fontStyle: "italic" }}>
          Baduwa
        </span>
        <span style={{ fontSize: 32, color: "#B0813A", fontStyle: "italic" }}>
          Locs &amp; Naturals
        </span>
        <span style={{ fontSize: 22, color: "rgba(248,242,231,0.6)", marginLeft: 8 }}>
          Beach Road, Sekondi-Takoradi
        </span>
      </div>
    </div>
  );
}

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
