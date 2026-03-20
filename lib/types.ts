export type Genre = "Action" | "Drama" | "Comedy" | "Thriller" | "Sci-Fi" | "Horror" | "Romance";

export type Quality = "4K" | "1080p" | "720p";

export interface Content {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  genre: Genre;
  year: number;
  rating: number;
  duration: string;
  thumbnail: string;
  quality: Quality;
  trending: boolean;
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
  viewers?: number;
}

export type ContentRow = {
  label: string;
  items: Content[];
};
