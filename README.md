# 🎓 Portfólio & Currículo Acadêmico Moderno

> Projeto acadêmico completo desenvolvido com **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **next-themes** e integração com a **API pública do GitHub**.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

---

## 🌟 Funcionalidades e Páginas

1. **Início (`/`)**:
   - Hero com apresentação profissional, frase de impacto e efeito suave de digitação no cargo.
   - Foto/avatar com borda tecnológica iluminada.
   - Botões de ação rápida: *Ver Projetos*, *Baixar CV (PDF)* e *Contato*.
   - Cartão com **integração com API pública** (frase/citação inspiradora diária) com status de sincronização e botão de recarregar.
   - Resumo das seções do portfólio para navegação ágil.

2. **Sobre (`/sobre`)**:
   - Biografia profissional completa e detalhamento de áreas de especialidade.
   - **Tecnologias e módulos utilizados neste projeto**: Catálogo categorizado de todos os módulos instalados, suas versões lidas do `package.json`, ícone, o que é cada tecnologia e qual sua finalidade exata no projeto.
   - Relação de APIs públicas consumidas e plataforma de infraestrutura/deploy.

3. **Experiência Acadêmica (`/academico`)**:
   - Timeline vertical contínua com formação superior e técnica.
   - Cursos complementares e certificações com carga horária, instituição e links de comprovação.

4. **Experiência Profissional (`/profissional`)**:
   - Timeline vertical com empresa, cargo, período, localização e descrição detalhada de atividades.
   - Badges destacando as tecnologias aplicadas em cada experiência.
   - Princípios de desenvolvimento (Clean Code, Metodologias Ágeis, Acessibilidade).

5. **Projetos Desenvolvidos (`/projetos`)**:
   - **Integração em tempo real com a API pública do GitHub** (`https://api.github.com/users/[USER]/repos`).
   - Sincronização via Server Components e Route Handler com **Incremental Static Regeneration (ISR)**.
   - Filtros dinâmicos por tecnologia, barra de busca instantânea e tabs alternando entre repositórios ao vivo e projetos em destaque.
   - Tratamento de loading animado (skeletons), repositórios fixados e fallback resiliente.

6. **Extras & Design System**:
   - Página **404 personalizada** e amigável (`/not-found`).
   - **Tema claro e escuro (Dark/Light Mode)** persistente via `next-themes` com alternância suave.
   - Header fixo com efeito **glassmorphism** (`backdrop-blur-md`), indicador de rota ativa e menu hambúrguer responsivo para telas móveis.
   - Totalmente responsivo testado em 375px (mobile), 768px (tablet) e 1440px (desktop).
   - Metadados de SEO completos em todas as rotas e Open Graph.

---

## 🛠️ Tecnologias e Módulos

| Módulo / Tecnologia | Versão | Categoria | Finalidade no Projeto |
| :--- | :---: | :--- | :--- |
| **Next.js (App Router)** | `^14.2.15` | Framework | Estrutura de rotas, Server Components, Route Handlers e ISR |
| **React & React DOM** | `^18.3.1` | Core | Componentes declarativos e reatividade de interface |
| **TypeScript** | `^5.6.3` | Linguagem | Tipagem estática, interfaces e confiabilidade do código |
| **Tailwind CSS** | `^3.4.14` | Estilização | Design system utilitário, tema escuro nativo e layout responsivo |
| **Framer Motion** | `^11.11.11` | Animações | Animações suaves de entrada, transições e respeito ao `prefers-reduced-motion` |
| **lucide-react** | `^0.454.0` | Ícones | Conjunto limpo de ícones vetoriais modernos |
| **next-themes** | `^0.3.0` | UI / Tema | Gerenciamento e persistência do tema claro/escuro sem FOUC |
| **ESLint & Next Config** | `^8.57.1` | Qualidade | Análise estática contínua de código e regras de acessibilidade |
| **GitHub REST API v3** | Pública | Integração | Consumo de repositórios públicos, linguagens e estrelas |
| **Vercel** | Edge Network | Deploy | Hospedagem em nuvem com CI/CD acionado por Git |

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- **Node.js** v18+ (ou v20 LTS recomendado)
- **Git** instalado

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/curriculo-portfolio.git
   cd curriculo-portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente (opcional):**
   Copie o arquivo de exemplo:
   ```bash
   cp .env.example .env.local
   ```
   *Edite `NEXT_PUBLIC_GITHUB_USERNAME` se desejar buscar repositórios de outro usuário sem alterar o arquivo central.*

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Abra o navegador em: [http://localhost:3000](http://localhost:3000)

### Comandos de Validação

- Executar o linter:
  ```bash
  npm run lint
  ```
- Gerar o build otimizado de produção:
  ```bash
  npm run build
  ```
- Iniciar o servidor de produção local:
  ```bash
  npm run start
  ```

---

## 📂 Estrutura de Arquivos

```text
curriculo-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout com fonts, Navbar, Footer e ThemeProvider
│   │   ├── page.tsx               # Home (/)
│   │   ├── sobre/page.tsx         # Sobre mim e Seção de Tecnologias (/sobre)
│   │   ├── academico/page.tsx     # Formação e Certificações (/academico)
│   │   ├── profissional/page.tsx  # Histórico profissional e competências (/profissional)
│   │   ├── projetos/page.tsx      # Projetos integrados com GitHub API (/projetos)
│   │   ├── api/
│   │   │   ├── repos/route.ts     # Route Handler da API do GitHub com cache ISR
│   │   │   └── quote/route.ts     # Route Handler para frase diária com fallback
│   │   ├── not-found.tsx          # Página 404 personalizada
│   │   ├── icon.svg               # Favicon dinâmico SVG
│   │   └── globals.css            # Diretivas Tailwind e variáveis CSS
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, ThemeProvider
│   │   ├── ui/                    # ThemeToggle, botões e badges
│   │   └── sections/              # HeroSection, ProjectsClient, TimelineItem, TechModuleCard
│   ├── data/
│   │   └── profile.ts             # FONTE ÚNICA DE DADOS (personalize seu currículo aqui!)
│   ├── lib/
│   │   ├── github.ts              # Cliente para fetch da API do GitHub e dados de fallback
│   │   └── utils.ts               # Utilitários de classes (cn) e formatação de datas
│   └── types/
│       └── index.ts               # Interfaces TypeScript completas
├── tailwind.config.ts             # Configuração do Tailwind CSS
├── tsconfig.json                  # Configuração do TypeScript
└── package.json                   # Dependências e scripts do projeto
```

---

## 🌐 Publicação no GitHub e Vercel

### 1. Publicar no GitHub
```bash
git init
git add .
git commit -m "feat: site de curriculo e portfolio completo"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/curriculo-portfolio.git
git push -u origin main
```

### 2. Publicar na Vercel
1. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
2. Clique em **"Add New..."** → **"Project"**.
3. Selecione o repositório `curriculo-portfolio`.
4. Em **Environment Variables**, adicione (se desejar):
   - `NEXT_PUBLIC_GITHUB_USERNAME`: seu usuário do GitHub
5. Clique em **"Deploy"**. Seu site estará no ar em menos de 2 minutos com HTTPS automático!

---

## 📄 Licença
Este projeto foi desenvolvido para fins acadêmicos sob a licença MIT. Sinta-se livre para utilizar como base para o seu próprio portfólio profissional!
