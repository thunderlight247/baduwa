import { ImageResponse } from "next/og";
import { ogTemplate, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return new ImageResponse(ogTemplate("Beach Road, Sekondi-Takoradi", "Professional locs & natural haircare"), { ...size });
}
