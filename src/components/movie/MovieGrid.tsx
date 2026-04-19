import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "@/components/ui/Skeleton";
import type { Movie } from "@/types/tmdb";

interface Props {
  movies?: Movie[];
  isLoading?: boolean;
  skeletonCount?: number;
}

export function MovieGrid({ movies, isLoading, skeletonCount = 10 }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {isLoading
        ? Array.from({ length: skeletonCount }).map((_, i) => <MovieCardSkeleton key={i} />)
        : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}
