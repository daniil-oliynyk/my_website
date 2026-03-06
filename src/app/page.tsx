import { WorkExperience } from "@/components/work-experience";
import { ContactCard } from "@/components/contact-card";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SkillsGrid } from "@/components/skills-grid";
import { VantaBackground } from "@/components/vantabackground";
import { Analytics } from "@vercel/analytics/next"


export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent">
      <Analytics />
      <div className="fixed inset-0 z-0">
        {/* <Particles
          particleCount={900}
          particleSpread={7}
          speed={0.09}
          // ,"#8333ff","#8437ff"
          particleColors={["#ffffffff"]}
          particleBaseSize={150}
          alphaParticles={true}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          className="h-full w-full"
        /> */}
        <VantaBackground />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <WorkExperience />
          <SkillsGrid />
          <ContactCard />
        </main>
        <footer className="pb-12 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Daniil Oliynyk.
        </footer>
      </div>
    </div>
  );
}
