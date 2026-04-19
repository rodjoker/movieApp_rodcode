"use client";

import { useFavoritesStore } from "@/store/favoritesStore";
import type { Movie } from "@/types/tmdb";

interface Props {
  movie: Movie;
  className?: string;
}

export function FavoriteButton({ movie, className = "" }: Props) {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();
  const active = isFavorite(movie.id);

  return (
    <button
      onClick={() => (active ? removeFavorite(movie.id) : addFavorite(movie))}
      aria-label={active ? "Quitar de favoritos" : "Agregar a favoritos"}
      className={`rounded-full bg-black/60 p-1.5 text-lg transition-colors hover:bg-black/80 ${className}`}
    >
      {active ? "❤️" : "🤍"}
    </button>
  );
}
