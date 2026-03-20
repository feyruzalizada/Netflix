"use client";
import type { ContentRow as ContentRowType } from "@/lib/types";
import { ContentCard } from "./ContentCard";
import React from "react";

interface ContentRowProps {
  row: ContentRowType;
}

export function ContentRow({ row }: ContentRowProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-white text-2xl font-bold mb-4 px-4">{row.label}</h2>
      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-10 bg-gradient-to-r from-black to-transparent opacity-0 group-hover:opacity-100 transition flex items-center justify-center w-12 h-full hidden sm:flex"
        >
          <span className="text-white text-2xl">‹</span>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {row.items.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-64 sm:w-80">
              <ContentCard content={item} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 bg-gradient-to-l from-black to-transparent opacity-0 group-hover:opacity-100 transition flex items-center justify-center w-12 h-full hidden sm:flex"
        >
          <span className="text-white text-2xl">›</span>
        </button>
      </div>
    </section>
  );
}
