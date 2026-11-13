import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://curriculo-portfolio.vercel.app"),
  title: {
    default: `${profile.name} | Portfólio & Currículo`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    profile.name,
    "Desenvolvedor Full Stack",
    "Currículo",
    "Portfólio",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Projetos Web",
  ],
  authors: [{ name: profile.name, url: profile.socials.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://curriculo-portfolio.vercel.app",
    title: `${profile.name} | Portfólio & Currículo`,
    description: profile.tagline,
    siteName: `${profile.name} - Portfólio Acadêmico`,
    images: [
      {
        url: profile.avatarUrl,
        width: 1200,
        height: 630,
        alt: `${profile.name} - Portfólio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Portfólio & Currículo`,
    description: profile.tagline,
    images: [profile.avatarUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
