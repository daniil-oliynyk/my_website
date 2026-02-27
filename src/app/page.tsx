import { WorkExperience } from "@/components/work-experience";
import { ContactCard } from "@/components/contact-card";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SkillsGrid } from "@/components/skills-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <SkillsGrid />
        <ContactCard />
      </main>
      <footer className="pb-12 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} Daniil Oliynyk. Crafted with Next.js.
      </footer>
    </div>
  );
}
