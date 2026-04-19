"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "@/types/tmdb";

interface FavoritesState {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (movie) =>
        set((s) => ({ favorites: [...s.favorites, movie] })),
      removeFavorite: (id) =>
        set((s) => ({ favorites: s.favorites.filter((m) => m.id !== id) })),
      isFavorite: (id) => get().favorites.some((m) => m.id === id),
    }),
    { name: "movie-app-favorites" }
  )
);
