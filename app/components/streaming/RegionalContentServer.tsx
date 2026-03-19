import { headers } from "next/headers";
import { getGeoFromHeaders, getRegionLabel } from "@/lib/geo";
import { allContent } from "@/data/content";
import { RegionalContent } from "./RegionalContent";

const regionContentMap: Record<string, string[]> = {
  "North America": ["Action", "Sci-Fi", "Thriller"],
  "Europe": ["Drama", "Romance", "Thriller"],
  "Asia Pacific": ["Action", "Drama", "Sci-Fi"],
  "Latin America": ["Romance", "Action", "Drama"],
  "Global": ["Action", "Drama", "Sci-Fi"],
};

export async function RegionalContentServer() {
  const headerList = await headers();
  const geo = getGeoFromHeaders(headerList);
  const region = getRegionLabel(geo.country);
  const genres = regionContentMap[region] ?? regionContentMap["Global"];
  const recommended = allContent.filter((c) => genres.includes(c.genre)).slice(0, 6);

  return <RegionalContent geo={geo} region={region} recommended={recommended} />;
}
