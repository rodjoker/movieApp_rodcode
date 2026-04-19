"use client";

import Image from "next/image";
import { useCredits, useVideos } from "@/hooks/useMovies";
import { getImageUrl } from "@/lib/tmdb";
import { Skeleton } from "@/components/ui/Skeleton";
import { FavoriteButton } from "@/components/movie/FavoriteButton";
import type { MovieDetail } from "@/types/tmdb";

interface Props {
  movieId: number;
  movie: MovieDetail;
}

export function MovieDetailClient({ movieId, movie }: Props) {
  const credits = useCredits(movieId);
  const videos = useVideos(movieId);

  const trailer = videos.data?.results.find(
    (v) => v.site === "YouTube" && v.type === "Trailer"
  );

  const topCast = credits.data?.cast.slice(0, 8) ?? [];

  return (
    <div className="mt-8 flex flex-col gap-8">
      <FavoriteButton movie={movie} className="w-fit" />

      {trailer && (
        <section>
          <h2 className="mb-4 text-xl font-bold">Tráiler</h2>
          <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-xl">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              className="h-full w-full"
              allowFullScreen
            />
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-xl font-bold">Reparto</h2>
        {credits.isLoading ? (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex shrink-0 flex-col items-center gap-1">
                <Skeleton className="h-20 w-14 rounded-lg" />
                <Skeleton className="h-3 w-14" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {topCast.map((actor) => (
              <div key={actor.id} className="flex shrink-0 flex-col items-center gap-1 text-center">
                <div className="relative h-20 w-14 overflow-hidden rounded-lg bg-zinc-800">
                  <Image
                    src={getImageUrl(actor.profile_path, "w185")}
                    alt={actor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="w-16 text-xs font-medium leading-tight">{actor.name}</p>
                <p className="w-16 text-xs text-zinc-400 line-clamp-1">{actor.character}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
