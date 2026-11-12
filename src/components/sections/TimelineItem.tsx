import { Calendar, MapPin, Building, GraduationCap, Award, ExternalLink } from "lucide-react";

interface TimelineItemProps {
  type: "academic" | "professional";
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  status?: string;
  description: string;
  items?: string[];
  badges?: string[];
  actionLink?: {
    label: string;
    url: string;
  };
}

export function TimelineItem({
  type,
  title,
  subtitle,
  period,
  location,
  status,
  description,
  items,
  badges,
  actionLink,
}: TimelineItemProps) {
  const isAcademic = type === "academic";

  return (
    <div className="relative pl-8 sm:pl-10 pb-12 last:pb-2 group">
      {/* Linha vertical contínua */}
      <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 group-last:hidden" />

      {/* Marcador circular da timeline */}
      <div className="absolute left-0 sm:left-1 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:scale-110 group-hover:border-purple-500 transition-all">
        {isAcademic ? (
          <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        ) : (
          <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-sm hover:border-indigo-500/50 hover:shadow-md transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">
              <Calendar className="w-3 h-3 text-indigo-500" />
              {period}
            </span>

            {status && (
              <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                {status}
              </span>
            )}

            {location && (
              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 hidden sm:inline-flex">
                <MapPin className="w-3 h-3" />
                {location}
              </span>
            )}
          </div>
        </div>

        {/* Descrição geral */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {description}
        </p>

        {/* Lista de Atividades ou Focos */}
        {items && items.length > 0 && (
          <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Badges de Tecnologias / Competências */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Link de ação opcional (ex: certificado) */}
        {actionLink && (
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            <a
              href={actionLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              <Award className="w-4 h-4" />
              <span>{actionLink.label}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
