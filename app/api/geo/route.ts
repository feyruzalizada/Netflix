import { headers } from "next/headers";
import { getGeoFromHeaders } from "@/lib/geo";
import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  const headerList = await headers();
  const geo = getGeoFromHeaders(headerList);
  return NextResponse.json(geo, {
    headers: {
      "Cache-Control": "no-store",
      "X-Edge-Region": geo.edge,
    },
  });
}
