"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  FileDown,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  ExternalLink,
  Code2,
  FolderGit2,
} from "lucide-react";
import { profile } from "@/data/profile";
import { QuoteCard } from "@/components/sections/QuoteCard";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = profile.role;

  // Efeito suave de digitação para o cargo
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Texto Principal (7 colunas no desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Badge de Status / Localização */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/80 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponível para Estágio & Projetos</span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3 h-3" /> {profile.location}
              </span>
            </div>

            {/* Nome com destaque */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Olá, eu sou{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              {/* Cargo com efeito de digitação */}
              <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 font-heading">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 ml-1 bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
                </p>
              </div>
            </div>

            {/* Frase de impacto */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {profile.tagline}
            </p>

            {/* Botões de Ação Principais */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Ver Projetos</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>

              <a
                href={profile.socials.curriculoUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:border-indigo-500/60 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                <span>Baixar CV (PDF)</span>
              </a>

              <a
                href={profile.socials.email}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-slate-300 dark:border-slate-700 hover:border-indigo-500/60 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Contato</span>
              </a>
            </div>

            {/* Links Sociais e Badges Rápidos */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-medium text-xs uppercase tracking-wider">Conecte-se:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile.socials.email}
                  aria-label="E-mail"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Coluna Visual: Foto/Card + Quote API (5 colunas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Card com Foto e Moldura Tecnológica */}
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-md opacity-35 dark:opacity-40 animate-pulse-slow" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-xl p-4 sm:p-5">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4">
                  <Image
                    src={profile.avatarUrl}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold">{profile.name}</p>
                      <p className="text-[10px] text-slate-300">{profile.role}</p>
                    </div>
                    <span className="p-1 rounded bg-indigo-500/30 text-indigo-300">
                      <Code2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Badges de Destaque Tecnológico */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub API"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Destaque da Integração com API na Home */}
            <QuoteCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
