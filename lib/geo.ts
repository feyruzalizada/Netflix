import type { GeoData } from "./types";

export function getGeoFromHeaders(headers: Headers): GeoData {
  return {
    country: headers.get("x-vercel-ip-country") ?? "US",
    region: headers.get("x-vercel-ip-country-region") ?? "CA",
    city: headers.get("x-vercel-ip-city") ?? "San Francisco",
    edge: headers.get("x-vercel-edge-region") ?? "iad1",
    latency: Math.floor(Math.random() * 30) + 5,
  };
}

export function getRegionLabel(country: string): string {
  const map: Record<string, string> = {
    US: "North America",
    CA: "North America",
    MX: "Latin America",
    GB: "Europe",
    JP: "Asia Pacific",
    KR: "Asia Pacific",
    CN: "Asia Pacific",
    AU: "Asia Pacific",
    BR: "Latin America",
    AR: "Latin America",
    DE: "Europe",
    FR: "Europe",
    IT: "Europe",
    AZ: "Europe",
  };
  return map[country] ?? "Global";
}
