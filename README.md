# Welcome to 03 Edge Computing Streaming
***

## Task
Build a Netflix-style streaming platform with Next.js that demonstrates edge computing, React Suspense streaming, Server-Sent Events (SSE), and global performance monitoring — the same techniques Netflix uses to serve 250+ million subscribers worldwide.

## Description
Built with Next.js 16 App Router. Three edge API routes handle geo-aware content delivery, live SSE event streams, and real-time performance metrics. The homepage uses React Suspense with a Server Component (`RegionalContentServer`) that reads geo headers and streams location-personalized content progressively — skeleton loaders appear instantly, then real content replaces them. The `/dashboard` page combines all three systems: a Suspense-streamed geo panel, a live SSE feed powered by `EventSource` with auto-reconnect logic, and a performance monitor polling Core Web Vitals every 4 seconds with a TTFB sparkline.

## Architecture

```
app/
  page.tsx                         # Home — Suspense + edge geo row + content rows
  dashboard/page.tsx               # Dashboard — SSE + metrics + edge geo
  api/
    geo/route.ts                   # Edge: geo detection + regional recommendations
    stream/route.ts                # Edge: SSE live event generator
    metrics/route.ts               # Edge: Core Web Vitals + CDN stats
  components/
    content/                       # ContentCard, ContentRow, FeaturedContent
    streaming/                     # RegionalContentServer (Server Component), GeoStatus,
    │                              #   RegionalContent, LiveEventFeed, ContentSkeleton
    metrics/                       # PerformanceMonitor (auto-refresh, sparkline)
    ui/                            # Header (navigation), ErrorBoundary
lib/
  types.ts                         # Shared TypeScript interfaces
  geo.ts                           # Header parsing + region mapping
data/
  content.ts                       # Mock Netflix content catalogue
```

## Key Concepts Demonstrated

| Concept | Implementation |
|---|---|
| Edge Runtime | `export const runtime = "edge"` on all 3 API routes |
| Server Components | `RegionalContentServer` reads `headers()` on the server |
| React Suspense | `<Suspense fallback={<Skeleton />}>` wraps server components |
| Progressive loading | Skeleton → real content via streaming SSR |
| Server-Sent Events | `/api/stream` streams JSON events; client uses `EventSource` |
| SSE reconnection | `onerror` handler retries after 3 s |
| Edge caching | `Cache-Control: s-maxage=60, stale-while-revalidate` on geo route |
| Performance monitoring | `/api/metrics` returns TTFB/FCP/LCP/CLS; `PerformanceMonitor` polls every 4 s |

## Installation
```
npm install
```

## Usage
```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to browse content.
Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to see live edge metrics and SSE stream.

### The Core Team

<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
