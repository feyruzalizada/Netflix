import { NextRequest, NextResponse } from "next/server";
import { getGeoFromHeaders, getRegionLabel } from "@/lib/geo";
import { allContent } from "@/data/content";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const geo = getGeoFromHeaders(request.headers);
  const regionLabel = getRegionLabel(geo.country);

  const regionContentMap: Record<string, string[]> = {
    "North America": ["Action", "Sci-Fi", "Thriller"],
    "Europe": ["Drama", "Romance", "Thriller"],
    "Asia Pacific": ["Action", "Drama", "Sci-Fi"],
    "Latin America": ["Romance", "Action", "Drama"],
    "Global": ["Action", "Drama", "Sci-Fi"],
  };

  const preferredGenres = regionContentMap[regionLabel] ?? regionContentMap["Global"];
  const recommended = allContent.filter((c) => preferredGenres.includes(c.genre)).slice(0, 6);

  const cacheKey = `${geo.country}-${geo.region}`;

  return NextResponse.json(
    {
      geo,
      region: regionLabel,
      recommended,
      cacheKey,
      servedAt: new Date().toISOString(),
      edgeOptimized: true,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        "CDN-Cache-Control": "public, s-maxage=60",
        "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
        "X-Edge-Region": geo.edge,
        "X-Content-Country": geo.country,
      },
    }
  );
}
