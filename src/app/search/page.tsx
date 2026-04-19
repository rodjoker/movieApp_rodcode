import { Suspense } from "react";
import { SearchResults } from "./SearchResults";
import { MovieCardSkeleton } from "@/components/ui/Skeleton";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
