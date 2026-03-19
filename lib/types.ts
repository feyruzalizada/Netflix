export type Genre = "Action" | "Drama" | "Comedy" | "Thriller" | "Sci-Fi" | "Horror" | "Romance";

export type Quality = "4K" | "1080p" | "720p";

export interface Content {
  id: string;
  title: string;
  description: string;
  genre: Genre;
  year: number;
  rating: number;
  duration: string;
  thumbnail: string;
  quality: Quality;
  trending: boolean;
  subtitle?: string;
}

export interface GeoData {
  country: string;
  region: string;
  city: string;
  edge: string;
  latency: number;
}

export interface StreamEvent {
  type: "view" | "like" | "join" | "quality";
  user: string;
  content: string;
  timestamp: string;
  region: string;
}

export interface MetricData {
  ttfb: number;
  fcp: number;
  lcp: number;
  region: string;
  edge: string;
  requests: number;
  cacheHit: number;
}

export type ContentRow = {
  label: string;
  items: Content[];
};
