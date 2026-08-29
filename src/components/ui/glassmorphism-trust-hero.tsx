import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  MapPin 
} from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

const BASE = import.meta.env.BASE_URL;

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
    <div className="relative w-full bg-zinc-950/40 text-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 border-b border-white/5">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-950/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Clean Location & Artist Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 backdrop-blur-md">
                <img 
                  src={ARTIST_INFO.avatarImage} 
                  alt={ARTIST_INFO.name} 
                  className="w-5 h-5 rounded-full object-cover border border-rose-400"
                />
                <span className="text-xs font-semibold tracking-wider text-rose-300 flex items-center gap-2 uppercase">
                  <span>DAN TATTOO</span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1 text-zinc-300 font-normal normal-case">
                    <MapPin className="w-3 h-3 text-rose-400" />
                    Asa Norte, Brasília
                  </span>
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] font-display">
              Arte Autoral & <br />
              <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-amber-200 bg-clip-text text-transparent">
                Cyber-Sigilism
              </span> <br />
              na Pele.
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base sm:text-lg text-zinc-300 leading-relaxed">
              Traços ultrafinos (Fine Line), composição anatômica exclusiva e projetos autorais por <strong className="text-white">DAN ({ARTIST_INFO.handle})</strong> no Tattoo Honey Studio.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-emerald-500/40 bg-zinc-900/90 hover:bg-emerald-950/40 hover:border-emerald-400 px-7 py-3.5 text-sm font-bold text-zinc-100 hover:text-white shadow-lg transition-all active:scale-95"
              >
                <img 
                  src={ARTIST_INFO.whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain"
                />
                <span>Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
              
              <button 
                onClick={onExploreGallery ? onExploreGallery : () => scrollToSection("carrossel-3d")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                <Sparkles className="w-4 h-4 text-rose-400" />
                Ver Tatuagens Disponíveis
              </button>
            </div>

            {/* Proof text */}
            <div className="flex items-center gap-6 text-xs text-zinc-400 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Agenda Aberta em Brasília</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-zinc-300" />
                <span>Biossegurança & Materiais Descartáveis</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl group">
              <img 
                src={`${BASE}assets/tattoo-sword-redmoons.jpg`} 
                alt="Tatuagem Autoral Dan" 
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">Fine Line & Luas Carmesim</h3>
                  <p className="text-xs text-zinc-400">Trabalho autoral por Dan Zauu</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  Foto Real
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
