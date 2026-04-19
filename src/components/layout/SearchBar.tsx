"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar películas..."
        className="w-full rounded-full bg-zinc-800 px-4 py-1.5 text-sm text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </form>
  );
}
