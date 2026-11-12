"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase, FolderGit2, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";

export function HomeSummarySection() {
  return (
    <section className="py-16 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
            Navegue pelas Seções do Portfólio
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Estrutura completa desenvolvida para avaliação acadêmica com separação clara de competências, formação e projetos práticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Acadêmico */}
          <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-500/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
              Formação Acadêmica
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
              {profile.academic[0]?.course} na {profile.academic[0]?.institution}, com certificações e cursos complementares.
            </p>
            <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-6 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{profile.academic.length} formações e {profile.certifications.length} certificações</span>
            </div>
            <Link
              href="/academico"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
            >
              <span>Ver trajetória acadêmica</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card Profissional */}
          <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-500/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
              Experiência Profissional
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
              Atuação como {profile.professional[0]?.role} na {profile.professional[0]?.company}, com entregas práticas.
            </p>
            <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold mb-6 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{profile.professional.length} experiências registradas</span>
            </div>
            <Link
              href="/profissional"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
            >
              <span>Ver histórico profissional</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card Projetos */}
          <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-cyan-500/50 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
              Projetos & GitHub API
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
              Catálogo de repositórios reais consumidos ao vivo pela API do GitHub, com filtros por tecnologia e links de deploy.
            </p>
            <div className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-6 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Consumo da API do GitHub via ISR</span>
            </div>
            <Link
              href="/projetos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
            >
              <span>Explorar projetos e repositórios</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
