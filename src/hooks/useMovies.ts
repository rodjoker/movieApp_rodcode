"use client";

import { useQuery } from "@tanstack/react-query";
import { tmdbService } from "@/lib/tmdbService";

export const movieKeys = {
  trending: (page: number) => ["movies", "trending", page] as const,
  popular: (page: number) => ["movies", "popular", page] as const,
  topRated: (page: number) => ["movies", "top-rated", page] as const,
  upcoming: (page: number) => ["movies", "upcoming", page] as const,
  detail: (id: number) => ["movies", "detail", id] as const,
  credits: (id: number) => ["movies", "credits", id] as const,
  videos: (id: number) => ["movies", "videos", id] as const,
  search: (query: string, page: number) => ["movies", "search", query, page] as const,
};

export function useTrending(page = 1) {
  return useQuery({
    queryKey: movieKeys.trending(page),
    queryFn: () => tmdbService.getTrending(page),
  });
}

export function usePopular(page = 1) {
  return useQuery({
    queryKey: movieKeys.popular(page),
    queryFn: () => tmdbService.getPopular(page),
  });
}

export function useTopRated(page = 1) {
  return useQuery({
    queryKey: movieKeys.topRated(page),
    queryFn: () => tmdbService.getTopRated(page),
  });
}

export function useMovieDetail(id: number) {
  return useQuery({
    queryKey: movieKeys.detail(id),
    queryFn: () => tmdbService.getMovieDetail(id),
    enabled: !!id,
  });
}

export function useCredits(id: number) {
  return useQuery({
    queryKey: movieKeys.credits(id),
    queryFn: () => tmdbService.getCredits(id),
    enabled: !!id,
  });
}

export function useVideos(id: number) {
  return useQuery({
    queryKey: movieKeys.videos(id),
    queryFn: () => tmdbService.getVideos(id),
    enabled: !!id,
  });
}

export function useSearch(query: string, page = 1) {
  return useQuery({
    queryKey: movieKeys.search(query, page),
    queryFn: () => tmdbService.search(query, page),
    enabled: query.trim().length > 1,
  });
}
