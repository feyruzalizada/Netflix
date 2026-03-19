"use client";
import type { Content } from "@/lib/types";
import React from "react";

interface FeaturedContentProps {
  content: Content;
}

export function FeaturedContent({ content }: FeaturedContentProps) {
  return (
    <div className="relative h-96 mb-12 overflow-hidden rounded-lg">
      <img
        src={content.thumbnail}
        alt={content.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex flex-col justify-center p-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-black text-white mb-4">{content.title}</h1>
          <p className="text-gray-200 text-lg mb-6 line-clamp-3">{content.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-red-600 text-white px-4 py-2 rounded font-semibold">
              {content.genre}
            </span>
            <span className="text-yellow-400 text-lg font-bold">★ {content.rating}/10</span>
            <span className="text-gray-300">
              {content.year} • {content.duration}
            </span>
            <span className="text-gray-300">{content.quality}</span>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition">
              ▶ Play
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded font-bold hover:bg-gray-700 transition">
              + My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
