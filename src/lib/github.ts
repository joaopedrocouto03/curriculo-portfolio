import { GitHubRepo } from "@/types";
import { profile } from "@/data/profile";

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "curriculo-portfolio",
    full_name: `${profile.githubUsername}/curriculo-portfolio`,
    description: "Portfólio acadêmico e currículo interativo com Next.js 14, Tailwind CSS, Framer Motion e consumo de APIs públicas.",
    html_url: `https://github.com/${profile.githubUsername}/curriculo-portfolio`,
    homepage: "https://curriculo-portfolio.vercel.app",
    language: "TypeScript",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    topics: ["nextjs", "react", "tailwindcss", "portfolio", "framer-motion", "typescript"],
    fork: false,
  },
  {
    id: 2,
    name: "isac-marketplace-frontend",
    full_name: `${profile.githubUsername}/isac-marketplace-frontend`,
    description: "Interface web moderna para sistema de marketplace desenvolvida para práticas de desenvolvimento front-end.",
    html_url: `https://github.com/${profile.githubUsername}/isac-marketplace-frontend`,
    homepage: null,
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    topics: ["web", "marketplace", "frontend"],
    fork: false,
  },
  {
    id: 3,
    name: "api-curriculo",
    full_name: `${profile.githubUsername}/api-curriculo`,
    description: "Serviço e API para integração de dados curriculares e perfis profissionais.",
    html_url: `https://github.com/${profile.githubUsername}/api-curriculo`,
    homepage: null,
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    topics: ["api", "nodejs", "curriculo"],
    fork: false,
  },
  {
    id: 4,
    name: "isac-marketplace",
    full_name: `${profile.githubUsername}/isac-marketplace`,
    description: "Aplicação de marketplace com modelagem orientada a objetos e regras de negócio desenvolvida em Java.",
    html_url: `https://github.com/${profile.githubUsername}/isac-marketplace`,
    homepage: null,
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    topics: ["java", "oop", "backend"],
    fork: false,
  },
];

export async function fetchUserRepositories(username?: string): Promise<{
  repos: GitHubRepo[];
  source: "api" | "fallback";
  error?: string;
}> {
  const targetUser = username || process.env.NEXT_PUBLIC_GITHUB_USERNAME || profile.githubUsername;

  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Academic-App",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(targetUser)}/repos?sort=updated&per_page=30`,
      {
        headers,
        next: { revalidate: 3600 }, // ISR: Revalida a cada 1 hora
      }
    );

    if (!res.ok) {
      console.warn(`GitHub API retornou status ${res.status}. Usando repositórios fallback.`);
      return {
        repos: FALLBACK_REPOS,
        source: "fallback",
        error: `Não foi possível carregar repositórios ao vivo (Status ${res.status}). Exibindo dados em cache/fallback.`,
      };
    }

    const data: GitHubRepo[] = await res.json();

    // Filtra forks e ordena por atualização decrescente
    const filteredRepos = data
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

    return {
      repos: filteredRepos.length > 0 ? filteredRepos : FALLBACK_REPOS,
      source: "api",
    };
  } catch (err) {
    console.error("Erro na requisição para GitHub API:", err);
    return {
      repos: FALLBACK_REPOS,
      source: "fallback",
      error: "Falha de conexão com a API do GitHub. Exibindo dados de demonstração.",
    };
  }
}
