"use client";

import { useSearchParams } from "next/navigation";
import { useSearch } from "@/hooks/useMovies";
import { MovieGrid } from "@/components/movie/MovieGrid";
import { ErrorMessage } from "@/components/ui/ErrorMessage";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const { data, isLoading, isError } = useSearch(query);

  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">
        Resultados para: <span className="text-yellow-400">{query}</span>
      </h2>
      {isError ? (
        <ErrorMessage />
      ) : !isLoading && !data?.results.length ? (
        <p className="text-zinc-400">No se encontraron películas.</p>
      ) : (
        <MovieGrid movies={data?.results} isLoading={isLoading} />
      )}
    </div>
  );
}
