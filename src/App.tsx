import Navbar from "@/components/Navbar";
import HeroSection from "@/components/ui/glassmorphism-trust-hero";
import Tattoo3DCarousel from "@/components/Tattoo3DCarousel";
import HighlightsSection from "@/components/HighlightsSection";
import BudgetCalculator from "@/components/BudgetCalculator";
import AboutDan from "@/components/AboutDan";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-rose-600 selection:text-white relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Glassmorphism and stats */}
      <main>
        <HeroSection 
          onOpenBudget={() => scrollToSection("orcamento")}
          onExploreGallery={() => scrollToSection("carrossel-3d")}
        />

        {/* 3D Interactive Tattoo & Flash Carousel */}
        <Tattoo3DCarousel />

        {/* Instagram Highlights (Flashs, Disponíveis, Cicatrizadas, Feedbacks) */}
        <HighlightsSection />

        {/* Interactive Instant WhatsApp Budget Calculator */}
        <BudgetCalculator />

        {/* About Dan & Studio Honey in Asa Norte */}
        <AboutDan />
      </main>

      {/* Persistent Floating WhatsApp with Status & Popover */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
