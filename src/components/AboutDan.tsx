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
    <section id="sobre-o-dan" className="relative py-24 bg-zinc-950/80 overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Real Studio Action Photo Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Outer decorative border frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-rose-600 via-amber-500 to-rose-400 opacity-20 blur-xl"></div>
              
              {/* Main Photo Card: Dan Tatuando em Ação */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl">
                <img 
                  src={ARTIST_INFO.actionImage} 
                  alt="DAN Tatuando no Studio Honey"
                  className="w-full h-[480px] object-cover object-center hover:scale-105 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {/* Floating Badge on Photo */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={ARTIST_INFO.avatarImage} 
                      alt={ARTIST_INFO.name} 
                      className="w-10 h-10 rounded-full object-cover border border-rose-500" 
                    />
                    <div>
                      <div className="text-sm font-bold text-white font-display">DAN</div>
                      <div className="text-xs text-rose-400">@danzauutattoo</div>
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-zinc-400">
                    <div>Brasília • Asa Norte</div>
                    <div className="text-amber-400 font-medium">Tattoo Honey Studio</div>
                  </div>
                </div>

              </div>

              {/* Floating Mini Card with Live Action Pill */}
              <div className="absolute -top-4 -right-4 p-3.5 rounded-2xl bg-zinc-900/95 border border-white/15 backdrop-blur-xl shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <span className="text-lg font-display">✣</span>
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">No Estúdio em Ação</div>
                  <div className="text-emerald-400 font-medium">Biossegurança Rigorosa</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Studio Description */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1.5 backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-widest text-rose-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                Sobre o Artista
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              A Arte e Identidade por Trás de <span className="bg-gradient-to-r from-rose-400 to-amber-300 bg-clip-text text-transparent">DAN</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Com foco em traços finos e estética autoral, <strong>DAN</strong> desenvolve trabalhos que unem a precisão técnica do <em>Fine Line</em> à atmosfera misteriosa do <em>Cyber-Sigilism</em>, referências clássicas e arte conceitual.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Atendendo no acolhedor <strong>Tattoo Honey Studio</strong> na <strong>Asa Norte em Brasília</strong>, cada sessão é planejada para ser uma experiência confortável, segura e personalizada, respeitando o fluxo anatômico e a história de quem vai carregar a arte para sempre.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Biossegurança Hospitalar</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Agulhas e materiais 100% descartáveis, pigmentos aprovados pela Anvisa e esterilização com autoclave.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Design Anatômico Autoral</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Cada sigilo e curva é desenhado especificamente para acompanhar a musculatura e proporção do seu corpo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Experiência Humanizada</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Ambiente tranquilo, música selecionada, atenção ao conforto e suporte pós-tatuagem completo.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Asa Norte • Brasília</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Espaço privativo dentro do conceituado Tattoo Honey Studio.
                </p>
              </div>

            </div>

            {/* CTA Buttons with Real WhatsApp Icon */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950 transition-all hover:scale-105 border border-emerald-400/30"
              >
                <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                <span>Conversar com o Dan no WhatsApp</span>
              </a>

              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 text-zinc-200 text-xs sm:text-sm font-semibold hover:bg-white/10 hover:border-rose-500/40 transition-all"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
                <span>Ver Feed no Instagram</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
