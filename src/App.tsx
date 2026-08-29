import Navbar from "@/components/Navbar";
import HeroSection from "@/components/ui/glassmorphism-trust-hero";
import Tattoo3DCarousel from "@/components/Tattoo3DCarousel";
import HighlightsSection from "@/components/HighlightsSection";
import BudgetCalculator from "@/components/BudgetCalculator";
import AboutDan from "@/components/AboutDan";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import AsciiBackground from "@/components/AsciiBackground";

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-600 selection:text-white relative overflow-x-hidden">
      {/* Animated ASCII / Matrix Canvas Background (Fixed behind content) */}
      <AsciiBackground />

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
