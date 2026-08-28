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
    { name: "Flashs & Portfólio 3D", href: "#carrossel-3d" },
    { name: "Destaques", href: "#destaques" },
    { name: "O Artista", href: "#sobre-o-dan" },
    { name: "Simulador de Orçamento", href: "#orcamento" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Real Dan Profile Photo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-rose-600 via-amber-500 to-rose-400 group-hover:scale-105 transition-transform shadow-lg shadow-rose-900/30">
              <img 
                src={ARTIST_INFO.avatarImage} 
                alt={ARTIST_INFO.name} 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-zinc-950 border border-white/20 flex items-center justify-center text-[9px] text-rose-400 font-bold">
              ✣
            </span>
          </div>
          <div>
            <div className="font-display tracking-widest text-lg font-bold text-white group-hover:text-rose-300 transition-colors flex items-center gap-1.5">
              DAN <span className="text-[10px] text-zinc-400 font-sans tracking-normal font-normal">TATTOO</span>
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
              className="text-sm text-zinc-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-rose-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
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
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-rose-400" />
            <span>@danzauutattoo</span>
          </a>

          <a
            href={ARTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-xs font-semibold text-white shadow-md hover:scale-105 transition-all border border-emerald-400/30"
          >
            <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
            <span>Orçamento</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-zinc-300 hover:text-rose-400 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={ARTIST_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-sm text-zinc-200"
            >
              <Instagram className="w-4 h-4 text-rose-400" />
              <span>Ver perfil no Instagram</span>
            </a>
            <a
              href={ARTIST_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-2.5 rounded-xl bg-emerald-600 text-sm font-semibold text-white"
            >
              <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
