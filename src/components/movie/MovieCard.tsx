"use client";

import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/lib/tmdb";
import type { Movie } from "@/types/tmdb";
import { FavoriteButton } from "./FavoriteButton";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="group relative flex flex-col gap-2">
      <Link href={`/movie/${movie.id}`} className="block overflow-hidden rounded-lg">
        <div className="relative aspect-[2/3] w-full bg-zinc-800">
          <Image
            src={getImageUrl(movie.poster_path, "w342")}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="absolute bottom-2 left-2 rounded bg-yellow-500 px-1.5 py-0.5 text-xs font-bold text-black opacity-0 transition-opacity group-hover:opacity-100">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </Link>
      <FavoriteButton movie={movie} className="absolute right-2 top-2" />
      <Link href={`/movie/${movie.id}`}>
        <p className="line-clamp-1 text-sm font-medium text-white hover:text-yellow-400">
          {movie.title}
        </p>
      </Link>
      <p className="text-xs text-zinc-400">{movie.release_date?.slice(0, 4)}</p>
    </div>
  );
}
