"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-black border-b border-gray-800 px-8 py-4 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition">
          <span className="text-3xl font-black text-red-600">N</span>
          <span className="font-black text-white text-xl tracking-tight">etflix</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition ${pathname === "/" ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`text-sm font-medium transition ${pathname === "/dashboard" ? "text-white" : "text-gray-400 hover:text-white"}`}
          >
            Dashboard
          </Link>
          <button className="text-gray-400 hover:text-white transition text-sm font-medium">
            My List
          </button>
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white text-xs font-bold">
            U
          </div>
        </nav>
      </div>
    </header>
  );
}
