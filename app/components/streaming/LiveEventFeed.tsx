"use client";
import React from "react";

interface StreamEvent {
  type: string;
  user: string;
  content: string;
  timestamp: string;
  region: string;
  viewers?: number;
}

const regionFlags: Record<string, string> = {
  "us-east-1": "🇺🇸",
  "eu-west-1": "🇪🇺",
  "ap-northeast-1": "🇯🇵",
  "sa-east-1": "🇧🇷",
  "ap-southeast-2": "🇦🇺",
};

const eventIcons: Record<string, string> = {
  view: "▶",
  like: "♥",
  join: "→",
  quality: "⬆",
};

export function LiveEventFeed() {
  const [events, setEvents] = React.useState<StreamEvent[]>([]);
  const [connected, setConnected] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const feedRef = React.useRef<HTMLDivElement>(null);
  const esRef = React.useRef<EventSource | null>(null);
  const mountedRef = React.useRef(true);

  const connect = React.useCallback(() => {
    if (!mountedRef.current) return;
    if (esRef.current) {
      esRef.current.close();
    }

    setError(null);
    const es = new EventSource("/api/stream");
    esRef.current = es;

    es.addEventListener("connected", () => {
      if (mountedRef.current) setConnected(true);
    });

    es.addEventListener("stream", (e: MessageEvent) => {
      if (!mountedRef.current) return;
      const event: StreamEvent = JSON.parse(e.data);
      setEvents((prev) => [event, ...prev].slice(0, 50)); // hard cap to avoid memory growth
    });

    es.addEventListener("done", () => {
      setConnected(false);
      es.close();
    });

    es.onerror = () => {
      if (!mountedRef.current) return;
      setConnected(false);
      setError("Connection lost. Reconnecting...");
      es.close();
      setTimeout(connect, 5000); // increased from 3s to reduce server pressure
    };
  }, []);

  React.useEffect(() => {
    mountedRef.current = true;
    connect();
    return () => {
      mountedRef.current = false;
      esRef.current?.close();
    };
  }, [connect]);

  React.useEffect(() => {
    if (feedRef.current && events.length > 0) {
      feedRef.current.scrollTop = 0;
    }
  }, [events]);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden mb-8">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <h3 className="text-white font-bold text-sm uppercase tracking-wider">
          Live Active Streams
        </h3>
        <div className="flex items-center gap-2">
          {error && <span className="text-yellow-400 text-xs">{error}</span>}
          <span
            className={`flex items-center gap-1.5 text-xs font-medium ${
              connected ? "text-green-400" : "text-gray-500"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                connected ? "bg-green-400 animate-pulse" : "bg-gray-600"
              }`}
            />
            {connected ? "LIVE" : "Connecting…"}
          </span>
        </div>
      </div>

      <div
        ref={feedRef}
        className="overflow-y-auto h-72 divide-y divide-gray-800/50"
      >
        {events.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-600 text-sm">
            Waiting for events…
          </div>
        ) : (
          events.map((ev, i) => (
            <div
              key={`${ev.timestamp}-${i}`}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-800/40 transition text-xs"
            >
              <span className="text-red-500 font-bold w-4 text-center">
                {eventIcons[ev.type] ?? "•"}
              </span>
              <span className="text-gray-300 font-medium w-16 truncate">{ev.user}</span>
              <span className="text-gray-500">{ev.type}</span>
              <span className="text-white truncate flex-1">{ev.content}</span>
              <span className="text-gray-500 ml-auto">
                {regionFlags[ev.region] ?? "🌍"} {ev.region}
              </span>
              {ev.viewers && (
                <span className="text-gray-600 w-16 text-right">
                  {ev.viewers.toLocaleString()} watching
                </span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
