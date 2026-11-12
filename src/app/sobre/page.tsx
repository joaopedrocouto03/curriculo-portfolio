import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Sparkles,
  MapPin,
  Mail,
  GraduationCap,
  Briefcase,
  Code2,
  ExternalLink,
  Layers,
  Cpu,
} from "lucide-react";
import { profile, techStackModules } from "@/data/profile";
import { TechModuleCard } from "@/components/sections/TechModuleCard";

export const metadata: Metadata = {
  title: "Sobre Mim e Tecnologias do Projeto",
  description:
    "Biografia profissional, competências e documentação detalhada de todas as tecnologias e módulos utilizados na construção deste portfólio acadêmico.",
};

export default function SobrePage() {
  // Agrupamento dos módulos por categoria
  const categories = [
    "Framework & Core",
    "Linguagem",
    "Estilização",
    "Animação & UI",
    "Ferramentas & Qualidade",
    "APIs & Deploy",
  ] as const;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Cabeçalho da Página */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <User className="w-3.5 h-3.5" />
          <span>Perfil e Apresentação</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
          Sobre Mim & Arquitetura do Projeto
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Conheça um pouco da minha trajetória acadêmica e profissional e confira o catálogo detalhado de módulos, bibliotecas e integrações implementadas nesta aplicação.
        </p>
      </div>

      {/* Seção 1: Biografia e Informações Pessoais */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Foto e Card Rápido (4 colunas) */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Nome Completo</p>
              <p className="font-bold text-slate-900 dark:text-white text-base">{profile.name}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Cargo / Foco</p>
              <p className="font-medium text-indigo-600 dark:text-indigo-400">{profile.role}</p>
            </div>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 text-indigo-500" />
              <span>{profile.location}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <Mail className="w-4 h-4 text-indigo-500" />
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Biografia Detalhada e Áreas de Domínio (8 colunas) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Biografia Profissional</span>
            </h2>

            <div className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {profile.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Habilidades por Categoria */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Competências Técnicas Principais</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {profile.skillsByCategory.map((category) => (
                <div key={category.category} className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {category.category}
                  </h3>
                  <ul className="space-y-1.5">
                    {category.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: OBRIGATÓRIA - Tecnologias e Módulos Utilizados no Projeto */}
      <section className="space-y-8 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/80 text-xs font-semibold text-purple-700 dark:text-purple-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Documentação Técnica de Entrega</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            Tecnologias e Módulos Utilizados Neste Projeto
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Relação completa de frameworks, bibliotecas auxiliares, linter, APIs públicas consumidas e infraestrutura de deploy aplicados no desenvolvimento desta atividade.
          </p>
        </div>

        {/* Grid de Tecnologias agrupadas */}
        <div className="space-y-10">
          {categories.map((cat) => {
            const modulesInCat = techStackModules.filter((m) => m.category === cat);
            if (modulesInCat.length === 0) return null;

            return (
              <div key={cat} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span>{cat}</span>
                  <span className="text-xs text-slate-400 font-normal">
                    ({modulesInCat.length} {modulesInCat.length === 1 ? "módulo" : "módulos"})
                  </span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modulesInCat.map((module) => (
                    <TechModuleCard key={module.name} module={module} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
