import tmdb from "./tmdb";
import type {
  Movie,
  MovieDetail,
  PaginatedResponse,
  CreditsResponse,
  VideosResponse,
} from "@/types/tmdb";

export const tmdbService = {
  getTrending: (page = 1) =>
    tmdb
      .get<PaginatedResponse<Movie>>("/trending/movie/week", { params: { page } })
      .then((r) => r.data),

  getPopular: (page = 1) =>
    tmdb
      .get<PaginatedResponse<Movie>>("/movie/popular", { params: { page } })
      .then((r) => r.data),

  getTopRated: (page = 1) =>
    tmdb
      .get<PaginatedResponse<Movie>>("/movie/top_rated", { params: { page } })
      .then((r) => r.data),

  getUpcoming: (page = 1) =>
    tmdb
      .get<PaginatedResponse<Movie>>("/movie/upcoming", { params: { page } })
      .then((r) => r.data),

  getMovieDetail: (id: number) =>
    tmdb.get<MovieDetail>(`/movie/${id}`).then((r) => r.data),

  getCredits: (id: number) =>
    tmdb.get<CreditsResponse>(`/movie/${id}/credits`).then((r) => r.data),

  getVideos: (id: number) =>
    tmdb.get<VideosResponse>(`/movie/${id}/videos`).then((r) => r.data),

  search: (query: string, page = 1) =>
    tmdb
      .get<PaginatedResponse<Movie>>("/search/movie", { params: { query, page } })
      .then((r) => r.data),
};
