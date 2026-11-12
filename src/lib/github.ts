import { GitHubRepo } from "@/types";
import { profile } from "@/data/profile";

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: "curriculo-portfolio",
    full_name: `${profile.githubUsername}/curriculo-portfolio`,
    description: "Portfólio acadêmico e currículo interativo com Next.js 14, Tailwind CSS, Framer Motion e consumo de APIs públicas.",
    html_url: `https://github.com/${profile.githubUsername}/curriculo-portfolio`,
    homepage: "https://curriculo-portfolio.vercel.app",
    language: "TypeScript",
    stargazers_count: 14,
    forks_count: 3,
    updated_at: new Date().toISOString(),
    topics: ["nextjs", "react", "tailwindcss", "portfolio", "framer-motion"],
    fork: false,
  },
  {
    id: 102,
    name: "taskflow-kanban",
    full_name: `${profile.githubUsername}/taskflow-kanban`,
    description: "Aplicativo de produtividade pessoal estilo quadro Kanban com arrastar e soltar e persistência local.",
    html_url: `https://github.com/${profile.githubUsername}/taskflow-kanban`,
    homepage: "https://taskflow-demo.vercel.app",
    language: "TypeScript",
    stargazers_count: 8,
    forks_count: 1,
    updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    topics: ["react", "kanban", "productivity", "dnd"],
    fork: false,
  },
  {
    id: 103,
    name: "devmetrics-dashboard",
    full_name: `${profile.githubUsername}/devmetrics-dashboard`,
    description: "Dashboard analítico com consumo da API do GitHub para métricas de contribuições e linguagens.",
    html_url: `https://github.com/${profile.githubUsername}/devmetrics-dashboard`,
    homepage: null,
    language: "TypeScript",
    stargazers_count: 5,
    forks_count: 0,
    updated_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    topics: ["github-api", "analytics", "charts"],
    fork: false,
  },
  {
    id: 104,
    name: "algorithms-data-structures",
    full_name: `${profile.githubUsername}/algorithms-data-structures`,
    description: "Repositório de estudos acadêmicos contendo implementação de árvores, grafos e algoritmos de busca.",
    html_url: `https://github.com/${profile.githubUsername}/algorithms-data-structures`,
    homepage: null,
    language: "C++",
    stargazers_count: 12,
    forks_count: 4,
    updated_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    topics: ["algorithms", "data-structures", "academic"],
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
