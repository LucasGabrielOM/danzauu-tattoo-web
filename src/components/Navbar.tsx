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
          ? "bg-[#0c130d]/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-rose-600 to-amber-500 group-hover:scale-105 transition-transform shadow-md">
            <img 
              src={ARTIST_INFO.avatarImage} 
              alt={ARTIST_INFO.name} 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-display tracking-widest text-base font-bold text-white group-hover:text-rose-400 transition-colors flex items-center gap-1.5">
              DAN <span className="text-[10px] text-rose-500 font-sans tracking-normal font-normal">TATTOO</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-zinc-400">
              <MapPin className="w-3 h-3 text-rose-500" />
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
              className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
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
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-rose-500" />
            <span>@danzauutattoo</span>
          </a>

          <a
            href={ARTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md transition-all active:scale-95"
          >
            <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
            <span>Orçamento</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c130d]/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-zinc-200 hover:text-rose-400 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-semibold text-zinc-300"
            >
              <Instagram className="w-4 h-4 text-rose-500" />
              <span>Ver perfil no Instagram</span>
            </a>
            <a
              href={ARTIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md"
            >
              <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
