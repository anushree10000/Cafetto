import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cafe/Navbar";
import { Hero } from "@/components/cafe/Hero";
import { About } from "@/components/cafe/About";
import { MenuSection } from "@/components/cafe/Menu";
import { WhyUs } from "@/components/cafe/WhyUs";
import { Gallery } from "@/components/cafe/Gallery";
import { Events } from "@/components/cafe/Events";
import { Reviews } from "@/components/cafe/Reviews";
import { InstagramFeed } from "@/components/cafe/Instagram";
import { Contact } from "@/components/cafe/Contact";
import { Footer } from "@/components/cafe/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream text-espresso overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <WhyUs />
      <Gallery />
      <Events />
      <Reviews />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
