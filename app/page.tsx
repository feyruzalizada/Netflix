import { Suspense } from "react";
import { Header } from "./components/ui/Header";
import { FeaturedContent } from "./components/content/FeaturedContent";
import { ContentRow } from "./components/content/ContentRow";
import { ErrorBoundary } from "./components/ui/ErrorBoundary";
import { RegionalContentServer } from "./components/streaming/RegionalContentServer";
import { GeoStatusSkeleton, ContentRowSkeleton, FeaturedSkeleton } from "./components/streaming/ContentSkeleton";
import { contentRows, featured } from "@/data/content";

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="bg-black min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">

          {/* Hero banner */}
          <Suspense fallback={<FeaturedSkeleton />}>
            <FeaturedContent content={featured} />
          </Suspense>

          {/* Location-aware row via Suspense + Server Component */}
          <Suspense
            fallback={
              <>
                <GeoStatusSkeleton />
                <ContentRowSkeleton label="Top Picks for Your Region" />
              </>
            }
          >
            <RegionalContentServer key="regional" />
          </Suspense>

          {/* Standard content rows */}
          {contentRows.map((row) => (
            <ContentRow key={row.label} row={row} />
          ))}

        </main>
      </div>
    </ErrorBoundary>
  );
}
