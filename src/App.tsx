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
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c130d] text-[#f4ecd8] font-eb selection:bg-[#c9a227] selection:text-[#0c130d] relative overflow-x-hidden">
      {/* O Refúgio da Fada Background */}
      <FairyBackground />

      {/* Page Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <main>
          <HeroSection 
            onOpenBudget={() => scrollToSection("orcamento")}
            onExploreGallery={() => scrollToSection("carrossel-3d")}
          />

          {/* Tattoo Gallery */}
          <Tattoo3DCarousel />

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
