import { ProfileData, TechModuleInfo } from "@/types";

export const profile: ProfileData = {
  // TODO: substituir pelo seu nome completo
  name: "João da Silva",

  // TODO: substituir pelo seu cargo ou título desejado
  role: "Desenvolvedor Full Stack Júnior",

  // TODO: substituir pela sua frase de impacto principal
  tagline: "Construindo soluções web modernas, responsivas e orientadas à experiência do usuário com o ecossistema React e Node.js.",

  // TODO: substituir pela sua biografia (2 a 3 parágrafos)
  bio: [
    "Sou graduando em Ciência da Computação apaixonado por transformar desafios complexos em interfaces digitais intuitivas, elegantes e de alto desempenho.",
    "Tenho sólida base em algoritmos, arquitetura de software e desenvolvimento front-end com Next.js, TypeScript e Tailwind CSS, além de experiência na criação de APIs RESTful e integração com serviços em nuvem.",
    "Busco constantemente aprimorar minhas habilidades com boas práticas de código limpo, acessibilidade na web (WCAG), testes automatizados e design systems modernos."
  ],

  // TODO: substituir por sua Cidade - UF
  location: "São Paulo - SP",

  // TODO: substituir pelo seu e-mail de contato profissional
  email: "joao.silva.dev@exemplo.com",

  // TODO: substituir pelo seu telefone (opcional)
  phone: "+55 (11) 98765-4321",

  // TODO: substituir pelo seu nome de usuário exato no GitHub (usado na API do GitHub)
  githubUsername: "joaopedrocouto03",

  socials: {
    // TODO: substituir pela URL do seu perfil no GitHub
    github: "https://github.com/joaopedrocouto03",

    // TODO: substituir pela URL do seu perfil no LinkedIn
    linkedin: "https://www.linkedin.com/in/exemplo-perfil",

    // TODO: substituir pelo link mailto do seu e-mail
    email: "mailto:joao.silva.dev@exemplo.com",

    // TODO: substituir pelo link do seu currículo em PDF (se tiver no /public ou Google Drive)
    curriculoUrl: "#",
  },

  // TODO: substituir pela URL da sua foto ou manter este avatar profissional de placeholder
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",

  skillsByCategory: [
    {
      category: "Front-end",
      items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3"],
    },
    {
      category: "Back-end & APIs",
      items: ["Node.js", "Express", "RESTful APIs", "PostgreSQL", "Prisma ORM"],
    },
    {
      category: "Ferramentas & DevOps",
      items: ["Git & GitHub", "Vercel", "VS Code", "Figma", "ESLint & Prettier"],
    },
  ],

  academic: [
    {
      id: "acad-1",
      // TODO: substituir pelo seu curso atual ou concluído
      course: "Bacharelado em Ciência da Computação",
      // TODO: substituir pela sua instituição de ensino
      institution: "Universidade de São Paulo (USP)",
      // TODO: substituir pelo período real
      period: "2023 - 2026 (Previsão)",
      status: "Em andamento",
      // TODO: substituir pela descrição das disciplinas e focos
      description: "Formação focada em fundamentos de computação, estruturas de dados avançadas, engenharia de software, sistemas distribuídos e computação gráfica.",
      skills: ["Estruturas de Dados", "Algoritmos", "Engenharia de Software", "Bancos de Dados", "POO"],
    },
    {
      id: "acad-2",
      // TODO: substituir por curso técnico ou ensino médio
      course: "Técnico em Desenvolvimento de Sistemas",
      // TODO: substituir pela instituição técnica
      institution: "ETEC / Centro Paula Souza",
      period: "2021 - 2022",
      status: "Concluído",
      description: "Curso profissionalizante com ênfase em lógica de programação, banco de dados relacionais e desenvolvimento web completo com projetos práticos em equipe.",
      skills: ["Lógica de Programação", "JavaScript", "SQL", "Modelagem de Dados", "Metodologias Ágeis"],
      certificateUrl: "#",
    },
  ],

  certifications: [
    {
      id: "cert-1",
      // TODO: substituir pelas suas certificações reais
      title: "Next.js & React - The Complete Guide",
      issuer: "Udemy / Academind",
      date: "2024",
      hours: 48,
      credentialUrl: "https://www.udemy.com/certificate/example",
    },
    {
      id: "cert-2",
      title: "TypeScript Moderno do Básico ao Avançado",
      issuer: "Origamid",
      date: "2024",
      hours: 36,
      credentialUrl: "#",
    },
    {
      id: "cert-3",
      title: "Git e Controle de Versões para Equipes",
      issuer: "DIO (Digital Innovation One)",
      date: "2023",
      hours: 20,
      credentialUrl: "#",
    },
  ],

  professional: [
    {
      id: "prof-1",
      // TODO: substituir pela sua empresa mais recente ou estágio
      company: "TechNova Soluções Digitais",
      // TODO: substituir pelo seu cargo
      role: "Estagiário em Desenvolvimento Front-end",
      // TODO: substituir pelo período de atuação
      period: "Jul 2024 - Presente",
      location: "São Paulo - SP (Híbrido)",
      description: "Atuação no desenvolvimento e manutenção de dashboards interativos e portais de autoatendimento para clientes corporativos.",
      activities: [
        "Desenvolvimento de componentes reutilizáveis em React e TypeScript seguindo o design system da empresa.",
        "Integração de telas com APIs RESTful utilizando React Query e Axios com tratamento de estados de loading e erro.",
        "Refatoração de páginas legadas para Next.js, aumentando a pontuação no Google Lighthouse em mais de 35%.",
        "Participação ativa em code reviews e cerimônias ágeis (Scrum) com entregas quinzenais.",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "Figma"],
    },
    {
      id: "prof-2",
      // TODO: substituir por experiência anterior, projeto de extensão ou freelance
      company: "Laboratório de Informática Aplicada (Acadêmico)",
      role: "Bolsista Desenvolvedor Web",
      period: "Ago 2023 - Jun 2024",
      location: "São Paulo - SP",
      description: "Desenvolvimento do portal acadêmico do laboratório para divulgação de pesquisas científicas e agendamento de equipamentos.",
      activities: [
        "Implementação de layout responsivo com foco em acessibilidade e navegação fluida.",
        "Criação de formulários com validação em tempo real e persistência em banco PostgreSQL.",
        "Elaboração de documentação técnica para transferência de conhecimento aos novos bolsistas.",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Node.js", "PostgreSQL", "Bootstrap"],
    },
  ],

  projects: [
    {
      id: "proj-1",
      // TODO: substituir pelos dados do seu projeto em destaque
      title: "Portal de Currículo & Portfólio Acadêmico",
      description: "Aplicação web moderna desenvolvida para entrega de atividade acadêmica, com Next.js App Router, tema claro/escuro, animações com Framer Motion e integração com API pública do GitHub.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub API"],
      repoUrl: "https://github.com/octocat/curriculo-portfolio",
      deployUrl: "https://curriculo-portfolio.vercel.app",
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "proj-2",
      title: "TaskFlow - Gerenciador Ágil de Tarefas",
      description: "Painel estilo Kanban para organização de projetos e sprints pessoais, com suporte a drag-and-drop, filtros por tag e persistência local sincronizada.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide React"],
      repoUrl: "https://github.com/octocat/taskflow",
      deployUrl: "https://taskflow-demo.vercel.app",
      featured: true,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "proj-3",
      title: "DevMetrics - Dashboard de Estatísticas GitHub",
      description: "Interface analítica que consome dados da API do GitHub para gerar gráficos de linguagens mais utilizadas, histórico de commits e repositórios populares.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "GitHub API"],
      repoUrl: "https://github.com/octocat/devmetrics",
      deployUrl: "https://devmetrics-demo.vercel.app",
      featured: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "proj-4",
      title: "EcoTrack - Monitor de Consumo Consciente",
      description: "Calculadora de pegada de carbono com dicas ecológicas diárias consumidas via API pública e visualização de metas sustentáveis.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "https://github.com/octocat/ecotrack",
      deployUrl: "https://ecotrack-demo.vercel.app",
      featured: false,
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80",
    },
  ],
};

// Seção de Tecnologias e Módulos utilizados no projeto (Exigência da página /sobre)
export const techStackModules: TechModuleInfo[] = [
  {
    name: "Next.js (App Router)",
    category: "Framework & Core",
    version: "^14.2.15",
    description: "Framework React para produção com renderização híbrida e servidor otimizado.",
    purpose: "Estrutura as rotas via App Router, gerencia Server Components, Route Handlers para APIs e revalidação de dados ISR.",
    iconName: "Globe",
    officialDocs: "https://nextjs.org/docs",
  },
  {
    name: "React & React DOM",
    category: "Framework & Core",
    version: "^18.3.1",
    description: "Biblioteca declarativa para construção de interfaces reativas baseadas em componentes.",
    purpose: "Criação de componentes reutilizáveis, gerenciamento de estado local e ciclos de renderização.",
    iconName: "Component",
    officialDocs: "https://react.dev",
  },
  {
    name: "TypeScript",
    category: "Linguagem",
    version: "^5.6.3",
    description: "Superset tipado de JavaScript que adiciona tipos estáticos ao código.",
    purpose: "Garante segurança de tipos, auto-complete inteligente no IDE e prevenção de erros em tempo de compilação.",
    iconName: "Code2",
    officialDocs: "https://www.typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    category: "Estilização",
    version: "^3.4.14",
    description: "Framework CSS utility-first para desenvolvimento ágil de interfaces modernas.",
    purpose: "Estilização consistente, suporte nativo a dark mode, responsividade mobile-first e efeitos glassmorphism.",
    iconName: "Palette",
    officialDocs: "https://tailwindcss.com",
  },
  {
    name: "Framer Motion",
    category: "Animação & UI",
    version: "^11.11.11",
    description: "Biblioteca de animações pronta para produção no ecossistema React.",
    purpose: "Transições fluidas de entrada de tela, efeito stagger em grids, hover em cards e respeito a prefers-reduced-motion.",
    iconName: "Sparkles",
    officialDocs: "https://www.framer.com/motion",
  },
  {
    name: "lucide-react",
    category: "Animação & UI",
    version: "^0.454.0",
    description: "Conjunto moderno de ícones vetoriais SVG limpos e personalizáveis.",
    purpose: "Fornece ícones semânticos para navegação, redes sociais, badges técnicos e indicadores de status.",
    iconName: "Smile",
    officialDocs: "https://lucide.dev",
  },
  {
    name: "next-themes",
    category: "Animação & UI",
    version: "^0.3.0",
    description: "Abstração para gerenciamento de temas claro e escuro no Next.js.",
    purpose: "Alternância e persistência do tema (Light/Dark/System) no localStorage sem flash de cor indesejado (FOUC).",
    iconName: "Moon",
    officialDocs: "https://github.com/pacocoursey/next-themes",
  },
  {
    name: "clsx & tailwind-merge",
    category: "Ferramentas & Qualidade",
    version: "^2.1.1 & ^2.5.4",
    description: "Utilitários para composição condicional e fusão sem conflitos de classes Tailwind.",
    purpose: "Função auxiliar `cn()` para mesclar dinamicamente classes CSS sem sobreposição indesejada de regras.",
    iconName: "Layers",
    officialDocs: "https://github.com/dcastilho/tailwind-merge",
  },
  {
    name: "ESLint & eslint-config-next",
    category: "Ferramentas & Qualidade",
    version: "^8.57.1 & ^14.2.15",
    description: "Linter estático configurado com as melhores práticas recomendadas pela equipe do Next.js.",
    purpose: "Análise estática contínua do código para detectar más práticas, hooks incorretos e acessibilidade.",
    iconName: "ShieldCheck",
    officialDocs: "https://eslint.org",
  },
  {
    name: "GitHub REST API (v3)",
    category: "APIs & Deploy",
    version: "Public REST API",
    description: "API pública oficial da plataforma GitHub para consulta de repositórios e perfis.",
    purpose: "Alimentar dinamicamente a página /projetos com repositórios reais, contagem de estrelas e linguagens.",
    iconName: "Github",
    officialDocs: "https://docs.github.com/pt/rest",
  },
  {
    name: "Quotable / AdviceSlip API",
    category: "APIs & Deploy",
    version: "Public REST API",
    description: "API pública para fornecimento de pensamentos, frases e conselhos em tempo real.",
    purpose: "Exibição de frase inspiradora dinâmica no Hero da página Home, com fallback gracioso para resiliência.",
    iconName: "Quote",
    officialDocs: "https://api.adviceslip.com",
  },
  {
    name: "Vercel Platform",
    category: "APIs & Deploy",
    version: "Cloud Edge Network",
    description: "Plataforma de hospedagem e entrega otimizada para aplicações Next.js.",
    purpose: "Deploy contínuo acionado via push no GitHub, distribuição global via CDN Edge e suporte a ISR.",
    iconName: "Cloud",
    officialDocs: "https://vercel.com",
  },
];
