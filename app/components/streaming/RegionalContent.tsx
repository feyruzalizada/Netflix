import type { Content, GeoData } from "@/lib/types";
import { ContentCard } from "@/app/components/content/ContentCard";
import { GeoStatus } from "./GeoStatus";
import { LiveEventFeed } from "./LiveEventFeed";

interface RegionalContentProps {
  geo: GeoData;
  region: string;
  recommended: Content[];
}

export function RegionalContent({ geo, region, recommended }: RegionalContentProps) {
  return (
    <div>
      <GeoStatus geo={geo} region={region} />
      <LiveEventFeed />
      <section className="mb-8">
        <h2 className="text-white text-2xl font-bold mb-4 px-4">
          Top Picks for {region}
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4">
          {recommended.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-64 sm:w-80">
              <ContentCard content={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
