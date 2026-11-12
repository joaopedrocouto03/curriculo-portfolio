import { NextResponse } from "next/server";
import { fetchUserRepositories } from "@/lib/github";

export const revalidate = 3600; // ISR: 1 hora

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get("user") || undefined;

  try {
    const data = await fetchUserRepositories(user);
    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("API Repos error:", error);
    return NextResponse.json(
      { error: "Erro ao consultar repositórios do GitHub", repos: [], source: "fallback" },
      { status: 500 }
    );
  }
}
