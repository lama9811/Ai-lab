import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { PublicationList } from "@/components/site/PublicationList";
import { MissionCard } from "@/components/site/MissionCard";
import { SeminarsBanner } from "@/components/site/SeminarsBanner";
import { NewsGrid } from "@/components/site/NewsGrid";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Nav />
      <main className="flex-1">
        <Hero />
        <PublicationList />
        <MissionCard />
        <SeminarsBanner />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
}
