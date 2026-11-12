import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Coluna 1: Nome e propósito acadêmico */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </span>
              <span className="font-heading font-bold text-slate-900 dark:text-white">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Projeto desenvolvido para entrega de atividade acadêmica de Desenvolvimento Web Moderno.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="flex items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-medium">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Sobre
            </Link>
            <Link href="/academico" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Acadêmico
            </Link>
            <Link href="/profissional" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Profissional
            </Link>
            <Link href="/projetos" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projetos
            </Link>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil no GitHub"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil no LinkedIn"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Enviar E-mail"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500 dark:text-slate-500">
          <p>© {currentYear} {profile.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 justify-center">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> usando Next.js 14, Tailwind & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
