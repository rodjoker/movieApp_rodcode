import axios from "axios";

const tmdb = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "es-ES",
  },
});

export default tmdb;

export type ImageSize = "w185" | "w342" | "w500" | "w780" | "original";

export function getImageUrl(path: string | null, size: ImageSize = "w500"): string {
  if (!path) return "/placeholder.png";
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL}/${size}${path}`;
}
