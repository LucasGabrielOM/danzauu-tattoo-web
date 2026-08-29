import { 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Heart, 
  Instagram
} from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function AboutDan() {
  return (
    <section id="sobre-o-dan" className="relative py-20 bg-transparent border-t border-[#c9a227]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Photo */}
          <div className="lg:col-span-5 relative mx-auto max-w-sm sm:max-w-md w-full">
            <div className="relative rounded-3xl overflow-hidden card-fada shadow-2xl">
              <img 
                src={ARTIST_INFO.actionImage} 
                alt="DAN Tatuando no Studio Honey"
                className="w-full h-[440px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c130d] via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#0c130d]/90 backdrop-blur-md border border-[#c9a227]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={ARTIST_INFO.avatarImage} 
                    alt={ARTIST_INFO.name} 
                    className="w-9 h-9 rounded-full object-cover border border-[#e3c873]" 
                  />
                  <div>
                    <div className="text-xs font-cormorant font-medium text-[#f4ecd8]">DAN TATTOO</div>
                    <div className="text-[10px] text-[#e3c873] font-eb italic">@danzauutattoo</div>
                  </div>
                </div>
                <div className="text-right text-[10px] text-[#f4ecd8]/70 font-eb italic">
                  <div>Tattoo Honey Studio</div>
                  <div className="text-[#e3c873]">Asa Norte • BSB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-3.5 py-1">
              <span className="text-xs font-eb italic tracking-widest text-[#e3c873] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
                O Artista
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-cormorant font-medium text-[#f4ecd8] tracking-tight">
              Arte & Identidade por Trás de <span className="text-[#e3c873]">DAN</span>
            </h2>

            <p className="text-[#f4ecd8]/90 text-base leading-relaxed font-eb italic">
              Especialista em traços ultrafinos (<em>Fine Line</em>) e na estética autoral de <em>Cyber-Sigilism</em>, <strong className="text-[#e3c873] not-italic">DAN</strong> desenvolve projetos exclusivos pensados para valorizar o fluxo anatômico do corpo.
            </p>

            <p className="text-[#f4ecd8]/75 text-sm leading-relaxed font-eb italic">
              Atendendo no acolhedor <strong>Tattoo Honey Studio</strong> na <strong>Asa Norte em Brasília</strong>, cada atendimento é individualizado, garantindo biossegurança máxima, conforto e acompanhamento em todas as etapas da sua tatuagem.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              
              <div className="p-3.5 rounded-xl bg-[#0c130d]/60 border border-[#c9a227]/20 space-y-1">
                <div className="flex items-center gap-2 text-[#e3c873] font-cormorant font-medium text-base">
                  <ShieldCheck className="w-4 h-4 text-[#6b7d5e]" />
                  <span>Biossegurança Rigorosa</span>
                </div>
                <p className="text-xs text-[#f4ecd8]/70 font-eb italic">
                  Materiais 100% descartáveis e pigmentos liberados pela Anvisa.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c130d]/60 border border-[#c9a227]/20 space-y-1">
                <div className="flex items-center gap-2 text-[#e3c873] font-cormorant font-medium text-base">
                  <Award className="w-4 h-4 text-[#c9a227]" />
                  <span>Projetos Exclusivos</span>
                </div>
                <p className="text-xs text-[#f4ecd8]/70 font-eb italic">
                  Artes autorais pensadas sob medida para seu corpo.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c130d]/60 border border-[#c9a227]/20 space-y-1">
                <div className="flex items-center gap-2 text-[#e3c873] font-cormorant font-medium text-base">
                  <Heart className="w-4 h-4 text-[#d4a574]" />
                  <span>Atendimento Individualizado</span>
                </div>
                <p className="text-xs text-[#f4ecd8]/70 font-eb italic">
                  Ambiente privativo e suporte pós-tattoo completo.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c130d]/60 border border-[#c9a227]/20 space-y-1">
                <div className="flex items-center gap-2 text-[#e3c873] font-cormorant font-medium text-base">
                  <MapPin className="w-4 h-4 text-[#c9a227]" />
                  <span>Asa Norte • Brasília</span>
                </div>
                <p className="text-xs text-[#f4ecd8]/70 font-eb italic">
                  Estúdio na Asa Norte com fácil acesso.
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-fada text-xs font-eb italic"
              >
                <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>Falar com o Dan no WhatsApp →</span>
              </a>

              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#c9a227]/30 bg-[#1a2417]/80 text-[#f4ecd8] text-xs font-eb italic hover:text-[#e3c873] hover:border-[#e3c873] transition-all"
              >
                <Instagram className="w-4 h-4 text-[#e3c873]" />
                <span>Instagram @danzauutattoo</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
