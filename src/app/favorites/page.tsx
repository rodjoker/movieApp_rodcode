"use client";

import { useFavoritesStore } from "@/store/favoritesStore";
import { MovieGrid } from "@/components/movie/MovieGrid";

export default function FavoritesPage() {
  const { favorites } = useFavoritesStore();

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Mis favoritos</h2>
      {favorites.length === 0 ? (
        <p className="text-zinc-400">Aún no tienes favoritos. Agrega películas desde la pantalla principal.</p>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </div>
  );
}
