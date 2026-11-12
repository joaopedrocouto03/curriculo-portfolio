"use client";

import {
  Globe,
  Component,
  Code2,
  Palette,
  Sparkles,
  Smile,
  Moon,
  Layers,
  ShieldCheck,
  Github,
  Quote,
  Cloud,
  ExternalLink,
} from "lucide-react";
import { TechModuleInfo } from "@/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  Component: <Component className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Smile: <Smile className="w-5 h-5" />,
  Moon: <Moon className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Github: <Github className="w-5 h-5" />,
  Quote: <Quote className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
};

interface TechModuleCardProps {
  module: TechModuleInfo;
}

export function TechModuleCard({ module }: TechModuleCardProps) {
  const icon = ICON_MAP[module.iconName] || <Code2 className="w-5 h-5" />;

  return (
    <div className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 shadow-sm hover:border-indigo-500/50 hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            {icon}
          </div>
          <div>
            <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
              {module.name}
            </h4>
            <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold">
              {module.version}
            </span>
          </div>
        </div>

        <a
          href={module.officialDocs}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Documentação oficial de ${module.name}`}
          className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 transition-colors"
          title="Ver documentação oficial"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="space-y-2 text-xs">
        <p className="text-slate-600 dark:text-slate-300">
          <strong className="text-slate-800 dark:text-slate-100 font-medium">O que é: </strong>
          {module.description}
        </p>
        <p className="text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800/60">
          <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Aplicação no projeto: </strong>
          {module.purpose}
        </p>
      </div>
    </div>
  );
}
