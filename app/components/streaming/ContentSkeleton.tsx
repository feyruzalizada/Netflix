export function ContentCardSkeleton() {
  return (
    <div className="flex-shrink-0 w-64 sm:w-80 rounded overflow-hidden animate-pulse bg-gray-800/60 bg-gray-800/60">
      <div className="bg-gray-800 w-full h-44" />
      <div className="bg-gray-900 p-3 space-y-2">
        <div className="bg-gray-700 h-4 rounded w-3/4" />
        <div className="bg-gray-700 h-3 rounded w-full" />
        <div className="bg-gray-700 h-3 rounded w-1/2" />
      </div>
    </div>
  );
}

export function ContentRowSkeleton({ label }: { label: string }) {
  return (
    <section className="mb-8">
      <h2 className="text-white text-2xl font-bold mb-4 px-4">{label}</h2>
      <div className="flex gap-4 overflow-hidden px-4 pb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <ContentCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

export function FeaturedSkeleton() {
  return (
    <div className="relative h-96 mb-12 rounded-lg overflow-hidden animate-pulse bg-gray-800/60 bg-gray-800/60 bg-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/60 to-transparent flex flex-col justify-center p-8">
        <div className="max-w-2xl space-y-4">
          <div className="bg-gray-700 h-12 rounded w-2/3" />
          <div className="bg-gray-700 h-4 rounded w-full" />
          <div className="bg-gray-700 h-4 rounded w-4/5" />
          <div className="flex gap-4 mt-6">
            <div className="bg-gray-600 h-12 w-28 rounded" />
            <div className="bg-gray-700 h-12 w-32 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function GeoStatusSkeleton() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-8 animate-pulse bg-gray-800/60 bg-gray-800/60">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-gray-700 rounded-full" />
        <div className="bg-gray-700 h-4 rounded w-48" />
        <div className="ml-auto bg-gray-700 h-4 rounded w-24" />
      </div>
    </div>
  );
}
