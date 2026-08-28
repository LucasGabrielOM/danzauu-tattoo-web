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

export default function HighlightsSection() {
  const [activeHighlight, setActiveHighlight] = useState<string>("flashs");

  const iconsMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-amber-300" />,
    Compass: <Compass className="w-5 h-5 text-orange-300" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-300" />,
    Flame: <Flame className="w-5 h-5 text-rose-300" />,
    Star: <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
  };

  return (
    <section id="destaques" className="relative py-20 bg-zinc-950/70 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 backdrop-blur-md mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Destaques do Instagram @danzauutattoo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Tudo o Que Você Precisa Saber
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Explore os mesmos destaques que fazem sucesso no perfil do Dan: flashs, fotos de tatuagens cicatrizadas e depoimentos reais.
          </p>
        </div>

        {/* Story Circle Highlights Buttons */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-x-auto pb-4 scrollbar-none">
          {HIGHLIGHTS_STORIES.map((story) => {
            const isActive = activeHighlight === story.id;
            return (
              <button
                key={story.id}
                onClick={() => setActiveHighlight(story.id)}
                className="flex flex-col items-center gap-2.5 group focus:outline-none transition-transform active:scale-95 shrink-0"
              >
                {/* Story Gradient Ring */}
                <div 
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-tr from-rose-500 via-amber-500 to-rose-400 scale-110 shadow-lg shadow-rose-900/30 ring-2 ring-rose-500/40" 
                      : "bg-gradient-to-tr from-zinc-700 to-zinc-800 hover:from-rose-700 hover:to-amber-700"
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center p-1 overflow-hidden">
                    {story.image ? (
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform" 
                      />
                    ) : (
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white`}>
                        {iconsMap[story.icon]}
                      </div>
                    )}
                  </div>
                </div>

                {/* Story Label */}
                <span className={`text-xs font-medium tracking-tight transition-colors ${
                  isActive ? "text-white font-bold" : "text-zinc-400 group-hover:text-zinc-200"
                }`}>
                  {story.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlight Content Container */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-zinc-900/50 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* 1. Flashs Content */}
          {activeHighlight === "flashs" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">✣ Flashs Autorais Exclusivos ✣</h3>
                  <p className="text-sm text-zinc-400 mt-1">Desenhos criados pelo Dan com estética única de cyber-sigilism, estátuas e anime.</p>
                </div>
                <a
                  href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de ver o catálogo completo de flashs disponíveis para tatuar!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:brightness-110 text-white text-xs font-bold transition-all shadow-md self-start sm:self-auto border border-emerald-400/30"
                >
                  <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                  Pedir Catálogo no WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                <div className="sm:col-span-4 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img 
                    src="/assets/flash-statue-anime.jpg" 
                    alt="Flash Autoral Dan" 
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </div>
                <div className="sm:col-span-8 space-y-3">
                  <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-white/5">
                    <div className="text-rose-400 font-bold text-xs mb-0.5">100% Autoral & Exclusivo</div>
                    <p className="text-[11px] text-zinc-400">Cada desenho é exclusivo e tatuado apenas uma vez.</p>
                  </div>
                  <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-white/5">
                    <div className="text-amber-400 font-bold text-xs mb-0.5">Aplicação Anatômica</div>
                    <p className="text-[11px] text-zinc-400">Artes projetadas para acompanhar as curvas do corpo (braço, coxa, coluna).</p>
                  </div>
                  <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-white/5">
                    <div className="text-emerald-400 font-bold text-xs mb-0.5">Tinta Vermelha & Preta</div>
                    <p className="text-[11px] text-zinc-400">Pigmentos premium de altíssima fixação e durabilidade.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Disponíveis Content */}
          {activeHighlight === "disponiveis" && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold text-white font-display">✣ Projetos Disponíveis</h3>
                <p className="text-sm text-zinc-400 mt-1">Artes grandes (costas, pernas e braços fechados) aguardando um corpo para ganhar vida.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-950/70 p-5 rounded-2xl border border-white/10">
                  <h4 className="text-white font-bold text-base mb-2">Como funciona a reserva?</h4>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Envie uma mensagem pelo WhatsApp indicando a arte desejada.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Definimos o tamanho ideal e o local do corpo.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Sinal de agendamento garante a exclusividade do desenho para você.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-950/70 p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-base mb-2">Quer um projeto personalizado?</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Se você tem uma referência ou conceito especial, o Dan cria o projeto 100% sob medida para você.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de encomendar um projeto de tatuagem 100% personalizado.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold transition-all border border-emerald-400/30"
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
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold text-white font-display">Tatuagens Cicatrizadas & Fotos Reais</h3>
                <p className="text-sm text-zinc-400 mt-1">A verdadeira qualidade de um tatuador se mede no resultado após a cicatrização completa.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-4 rounded-2xl overflow-hidden border border-rose-500/30 shadow-xl">
                  <img 
                    src="/assets/tattoo-sword-redmoons.jpg" 
                    alt="Tatuagem Cicatrizada Espada e Luas" 
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="sm:col-span-8 space-y-3">
                  <div className="bg-zinc-950/60 p-4 rounded-2xl border border-white/5">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Traço Fino Sem Estourar
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Aplicação com profundidade e voltagem controladas, garantindo que o Fine Line e as luas carmesim permaneçam nítidos por anos.
                    </p>
                  </div>

                  <div className="bg-zinc-950/60 p-4 rounded-2xl border border-white/5">
                    <h4 className="text-white font-semibold text-sm mb-1.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      Acompanhamento Pós-Tattoo
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Você recebe o guia completo de cuidados e suporte direto pelo WhatsApp durante todo o período de cicatrização da sua tatuagem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Tattoos Recentes */}
          {activeHighlight === "tattoos" && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold text-white font-display">Trabalhos no Tattoo Honey Studio</h3>
                <p className="text-sm text-zinc-400 mt-1">Atendimento com hora marcada em estúdio privativo e acolhedor na Asa Norte, Brasília.</p>
              </div>

              <div className="p-4 bg-zinc-950/60 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-300 space-y-1">
                  <div>📍 <strong>Endereço:</strong> Asa Norte, Brasília - DF</div>
                  <div>🏢 <strong>Estúdio:</strong> @tattoohoneystudio</div>
                  <div>⏰ <strong>Horários:</strong> Terça a Sábado (com agendamento prévio)</div>
                </div>
                <a
                  href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de consultar os dias e horários disponíveis na agenda para tatuar na Asa Norte.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:brightness-110 text-white text-xs font-bold shadow-md transition-all shrink-0 flex items-center gap-2 border border-emerald-400/30"
                >
                  <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                  Consultar Agenda
                </a>
              </div>
            </div>
          )}

          {/* 5. Feedbacks */}
          {activeHighlight === "feedbacks" && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold text-white font-display">Feedbacks & Depoimentos Reais</h3>
                <p className="text-sm text-zinc-400 mt-1">O que os clientes dizem sobre a experiência com o Dan.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CLIENT_FEEDBACKS.map((fb) => (
                  <div key={fb.id} className="bg-zinc-950/70 p-5 rounded-2xl border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(fb.stars)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-rose-500/40 mb-2" />
                      <p className="text-xs text-zinc-300 italic leading-relaxed">
                        "{fb.comment}"
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5">
                      <div className="text-xs font-bold text-white">{fb.name}</div>
                      <div className="text-[10px] text-zinc-500">{fb.city} • {fb.tattoo}</div>
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
