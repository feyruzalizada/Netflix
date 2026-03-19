"use client";
import type { Content } from "@/lib/types";
import React from "react";

interface ContentCardProps {
  content: Content;
}

export function ContentCard({ content }: ContentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded cursor-pointer transition transform hover:scale-105">
      <img
        src={content.thumbnail}
        alt={content.title}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
        <h3 className="text-white font-bold text-sm mb-1">{content.title}</h3>
        <p className="text-gray-300 text-xs line-clamp-2 mb-2">{content.description}</p>
        <div className="flex items-center justify-between text-xs">
          <div className="flex gap-2">
            <span className="bg-red-600 text-white px-2 py-1 rounded">{content.genre}</span>
            <span className="bg-gray-700 text-gray-200 px-2 py-1 rounded">{content.quality}</span>
          </div>
          <span className="text-yellow-400 font-semibold">★ {content.rating}</span>
        </div>
      </div>
      {content.trending && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          Trending
        </div>
      )}
    </div>
  );
}
