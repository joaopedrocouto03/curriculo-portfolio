import { Metadata } from "next";
import { Briefcase, Building, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { TimelineItem } from "@/components/sections/TimelineItem";

export const metadata: Metadata = {
  title: "Experiência Profissional e Atuação",
  description:
    "Histórico de atuação no mercado de tecnologia, estágios, projetos corporativos e responsabilidades técnicas desenvolvidas.",
};

export default function ProfissionalPage() {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Cabeçalho */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/80 text-xs font-semibold text-purple-700 dark:text-purple-300">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Carreira & Mercado</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
          Experiência Profissional
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Trajetória prática no desenvolvimento de sistemas, integração de serviços, colaboração em equipes multidisciplinares e entregas orientadas a resultados.
        </p>
      </div>

      {/* Timeline Profissional */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <Building className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            Histórico de Cargos e Empresas
          </h2>
        </div>

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
              Prezo por arquitetura sustentável, componentes desacoplados, TypeScript rigoroso e boas práticas de acessibilidade web.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Metodologias Ágeis</span>
            </h3>
            <p>
              Experiência com rotinas Scrum/Kanban, sprints, reuniões diárias, retrospectivas e entregas contínuas de valor.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Comunicação & Parceria</span>
            </h3>
            <p>
              Trabalho em colaboração com designers (Figma), desenvolvedores back-end e stakeholders com transparência e clareza.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
