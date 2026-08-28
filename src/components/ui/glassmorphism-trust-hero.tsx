import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Crown, 
  Star, 
  Flame, 
  Moon, 
  Compass, 
  Zap, 
  Feather, 
  Eye
} from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

// --- ARTISTIC STYLES & MOTIFS ---
const STYLES_MARQUEE = [
  { name: "Cyber-Sigilism", icon: Zap },
  { name: "Fine Line Autoral", icon: Feather },
  { name: "Dark Anime & Manga", icon: Eye },
  { name: "Luas Carmesim", icon: Moon },
  { name: "Neo-Ornamental", icon: Flame },
  { name: "Projetos Exclusivos", icon: Compass },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
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
    <div className="relative w-full bg-zinc-950 text-white overflow-hidden font-sans pt-16 md:pt-20">
      {/* 
        SCOPED ANIMATIONS 
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Atmospheric Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Background Image with Gradient Mask using Real Sword Tattoo and Texture */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/assets/flash-statue-anime.jpg')] bg-cover bg-center opacity-15 mix-blend-luminosity filter contrast-125"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 20%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 20%, black 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 md:pt-24 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Badge with Dan Avatar */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1.5 backdrop-blur-md transition-colors hover:bg-rose-500/20">
                <img 
                  src={ARTIST_INFO.avatarImage} 
                  alt={ARTIST_INFO.name} 
                  className="w-5 h-5 rounded-full object-cover border border-rose-400"
                />
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-rose-300 flex items-center gap-1.5 uppercase">
                  <span>DAN</span>
                  <span className="text-zinc-500">•</span>
                  <span>{ARTIST_INFO.studioName}</span>
                  <span className="text-zinc-500">•</span>
                  <span>{ARTIST_INFO.location}</span>
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 ml-1" />
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 
              className="animate-fade-in delay-200 text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Arte Autoral &<br />
              <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-amber-300 bg-clip-text text-transparent">
                Cyber-Sigilism
              </span><br />
              Gravado na Pele
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Traços ultrafinos (Fine Line), composição anatômica exclusiva e fusão única entre estética Dark Fantasy, anime e sigilos modernos por <strong className="text-white">DAN ({ARTIST_INFO.handle})</strong>.
            </p>

            {/* CTA Buttons with Real WhatsApp Icon */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={handleWhatsAppDirect}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-950/40 transition-all hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] border border-emerald-400/30"
              >
                <img 
                  src={ARTIST_INFO.whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-6 h-6 object-contain drop-shadow"
                />
                <span>Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={onExploreGallery ? onExploreGallery : () => scrollToSection("carrossel-3d")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-rose-500/40"
              >
                <Sparkles className="w-4 h-4 text-rose-400" />
                Ver Flashs & Portfólio 3D
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="animate-fade-in delay-500 flex items-center gap-6 text-xs text-zinc-400 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Agenda Aberta para Brasília</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-zinc-300" />
                <span>100% Materiais Descartáveis & Anvisa</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6 lg:mt-4">
            
            {/* Stats Card featuring Real Tattoo Preview */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-7 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-rose-500/30 transition-all duration-300">
              
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                
                {/* Header with Real Tattoo Mini Preview and Stats */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-rose-500/40 shadow-lg shrink-0">
                      <img 
                        src="/assets/tattoo-sword-redmoons.jpg" 
                        alt="Tattoo Real Dan" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                        {ARTIST_INFO.stats.projectsDelivered}
                        <span className="text-xs font-normal text-rose-400 border border-rose-500/30 rounded px-1.5 py-0.5">Tattoos</span>
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">Artes autorais no feed</div>
                    </div>
                  </div>

                  <img 
                    src={ARTIST_INFO.avatarImage} 
                    alt="Dan" 
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/15" 
                  />
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-2.5 mb-7">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">Feedbacks 5 Estrelas dos Clientes</span>
                    <span className="text-white font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400 inline" />
                      100% Positivos
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800/80">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
                  </div>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <StatItem value={ARTIST_INFO.stats.yearsExperience} label="Experiência" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="Asa Norte" label="Studio" />
                  <div className="w-px h-full bg-white/10 mx-auto" />
                  <StatItem value="100%" label="Exclusivo" />
                </div>

                {/* Tag Pills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    ORÇAMENTOS ABERTOS
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-300">
                    <Crown className="w-3 h-3 text-amber-400" />
                    AUTORAL
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-rose-300">
                    <span className="text-xs">✣</span>
                    FOTOS REAIS
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 py-6 backdrop-blur-xl">
              <h3 className="mb-4 px-6 text-xs font-semibold uppercase tracking-widest text-zinc-400 flex items-center justify-between">
                <span>Especialidades & Linguagens</span>
                <span className="text-[10px] text-rose-400/80 lowercase">@danzauutattoo</span>
              </h3>
              
              <div 
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-8 whitespace-nowrap px-4">
                  {[...STYLES_MARQUEE, ...STYLES_MARQUEE, ...STYLES_MARQUEE].map((style, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2.5 opacity-60 transition-all hover:opacity-100 hover:scale-105 cursor-default hover:text-rose-300"
                    >
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-rose-400">
                        <style.icon className="h-4 w-4 fill-current" />
                      </div>
                      <span className="text-sm font-semibold text-zinc-200 tracking-tight">
                        {style.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
