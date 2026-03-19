import type { GeoData } from "@/lib/types";

interface GeoStatusProps {
  geo: GeoData;
  region: string;
}

export function GeoStatus({ geo, region }: GeoStatusProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 mb-8 flex flex-wrap items-center gap-4 text-sm">
      <span className="flex items-center gap-2 text-green-400">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Edge Connected
      </span>
      <span className="text-gray-400">
        Region: <span className="text-white font-semibold">{region}</span>
      </span>
      <span className="text-gray-400">
        Country: <span className="text-white font-semibold">{geo.country}</span>
      </span>
      <span className="text-gray-400">
        Edge Node: <span className="text-white font-semibold">{geo.edge}</span>
      </span>
      <span className="text-gray-400">
        Latency: <span className="text-green-400 font-semibold">{geo.latency}ms</span>
      </span>
    </div>
  );
}
