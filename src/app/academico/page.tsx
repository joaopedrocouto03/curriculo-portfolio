import { Metadata } from "next";
import { GraduationCap, Award, BookOpen, Clock } from "lucide-react";
import { profile } from "@/data/profile";
import { TimelineItem } from "@/components/sections/TimelineItem";

export const metadata: Metadata = {
  title: "Experiência Acadêmica e Certificações",
  description:
    "Formação acadêmica em Sistemas para Internet na UNICAP, disciplinas e competências técnicas em desenvolvimento de software.",
};

export default function AcademicoPage() {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Cabeçalho */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Trajetória Acadêmica</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
          Formação & Certificações
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Histórico educacional com ênfase em sistemas para internet, desenvolvimento web, estruturas de dados e programação orientada a objetos na Universidade Católica de Pernambuco.
        </p>
      </div>

      {/* Seção 1: Formação Principal (Timeline Vertical) */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            Formação Superior
          </h2>
        </div>

        <div className="pt-4">
          {profile.academic.map((item) => (
            <TimelineItem
              key={item.id}
              type="academic"
              title={item.course}
              subtitle={item.institution}
              period={item.period}
              status={item.status}
              description={item.description}
              badges={item.skills}
              actionLink={
                item.certificateUrl
                  ? {
                      label: "Ver Comprovante / Certificado",
                      url: item.certificateUrl,
                    }
                  : undefined
              }
            />
          ))}
        </div>
      </section>

      {/* Seção 2: Cursos Complementares & Certificações */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            Cursos Complementares & Certificações
          </h2>
        </div>

        {profile.certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.certifications.map((cert) => (
              <div
                key={cert.id}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>{cert.date}</span>
                  {cert.hours && (
                    <span className="font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                      {cert.hours} horas
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
              Em Desenvolvimento & Capacitação Contínua
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
              Atualmente dedicando tempo à formação superior na UNICAP e participando de projetos práticos e cursos preparatórios para as primeiras certificações do setor.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
