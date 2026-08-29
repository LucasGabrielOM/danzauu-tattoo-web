import { useState } from "react";
import { 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Flame, 
  Star, 
  CheckCircle2, 
  Quote
} from "lucide-react";
import { HIGHLIGHTS_STORIES, CLIENT_FEEDBACKS, ARTIST_INFO } from "@/data/tattoosData";

const BASE = import.meta.env.BASE_URL;

export default function HighlightsSection() {
  const [activeHighlight, setActiveHighlight] = useState<string>("flashs");

  const iconsMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Compass: <Compass className="w-5 h-5 text-rose-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    Flame: <Flame className="w-5 h-5 text-rose-500" />,
    Star: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
  };

  return (
    <section id="destaques" className="relative py-20 bg-transparent border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 mb-3 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              Informações & Destaques
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Tudo o Que Você Precisa Saber
          </h2>
          <p className="text-zinc-400 font-medium text-sm mt-2">
            Entenda o processo autoral do Dan: reserva de flashs, biossegurança e depoimentos de clientes.
          </p>
        </div>

        {/* Story Circle Highlights Buttons */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none">
          {HIGHLIGHTS_STORIES.map((story) => {
            const isActive = activeHighlight === story.id;
            return (
              <button
                key={story.id}
                onClick={() => setActiveHighlight(story.id)}
                className="flex flex-col items-center gap-2 group focus:outline-none transition-all shrink-0"
              >
                {/* Story Ring */}
                <div 
                  className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full p-[2.5px] transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-tr from-rose-600 to-amber-500 scale-105 shadow-md shadow-rose-900/40" 
                      : "bg-zinc-800 hover:bg-zinc-700 opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center p-1 overflow-hidden shadow-inner">
                    {story.image ? (
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full rounded-full object-cover" 
                      />
                    ) : (
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white`}>
                        {iconsMap[story.icon]}
                      </div>
                    )}
                  </div>
                </div>

                {/* Story Label */}
                <span className={`text-xs font-semibold ${
                  isActive ? "text-rose-400 font-bold" : "text-zinc-400 group-hover:text-white"
                }`}>
                  {story.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlight Content Container */}
        <div className="mt-10 max-w-4xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          
          {/* 1. Flashs Content */}
          {activeHighlight === "flashs" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Flashs Autorais Exclusivos</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">Desenhos criados com estética cyber-sigilism, estátuas e traço autoral.</p>
                </div>
                <a
                  href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de ver o catálogo de flashs disponíveis!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md self-start sm:self-auto"
                >
                  <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                  Pedir Catálogo no WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                <div className="sm:col-span-4 rounded-2xl overflow-hidden border border-zinc-800 shadow-md">
                  <img 
                    src={`${BASE}assets/flash-statue-anime.jpg`} 
                    alt="Flash Autoral Dan" 
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </div>
                <div className="sm:col-span-8 space-y-3">
                  <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800">
                    <div className="text-rose-400 font-bold text-xs mb-0.5">100% Autoral & Exclusivo</div>
                    <p className="text-xs text-zinc-300">Cada desenho é exclusivo e tatuado apenas uma vez.</p>
                  </div>
                  <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800">
                    <div className="text-rose-400 font-bold text-xs mb-0.5">Aplicação Anatômica</div>
                    <p className="text-xs text-zinc-300">Artes projetadas para acompanhar as curvas do corpo.</p>
                  </div>
                  <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800">
                    <div className="text-emerald-400 font-bold text-xs mb-0.5">Tintas Premium</div>
                    <p className="text-xs text-zinc-300">Pigmentos aprovados de altíssima fixação e durabilidade.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Disponíveis Content */}
          {activeHighlight === "disponiveis" && (
            <div className="space-y-6">
              <div className="border-b border-zinc-800 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Projetos & Flashs Disponíveis</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">Veja como reservar sua arte exclusiva diretamente no estúdio.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800">
                  <h4 className="text-white font-bold text-sm mb-3">Como reservar:</h4>
                  <ul className="space-y-2.5 text-xs text-zinc-300 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Envie uma mensagem pelo WhatsApp indicando a arte.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Definimos o tamanho ideal e o local do corpo.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Sinal de agendamento garante a arte exclusiva para você.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm mb-2">Projeto 100% Personalizado</h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Se você tem uma referência ou conceito especial, o Dan cria o projeto sob medida para você.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de encomendar um projeto de tatuagem 100% personalizado.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                    Criar Projeto Personalizado
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 3. Cicatrizadas Content */}
          {activeHighlight === "cicatrizadas" && (
            <div className="space-y-6">
              <div className="border-b border-zinc-800 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Tatuagens Cicatrizadas</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">Resultado real na pele após o processo completo de cura.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-4 rounded-2xl overflow-hidden border border-zinc-800 shadow-md">
                  <img 
                    src={`${BASE}assets/tattoo-sword-redmoons.jpg`} 
                    alt="Tatuagem Cicatrizada Espada e Luas" 
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="sm:col-span-8 space-y-3">
                  <div className="bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
                    <h4 className="text-white font-bold text-xs mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Traço Fino Definido
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Aplicação com profundidade e voltagem controladas, garantindo nitidez sem estouro de traço.
                    </p>
                  </div>

                  <div className="bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800">
                    <h4 className="text-white font-bold text-xs mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-rose-400" />
                      Suporte de Pós-Atendimento
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Guia completo de pós-cuidados e suporte constante via WhatsApp durante a cicatrização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Tattoos Recentes */}
          {activeHighlight === "tattoos" && (
            <div className="space-y-6">
              <div className="border-b border-zinc-800 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Tattoo Honey Studio</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">Estúdio aconchegante com atendimento individualizado na Asa Norte, Brasília.</p>
              </div>

              <div className="p-4 bg-zinc-950/60 rounded-2xl border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-300 space-y-1 font-medium">
                  <div>📍 <strong>Endereço:</strong> Asa Norte, Brasília - DF</div>
                  <div>🏢 <strong>Estúdio:</strong> Tattoo Honey Studio (@tattoohoneystudio)</div>
                  <div>⏰ <strong>Atendimento:</strong> Com agendamento prévio no WhatsApp</div>
                </div>
                <a
                  href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de consultar os horários disponíveis na agenda.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shrink-0 flex items-center gap-2 shadow-md"
                >
                  <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                  Consultar Agenda
                </a>
              </div>
            </div>
          )}

          {/* 5. Feedbacks */}
          {activeHighlight === "feedbacks" && (
            <div className="space-y-6">
              <div className="border-b border-zinc-800 pb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Relatos de Clientes</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">Avaliações reais de quem já se tatuou com o Dan.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CLIENT_FEEDBACKS.map((fb) => (
                  <div key={fb.id} className="bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(fb.stars)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-4 h-4 text-rose-500/40 mb-2" />
                      <p className="text-xs text-zinc-300 italic leading-relaxed font-normal">
                        "{fb.comment}"
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-zinc-800">
                      <div className="text-xs font-bold text-white">{fb.name}</div>
                      <div className="text-[10px] text-rose-400 font-medium">{fb.city} • {fb.tattoo}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
