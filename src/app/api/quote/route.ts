import { NextResponse } from "next/server";
import { DailyQuote } from "@/types";

const FALLBACK_QUOTES: DailyQuote[] = [
  {
    quote: "Simplicidade é pré-requisito para confiabilidade.",
    author: "Edsger W. Dijkstra",
    category: "Engenharia de Software",
  },
  {
    quote: "Primeiro faça funcionar, depois faça direito, então faça rápido.",
    author: "Kent Beck",
    category: "Boas Práticas",
  },
  {
    quote: "Qualquer tolo pode escrever código que um computador entenda. Bons programadores escrevem código que humanos entendem.",
    author: "Martin Fowler",
    category: "Clean Code",
  },
  {
    quote: "Aprender a programar expande a mente e ajuda a pensar melhor sobre qualquer problema.",
    author: "Bill Gates",
    category: "Inovação",
  },
];

export const revalidate = 86400; // 24 horas

export async function GET() {
  try {
    // Tenta obter de API pública sem autenticação
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    const res = await fetch("https://dummyjson.com/quotes/random", {
      signal: controller.signal,
      next: { revalidate: 86400 },
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({
        quote: data.quote,
        author: data.author,
        category: "Inspiração Diária",
        source: "api",
      });
    }
  } catch (err) {
    // Silently fall back to curated quotes
  }

  // Fallback aleatório com curadoria em Português
  const random = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
  return NextResponse.json({
    ...random,
    source: "fallback",
  });
}
