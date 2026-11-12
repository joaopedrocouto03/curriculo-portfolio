import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeSummarySection } from "@/components/sections/HomeSummarySection";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Início | ${profile.name}`,
  description: profile.tagline,
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HomeSummarySection />
    </div>
  );
}
