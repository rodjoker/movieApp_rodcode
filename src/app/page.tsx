"use client";

import { useTrending, usePopular } from "@/hooks/useMovies";
import { MovieGrid } from "@/components/movie/MovieGrid";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default function HomePage() {
  const trending = useTrending();
  const popular = usePopular();

  return (
    <div className="flex flex-col gap-12">
      <section>
        <h2 className="mb-6 text-2xl font-bold">Tendencias de la semana</h2>
        {trending.isError ? (
          <ErrorMessage />
        ) : (
          <MovieGrid movies={trending.data?.results} isLoading={trending.isLoading} />
        )}
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold">Populares</h2>
        {popular.isError ? (
          <ErrorMessage />
        ) : (
          <MovieGrid movies={popular.data?.results} isLoading={popular.isLoading} />
        )}
      </section>
    </div>
  );
}
