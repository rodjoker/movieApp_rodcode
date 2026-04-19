import type { Metadata } from "next";
import { tmdbService } from "@/lib/tmdbService";
import { getImageUrl } from "@/lib/tmdb";
import Image from "next/image";
import { MovieDetailClient } from "./MovieDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const movie = await tmdbService.getMovieDetail(Number(id));
    return {
      title: `${movie.title} | MovieApp`,
      description: movie.overview,
    };
  } catch {
    return { title: "Película | MovieApp" };
  }
}

export default async function MovieDetailPage({ params }: Props) {
  const { id } = await params;
  const movie = await tmdbService.getMovieDetail(Number(id));

  return (
    <div>
      {movie.backdrop_path && (
        <div className="relative -mx-4 -mt-8 mb-8 h-64 overflow-hidden sm:h-80 md:h-96">
          <Image
            src={getImageUrl(movie.backdrop_path, "w780")}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>
      )}

      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="relative mx-auto h-72 w-48 shrink-0 overflow-hidden rounded-xl sm:mx-0">
          <Image
            src={getImageUrl(movie.poster_path, "w342")}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          {movie.tagline && <p className="italic text-zinc-400">{movie.tagline}</p>}
          <div className="flex flex-wrap gap-2">
            {movie.genres.map((g) => (
              <span key={g.id} className="rounded-full bg-zinc-800 px-3 py-1 text-xs">
                {g.name}
              </span>
            ))}
          </div>
          <div className="flex gap-4 text-sm text-zinc-400">
            <span>{movie.release_date?.slice(0, 4)}</span>
            {movie.runtime && <span>{movie.runtime} min</span>}
            <span className="font-bold text-yellow-400">{movie.vote_average.toFixed(1)}</span>
          </div>
          <p className="max-w-2xl leading-relaxed text-zinc-300">{movie.overview}</p>
        </div>
      </div>

      <MovieDetailClient movieId={Number(id)} movie={movie} />
    </div>
  );
}
