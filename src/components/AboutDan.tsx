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
    <section id="sobre-o-dan" className="relative py-20 bg-transparent border-t border-zinc-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Photo */}
          <div className="lg:col-span-5 relative mx-auto max-w-sm sm:max-w-md w-full">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <img 
                src={ARTIST_INFO.actionImage} 
                alt="DAN Tatuando no Studio Honey"
                className="w-full h-[440px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={ARTIST_INFO.avatarImage} 
                    alt={ARTIST_INFO.name} 
                    className="w-9 h-9 rounded-full object-cover border border-rose-400" 
                  />
                  <div>
                    <div className="text-xs font-bold text-white">DAN TATTOO</div>
                    <div className="text-[10px] text-rose-400 font-semibold">@danzauutattoo</div>
                  </div>
                </div>
                <div className="text-right text-[10px] text-zinc-400 font-medium">
                  <div>Tattoo Honey Studio</div>
                  <div className="text-white font-bold">Asa Norte • BSB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                O Artista
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Arte & Identidade por Trás de <span className="text-rose-400">DAN</span>
            </h2>

            <p className="text-zinc-300 text-sm leading-relaxed font-normal">
              Especialista em composições anatômicas e arte autoral, <strong className="text-white font-bold">DAN</strong> desenvolve projetos exclusivos pensados para valorizar o fluxo natural do corpo.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
              Atendendo no acolhedor <strong>Tattoo Honey Studio</strong> na <strong>Asa Norte em Brasília</strong>, cada atendimento é individualizado, garantindo biossegurança máxima, conforto e acompanhamento em todas as etapas da sua tatuagem.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Biossegurança Rigorosa</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Materiais 100% descartáveis e pigmentos liberados pela Anvisa.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Projetos Exclusivos</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Artes autorais pensadas sob medida para seu corpo.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Atendimento Individualizado</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Ambiente privativo e suporte pós-tattoo completo.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Asa Norte • Brasília</span>
                </div>
                <p className="text-[11px] text-zinc-400">
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
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-bold shadow-md transition-all active:scale-95"
              >
                <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>Falar com o Dan no WhatsApp</span>
              </a>

              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-xs font-bold hover:text-white hover:bg-zinc-800 transition-all"
              >
                <Instagram className="w-4 h-4 text-rose-500" />
                <span>Instagram @danzauutattoo</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
