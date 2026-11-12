import { Metadata } from "next";
import { FolderGit2, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { fetchUserRepositories } from "@/lib/github";
import { ProjectsClient } from "@/components/sections/ProjectsClient";

export const metadata: Metadata = {
  title: "Projetos Desenvolvidos & GitHub API",
  description:
    "Portfólio de projetos práticos e repositórios reais integrados via API pública do GitHub com revalidação estática incremental (ISR).",
};

// Revalidação a cada 1 hora no nível de Server Component
export const revalidate = 3600;

export default async function ProjetosPage() {
  const { repos, source, error } = await fetchUserRepositories();

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Cabeçalho */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/80 dark:border-cyan-800/80 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Portfólio Prático & Código Aberto</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
          Projetos & Repositórios GitHub
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore os projetos que desenvolvi. Esta seção está conectada em tempo real à{" "}
          <strong>API pública do GitHub</strong>, listando os repositórios mais recentes, suas linguagens e contagem de estrelas.
        </p>
      </div>

      {/* Componente Interativo Cliente com Filtros, Busca, Tabs e Skeletons */}
      <ProjectsClient
        initialRepos={repos}
        featuredProjects={profile.projects}
        apiSource={source}
        apiError={error}
      />
    </div>
  );
}
