import { useState, useEffect } from "react";
import { 
  Instagram, 
  Menu, 
  X, 
  MapPin 
} from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Tatuagens Disponíveis", href: "#carrossel-3d" },
    { name: "Destaques", href: "#destaques" },
    { name: "O Artista", href: "#sobre-o-dan" },
    { name: "Orçamento", href: "#orcamento" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0c130d]/90 backdrop-blur-md border-b border-[#c9a227]/30 py-3 shadow-lg" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#c9a227] to-[#e3c873] group-hover:scale-105 transition-transform shadow-md">
            <img 
              src={ARTIST_INFO.avatarImage} 
              alt={ARTIST_INFO.name} 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-cormorant tracking-widest text-lg font-medium text-[#f4ecd8] group-hover:text-[#e3c873] transition-colors flex items-center gap-1.5">
              DAN <span className="text-xs text-[#e3c873] font-eb italic tracking-normal">TATTOO</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#f4ecd8]/70 font-eb italic">
              <MapPin className="w-3 h-3 text-[#c9a227]" />
              <span>Asa Norte • BSB</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-eb italic text-[#f4ecd8]/85 hover:text-[#e3c873] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={ARTIST_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 text-xs font-eb italic text-[#f4ecd8] hover:text-[#e3c873] hover:bg-[#c9a227]/20 transition-all"
          >
            <Instagram className="w-3.5 h-3.5 text-[#e3c873]" />
            <span>@danzauutattoo</span>
          </a>

          <a
            href={ARTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-fada text-xs"
          >
            <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
            <span>Orçamento →</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#1a2417] border border-[#c9a227]/30 text-[#f4ecd8] hover:text-[#e3c873]"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c130d]/95 backdrop-blur-xl border-b border-[#c9a227]/30 px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-eb italic text-[#f4ecd8] hover:text-[#e3c873] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#c9a227]/20 flex flex-col gap-3">
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#c9a227]/30 bg-[#1a2417] text-xs font-eb italic text-[#f4ecd8]"
            >
              <Instagram className="w-4 h-4 text-[#e3c873]" />
              <span>Ver perfil no Instagram</span>
            </a>
            <a
              href={ARTIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-fada justify-center text-xs"
            >
              <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
              <span>Chamar no WhatsApp →</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
