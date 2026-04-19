import { NextRequest, NextResponse } from "next/server";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const searchParams = request.nextUrl.searchParams;

  const url = new URL(`${TMDB_BASE_URL}/${path.join("/")}`);
  url.searchParams.set("api_key", process.env.TMDB_API_KEY!);

  searchParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url.toString());
  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}
