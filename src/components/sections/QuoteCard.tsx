"use client";

import { useEffect, useState } from "react";
import { Sparkles, RefreshCw, Quote as QuoteIcon, CheckCircle2 } from "lucide-react";
import { DailyQuote } from "@/types";

export function QuoteCard() {
  const [data, setData] = useState<DailyQuote | null>(null);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<string>("api");

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/quote", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        setData(json);
        setSource(json.source || "api");
      }
    } catch {
      setData({
        quote: "Primeiro faça funcionar, depois faça direito, então faça rápido.",
        author: "Kent Beck",
        category: "Boas Práticas",
      });
      setSource("fallback");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-indigo-200/80 dark:border-indigo-900/50 bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-indigo-950/40 backdrop-blur-md p-5 shadow-sm transition-all hover:border-indigo-400/70 dark:hover:border-indigo-600/60">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
            Insight & Pensamento Diário
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {source === "api" ? "API Live" : "Cache / Fallback"}
          </span>

          <button
            onClick={fetchQuote}
            disabled={loading}
            aria-label="Atualizar frase"
            title="Buscar outra frase"
            className="p-1 rounded-md text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="space-y-2 py-1 animate-pulse">
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
          <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/3 mt-3" />
        </div>
      ) : (
        <div className="relative pl-6">
          <QuoteIcon className="w-4 h-4 text-indigo-400/60 dark:text-indigo-500/40 absolute -left-1 top-0" />
          <p className="text-sm font-medium italic text-slate-800 dark:text-slate-200 leading-relaxed">
            &ldquo;{data?.quote}&rdquo;
          </p>
          <p className="mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <span>— {data?.author}</span>
            {data?.category && (
              <span className="text-[10px] text-slate-500 dark:text-slate-500 font-normal">
                ({data.category})
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
