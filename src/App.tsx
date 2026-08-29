import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/ui/glassmorphism-trust-hero";
import Tattoo3DCarousel from "@/components/Tattoo3DCarousel";
import HighlightsSection from "@/components/HighlightsSection";
import BudgetCalculator from "@/components/BudgetCalculator";
import AboutDan from "@/components/AboutDan";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import FairyBackground from "@/components/FairyBackground";

export default function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleExploreGallery = () => {
    setIsGalleryOpen(true);
    setTimeout(() => {
      const el = document.getElementById("carrossel-3d");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const scrollToSection = (id: string) => {
    if (id === "carrossel-3d") {
      handleExploreGallery();
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-white font-sans selection:bg-rose-600 selection:text-white relative overflow-x-hidden">
      {/* O Refúgio da Fada Background */}
      <FairyBackground />

      {/* Page Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar onExploreGallery={handleExploreGallery} />

        {/* Hero Section */}
        <main>
          <HeroSection 
            onOpenBudget={() => scrollToSection("orcamento")}
            onExploreGallery={handleExploreGallery}
          />

          {/* Tattoo Gallery (Hidden by default until user clicks 'Ver Tatuagens Disponíveis') */}
          <Tattoo3DCarousel 
            isOpen={isGalleryOpen}
            onToggleGallery={() => setIsGalleryOpen(!isGalleryOpen)}
          />

          {/* Highlights */}
          <HighlightsSection />

          {/* Budget Simulator */}
          <BudgetCalculator />

          {/* About Dan */}
          <AboutDan />
        </main>

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
