import { 
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
    <div className="relative w-full text-[#f4ecd8] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#c9a227]/20">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Eyebrow Subtitle matching refugio-da-fada.html */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a227]/35 bg-[#c9a227]/10 px-4 py-1.5 backdrop-blur-md">
                <img 
                  src={ARTIST_INFO.avatarImage} 
                  alt={ARTIST_INFO.name} 
                  className="w-5 h-5 rounded-full object-cover border border-[#e3c873]"
                />
                <span className="text-xs font-eb italic tracking-[0.25em] text-[#e3c873] uppercase flex items-center gap-2">
                  <span>DAN TATTOO</span>
                  <span className="text-[#c9a227]">•</span>
                  <span className="flex items-center gap-1 text-[#f4ecd8]/90 font-normal normal-case">
                    <MapPin className="w-3 h-3 text-[#c9a227]" />
                    Asa Norte, Brasília
                  </span>
                </span>
              </div>
            </div>

            {/* Heading matching Cormorant Garamond from refugio-da-fada.html */}
            <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.1] font-cormorant text-[#f4ecd8]">
              Arte Autoral & <br />
              <em className="font-italic text-[#e3c873]">
                Cyber-Sigilism
              </em> <br />
              na Pele.
            </h1>

            {/* Subtitle / Lede */}
            <p className="max-w-xl text-base sm:text-lg text-[#f4ecd8]/85 leading-relaxed font-eb italic">
              Traços ultrafinos (Fine Line), composição anatômica exclusiva e projetos autorais por <strong className="text-[#e3c873] not-italic">DAN ({ARTIST_INFO.handle})</strong> no Tattoo Honey Studio.
            </p>

            {/* CTAs matching .cta from refugio-da-fada.html */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={handleWhatsAppDirect}
                className="cta-fada justify-center text-sm font-eb italic"
              >
                <img 
                  src={ARTIST_INFO.whatsappIcon} 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain"
                />
                <span>Orçamento no WhatsApp →</span>
              </button>
              
              <button 
                onClick={onExploreGallery ? onExploreGallery : () => scrollToSection("carrossel-3d")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#1a2417]/80 px-7 py-3.5 text-sm font-eb italic text-[#f4ecd8] hover:text-[#e3c873] hover:border-[#e3c873] transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#e3c873]" />
                <span>Ver Tatuagens Disponíveis</span>
              </button>
            </div>

            {/* Proof text */}
            <div className="flex items-center gap-6 text-xs text-[#f4ecd8]/70 pt-2 font-eb italic">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e3c873] animate-pulse"></span>
                <span>Agenda Aberta em Brasília</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#c9a227]" />
                <span>Biossegurança Hospitalar & Anvisa</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden card-fada shadow-2xl group">
              <img 
                src={`${BASE}assets/tattoo-sword-redmoons.jpg`} 
                alt="Tatuagem Autoral Dan" 
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c130d] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0c130d]/90 backdrop-blur-md border border-[#c9a227]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#f4ecd8] font-cormorant">Espada & Luas Carmesim</h3>
                  <p className="text-xs text-[#f4ecd8]/70 font-eb italic">Trabalho autoral por Dan Zauu</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-eb italic font-bold bg-[#c9a227]/20 text-[#e3c873] border border-[#c9a227]/40">
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
