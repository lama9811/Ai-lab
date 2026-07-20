import NavHeader from "@/components/ui/nav-header";
import { Wordmark } from "@/components/site/Wordmark";
import { MobileMenu } from "@/components/site/MobileMenu";
import { Hero } from "@/components/site/Hero";
import { StatsBand } from "@/components/site/StatsBand";
import { ResearchAreas } from "@/components/site/ResearchAreas";
import { PublicationList } from "@/components/site/PublicationList";
import { MissionCard } from "@/components/site/MissionCard";
import { SeminarsBanner } from "@/components/site/SeminarsBanner";
import { NewsGrid } from "@/components/site/NewsGrid";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg">
      <header className="sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 lg:px-10">
          <div className="justify-self-start">
            <Wordmark tone="paper" />
          </div>

          <div className="hidden justify-self-center md:block">
            <NavHeader />
          </div>

          <div className="flex items-center gap-3 justify-self-end">
            <MobileMenu
              links={[
                { label: "Research", href: "#research" },
                { label: "Projects", href: "#projects" },
                { label: "People", href: "#people" },
                { label: "Publications", href: "#publications" },
                { label: "News", href: "#news" },
              ]}
            />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Hero />
        <StatsBand />
        <ResearchAreas />
        <PublicationList />
        <MissionCard />
        <SeminarsBanner />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  );
}
