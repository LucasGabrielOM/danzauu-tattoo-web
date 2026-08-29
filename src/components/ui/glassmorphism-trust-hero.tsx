import { 
  Sparkles, 
  ShieldCheck, 
  MapPin,
  Instagram,
  ArrowRight
} from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";
import danHeroImg from "@/assets/dan-hero.jpg";

export default function HeroSection({
  onOpenBudget,
  onExploreGallery
}: {
  onOpenBudget?: () => void;
  onExploreGallery?: () => void;
}) {
  const handleWhatsAppDirect = () => {
    if (onOpenBudget) {
      onOpenBudget();
      return;
    }
    const text = encodeURIComponent("Olá Dan! Vi seu site e gostaria de fazer um orçamento para uma tatuagem autoral.");
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full text-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-zinc-800/80">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: BIO & SOCIAL LINKS --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Location & Artist Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-1.5 backdrop-blur-md shadow-md">
                <img 
                  src={ARTIST_INFO.avatarImage} 
                  alt={ARTIST_INFO.name} 
                  className="w-5 h-5 rounded-full object-cover border border-rose-400"
                />
                <span className="text-xs font-semibold tracking-wider text-zinc-300 flex items-center gap-2 uppercase">
                  <span>DAN TATTOO</span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1 text-zinc-300 font-medium normal-case">
                    <MapPin className="w-3 h-3 text-rose-500" />
                    Asa Norte, Brasília
                  </span>
                </span>
              </div>
            </div>

            {/* Heading (Updated as requested by client in screenshot: "Arte Autoral & Composição Anatômica na Pele") */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] font-display text-white">
              Arte Autoral & <br />
              <span className="bg-gradient-to-r from-rose-500 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                Composição Anatômica
              </span> <br />
              na Pele.
            </h1>

            {/* Subtitle Bio (Updated as requested by client in screenshot: "Projetos autorais e composição única") */}
            <p className="max-w-xl text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Projetos autorais e composição única por <strong className="text-white font-bold">DAN ({ARTIST_INFO.handle})</strong> no Tattoo Honey Studio.
            </p>

            {/* Social Buttons & Main Actions (Instagram, WhatsApp, TikTok) */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button 
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-xs sm:text-sm font-bold text-white shadow-xl transition-all active:scale-95"
              >
                <img 
                  src={ARTIST_INFO.whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-4 h-4 object-contain"
                />
                <span>WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
              </button>
              
              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-xs sm:text-sm font-bold text-white shadow-xl transition-all active:scale-95"
              >
                <Instagram className="w-4 h-4 text-rose-500" />
                <span>Instagram</span>
              </a>

              <a
                href={ARTIST_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-xs sm:text-sm font-bold text-white shadow-xl transition-all active:scale-95"
              >
                {/* TikTok SVG Icon */}
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.82V7.58a6.34 6.34 0 0 0-5.11 6.16 6.34 6.34 0 0 0 10.74 4.54 6.3 6.3 0 0 0 1.96-4.54V9a8.16 8.16 0 0 0 4.77 1.52V7.12a4.85 4.85 0 0 1-2.25-.43z"/>
                </svg>
                <span>TikTok</span>
              </a>

              <button 
                onClick={onExploreGallery ? onExploreGallery : () => scrollToSection("carrossel-3d")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-rose-500/40 bg-zinc-950 hover:bg-zinc-800 px-5 py-2.5 text-xs sm:text-sm font-bold text-rose-400 transition-all shadow-xl active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Ver Tatuagens Disponíveis</span>
              </button>
            </div>

            {/* Proof text */}
            <div className="flex items-center gap-6 text-xs text-zinc-400 pt-2 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Agenda Aberta em Brasília</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-rose-500" />
                <span>Biossegurança & Materiais Descartáveis</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: DAN'S PHOTO --- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/90 shadow-2xl group">
              <img 
                src={danHeroImg} 
                alt="Dan Zauu Tatuador" 
                className="w-full h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">DAN ZAUU</h3>
                  <p className="text-xs text-zinc-400">@danzauutattoo • Tattoo Honey Studio</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-zinc-900 text-rose-400 border border-zinc-800">
                  O Artista
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
