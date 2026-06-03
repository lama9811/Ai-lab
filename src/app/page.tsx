import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { StatsBand } from "@/components/site/StatsBand";
import { ResearchAreas } from "@/components/site/ResearchAreas";
import { PublicationList } from "@/components/site/PublicationList";
import { MissionCard } from "@/components/site/MissionCard";
import { SeminarsBanner } from "@/components/site/SeminarsBanner";
import { NewsGrid } from "@/components/site/NewsGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg">
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsBand />
        <ResearchAreas />
        <PublicationList />
        <MissionCard />
        <SeminarsBanner />
        <NewsGrid />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
