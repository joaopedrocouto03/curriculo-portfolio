import { Metadata } from "next";
import { Briefcase, Building, CheckCircle2, Rocket, Code2, Users, Compass } from "lucide-react";
import { profile } from "@/data/profile";
import { TimelineItem } from "@/components/sections/TimelineItem";

export const metadata: Metadata = {
  title: "Experiência Profissional e Atuação",
  description:
    "Objetivos profissionais, competências práticas e disponibilidade para estágio em desenvolvimento web e sistemas para internet.",
};

export default function ProfissionalPage() {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Cabeçalho */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/80 text-xs font-semibold text-purple-700 dark:text-purple-300">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Carreira & Oportunidades</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
          Experiência Profissional
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Histórico de atuação prática e objetivos no mercado de tecnologia, com foco no desenvolvimento de sistemas web eficientes e aprendizado colaborativo.
        </p>
      </div>

      {/* Timeline ou Estado Elegante de Primeiro Emprego / Estágio */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <Building className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            Histórico e Oportunidades
          </h2>
        </div>

        {profile.professional.length > 0 ? (
          <div className="pt-4">
            {profile.professional.map((exp) => (
              <TimelineItem
                key={exp.id}
                type="professional"
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                location={exp.location}
                description={exp.description}
                items={exp.activities}
                badges={exp.technologies}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-indigo-200/70 dark:border-indigo-900/50 bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/30 p-8 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  Buscando Oportunidades de Estágio & Desenvolvimento Júnior
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Disponível para atuação presencial ou remota em Recife - PE e em qualquer região do Brasil.
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Como estudante de Sistemas para Internet na UNICAP, tenho dedicado minha rotina a projetos práticos de desenvolvimento web (front-end e back-end), dominando JavaScript, TypeScript, React, Next.js e Java. Estou entusiasmado para aplicar esses conhecimentos em desafios reais de mercado, somando com proatividade, capacidade de resolução de problemas e vontade contínua de aprender.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  <span>Front-end & Back-end</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Criação de páginas responsivas, componentes reativos e integração de APIs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>Colaboração em Equipe</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Comunicação clara, versionamento com Git e adaptabilidade a cerimônias ágeis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  <span>Evolução Rápida</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Facilidade para assimilar novas stacks e boas práticas recomendadas.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Destaque Metodologias & Práticas */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white">
          Práticas e Filosofia de Trabalho
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Código Limpo & Qualidade</span>
            </h3>
            <p>
              Prezo por arquitetura sustentável, componentes reutilizáveis, TypeScript rigoroso e boas práticas de acessibilidade web.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Metodologias Ágeis</span>
            </h3>
            <p>
              Experiência com rotinas Scrum/Kanban, sprints, divisão de tarefas e entregas contínuas de valor.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Comunicação & Parceria</span>
            </h3>
            <p>
              Trabalho em colaboração com colegas de curso e mentores, com transparência, feedbacks constantes e foco no usuário final.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
