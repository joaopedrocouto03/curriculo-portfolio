"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Search,
  Filter,
  Sparkles,
  Layers,
  Code2,
  AlertCircle,
  RefreshCw,
  Pin,
} from "lucide-react";
import { GitHubRepo, Project } from "@/types";
import { formatDate } from "@/lib/utils";

interface ProjectsClientProps {
  initialRepos: GitHubRepo[];
  featuredProjects: Project[];
  apiSource: "api" | "fallback";
  apiError?: string;
}

export function ProjectsClient({
  initialRepos,
  featuredProjects,
  apiSource,
  apiError,
}: ProjectsClientProps) {
  const [activeTab, setActiveTab] = useState<"github" | "featured">("github");
  const [selectedTech, setSelectedTech] = useState<string>("Todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [repos, setRepos] = useState<GitHubRepo[]>(initialRepos);
  const [loading, setLoading] = useState<boolean>(false);
  const [source, setSource] = useState<string>(apiSource);

  // Lista dinâmica de tecnologias para filtro
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    techSet.add("Todas");

    if (activeTab === "github") {
      repos.forEach((r) => {
        if (r.language) techSet.add(r.language);
        if (r.topics) r.topics.forEach((t) => techSet.add(t));
      });
    } else {
      featuredProjects.forEach((p) => {
        p.technologies.forEach((t) => techSet.add(t));
      });
    }
    return Array.from(techSet).slice(0, 10);
  }, [activeTab, repos, featuredProjects]);

  // Recarregar repositórios ao vivo sob demanda
  const reloadRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/repos");
      const data = await res.json();
      if (data.repos) {
        setRepos(data.repos);
        setSource(data.source || "api");
      }
    } catch {
      // Mantém os existentes
    } finally {
      setLoading(false);
    }
  };

  // Filtragem dos repositórios do GitHub
  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTech =
        selectedTech === "Todas" ||
        repo.language?.toLowerCase() === selectedTech.toLowerCase() ||
        repo.topics?.some((t) => t.toLowerCase() === selectedTech.toLowerCase());

      return matchesSearch && matchesTech;
    });
  }, [repos, searchQuery, selectedTech]);

  // Filtragem dos projetos estáticos em destaque
  const filteredFeatured = useMemo(() => {
    return featuredProjects.filter((proj) => {
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTech =
        selectedTech === "Todas" ||
        proj.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase());

      return matchesSearch && matchesTech;
    });
  }, [featuredProjects, searchQuery, selectedTech]);

  return (
    <div className="space-y-8">
      {/* Alerta de Status da API */}
      {source === "fallback" ? (
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3 text-amber-800 dark:text-amber-200 text-xs">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold">Modo de Demonstração / Fallback da API do GitHub</p>
            <p className="text-amber-700 dark:text-amber-300 mt-0.5">
              {apiError || "Exibindo repositórios de demonstração estruturados com base no perfil. Se o usuário atingir o rate-limit público da API, os dados em cache garantem estabilidade visual."}
            </p>
          </div>
          <button
            onClick={reloadRepos}
            disabled={loading}
            className="px-2.5 py-1 rounded bg-amber-200 dark:bg-amber-900/80 font-bold hover:bg-amber-300 dark:hover:bg-amber-800 transition-colors flex items-center gap-1"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? "animate-spin" : ""}`} />
            <span>Tentar novamente</span>
          </button>
        </div>
      ) : (
        <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-between gap-3 text-emerald-800 dark:text-emerald-200 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="font-medium">
              Repositórios sincronizados com a <strong>API pública do GitHub</strong> via Server Components & Route Handler (ISR).
            </p>
          </div>
          <button
            onClick={reloadRepos}
            disabled={loading}
            aria-label="Atualizar repositórios"
            className="p-1 text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100 transition-colors"
            title="Atualizar lista"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      )}

      {/* Barra de Controles: Alternador de Aba + Busca + Filtros */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-2">
        {/* Abas */}
        <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-fit">
          <button
            onClick={() => {
              setActiveTab("github");
              setSelectedTech("Todas");
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "github"
                ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Github className="w-4 h-4" />
            <span>Repositórios GitHub (API)</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
              {repos.length}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab("featured");
              setSelectedTech("Todas");
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "featured"
                ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Projetos em Destaque</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
              {featuredProjects.length}
            </span>
          </button>
        </div>

        {/* Input de Busca */}
        <div className="relative flex-1 max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nome ou palavra..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />
        </div>
      </div>

      {/* Pílulas de Filtro por Tecnologia */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 pl-1">
          <Filter className="w-3.5 h-3.5" /> Filtrar:
        </span>
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedTech === tech
                ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/25"
                : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Conteúdo: Skeletons durante loading */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-60 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-6 space-y-4"
            >
              <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full" />
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/5" />
              <div className="pt-4 flex gap-2">
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-16" />
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-16" />
              </div>
            </div>
          ))}
        </div>
      ) : activeTab === "github" ? (
        /* Grid de Repositórios GitHub */
        filteredRepos.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
            <Github className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              Nenhum repositório encontrado
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Tente ajustar os termos de busca ou selecionar outro filtro de tecnologia.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map((repo, idx) => {
              const isPinned = idx === 0; // Exemplo de repo fixado
              return (
                <div
                  key={repo.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-500/60 hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    {/* Topo do Card: Nome e Fixado */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                          <Code2 className="w-4 h-4" />
                        </span>
                        <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                          {repo.name}
                        </h3>
                      </div>

                      {isPinned && (
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
                          title="Repositório fixado em destaque"
                        >
                          <Pin className="w-3 h-3 fill-amber-500" />
                          <span>Fixado</span>
                        </span>
                      )}
                    </div>

                    {/* Descrição */}
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                      {repo.description || "Repositório de código sem descrição cadastrada."}
                    </p>

                    {/* Tags / Tópicos */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.language && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                          {repo.language}
                        </span>
                      )}
                      {repo.topics?.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rodapé do Card: Estatísticas + Links */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1" title="Estrelas no GitHub">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center gap-1" title="Forks">
                        <GitFork className="w-3.5 h-3.5 text-slate-400" />
                        <span>{repo.forks_count}</span>
                      </span>
                      <span className="text-[10px] text-slate-400 hidden sm:inline">
                        {formatDate(repo.updated_at)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ver deploy de ${repo.name}`}
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/50 transition-colors"
                          title="Abrir Deploy / Demonstração"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver código no GitHub de ${repo.name}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-800 dark:text-slate-200 font-semibold transition-colors text-xs"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Código</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      ) : (
        /* Grid de Projetos em Destaque */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFeatured.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:border-indigo-500/60 hover:shadow-xl transition-all"
            >
              {project.image && (
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" /> Destaque
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Ações */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repositório</span>
                  </a>

                  {project.deployUrl && (
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-all"
                    >
                      <span>Acessar Projeto</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
