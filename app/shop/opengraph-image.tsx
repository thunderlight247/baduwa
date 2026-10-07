import { ImageResponse } from "next/og";
import { ogTemplate, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return new ImageResponse(ogTemplate("Take the care home", "Products stocked at the salon"), { ...size });
}
