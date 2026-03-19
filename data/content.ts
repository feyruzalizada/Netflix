import type { Content, ContentRow } from "@/lib/types";

export const allContent: Content[] = [
  { id: "1", title: "Dark Matter", description: "A physicist wakes up in a world where his life is completely different.", genre: "Sci-Fi", year: 2024, rating: 8.1, duration: "52m", thumbnail: "https://picsum.photos/seed/dark/300/170", quality: "4K", trending: true },
  { id: "2", title: "The Crown", description: "The inside story of two of the most famous addresses in the world.", genre: "Drama", year: 2023, rating: 8.7, duration: "58m", thumbnail: "https://picsum.photos/seed/crown/300/170", quality: "4K", trending: false },
  { id: "3", title: "Extraction 2", description: "A black ops mercenary embarks on a dangerous mission.", genre: "Action", year: 2023, rating: 7.2, duration: "2h 3m", thumbnail: "https://picsum.photos/seed/extraction/300/170", quality: "1080p", trending: true },
  { id: "4", title: "Glass Onion", description: "Eccentric billionaire Miles Bron invites friends to his private island.", genre: "Thriller", year: 2022, rating: 7.1, duration: "2h 19m", thumbnail: "https://picsum.photos/seed/glass/300/170", quality: "4K", trending: false },
  { id: "5", title: "Wednesday", description: "Smart, sarcastic Wednesday Addams investigates murders at her new school.", genre: "Horror", year: 2022, rating: 8.1, duration: "45m", thumbnail: "https://picsum.photos/seed/wednesday/300/170", quality: "4K", trending: true },
  { id: "6", title: "Emily in Paris", description: "An American marketer moves to Paris for an unexpected job opportunity.", genre: "Romance", year: 2023, rating: 6.9, duration: "30m", thumbnail: "https://picsum.photos/seed/emily/300/170", quality: "1080p", trending: false },
  { id: "7", title: "Stranger Things", description: "When a young boy vanishes, a small town uncovers a mystery.", genre: "Sci-Fi", year: 2022, rating: 8.7, duration: "1h 5m", thumbnail: "https://picsum.photos/seed/stranger/300/170", quality: "4K", trending: true },
  { id: "8", title: "Squid Game", description: "Hundreds of cash-strapped players accept a strange invitation.", genre: "Thriller", year: 2021, rating: 8.0, duration: "55m", thumbnail: "https://picsum.photos/seed/squid/300/170", quality: "4K", trending: true },
  { id: "9", title: "The Witcher", description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place.", genre: "Action", year: 2023, rating: 8.2, duration: "1h", thumbnail: "https://picsum.photos/seed/witcher/300/170", quality: "4K", trending: false },
  { id: "10", title: "Ozark", description: "A financial advisor drags his family from Chicago to Missouri.", genre: "Drama", year: 2022, rating: 8.4, duration: "1h", thumbnail: "https://picsum.photos/seed/ozark/300/170", quality: "1080p", trending: false },
  { id: "11", title: "Bridgerton", description: "The Bridgerton family seeks love and limelight in Regency London.", genre: "Romance", year: 2023, rating: 7.3, duration: "1h", thumbnail: "https://picsum.photos/seed/bridgerton/300/170", quality: "4K", trending: false },
  { id: "12", title: "Money Heist", description: "A criminal mastermind plans the most perfect robbery in history.", genre: "Action", year: 2021, rating: 8.3, duration: "45m", thumbnail: "https://picsum.photos/seed/heist/300/170", quality: "1080p", trending: true },
];

export const contentRows: ContentRow[] = [
  { label: "Trending Now", items: allContent.filter((c) => c.trending) },
  { label: "Top in 4K", items: allContent.filter((c) => c.quality === "4K") },
  { label: "Action & Thrillers", items: allContent.filter((c) => c.genre === "Action" || c.genre === "Thriller") },
  { label: "Award Winners", items: allContent.filter((c) => c.rating >= 8.0) },
];

export const featured = allContent[0];
