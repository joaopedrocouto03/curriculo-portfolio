"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Code, FileDown, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/academico", label: "Acadêmico" },
  { href: "/profissional", label: "Profissional" },
  { href: "/projetos", label: "Projetos" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar o menu mobile ao navegar
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3"
          : "bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Code className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {profile.name.split(" ")[0]}
                <span className="text-indigo-600 dark:text-indigo-400">.dev</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                Portfólio Acadêmico
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-900/60"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle + CV Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={profile.socials.curriculoUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-sm shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Baixar CV</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
              aria-label="Abrir menu de navegação"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/80"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  )}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
              <a
                href={profile.socials.curriculoUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Baixar Currículo (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
