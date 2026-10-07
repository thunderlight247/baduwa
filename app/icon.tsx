import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#221609",
          borderRadius: 7,
          color: "#D9B26E",
          fontSize: 20,
          fontStyle: "italic",
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
