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
    Sparkles: <Sparkles className="w-5 h-5 text-[#e3c873]" />,
    Compass: <Compass className="w-5 h-5 text-[#c9a227]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#6b7d5e]" />,
    Flame: <Flame className="w-5 h-5 text-[#d4a574]" />,
    Star: <Star className="w-5 h-5 text-[#e3c873] fill-[#e3c873]" />
  };

  return (
    <section id="destaques" className="relative py-20 bg-transparent border-y border-[#c9a227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-3.5 py-1 mb-3">
            <span className="text-xs font-eb italic tracking-widest text-[#e3c873] uppercase">
              Informações & Destaques
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-cormorant font-medium text-[#f4ecd8] tracking-tight">
            Tudo o Que Você Precisa Saber
          </h2>
          <p className="text-[#f4ecd8]/80 font-eb italic text-base mt-2">
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
                      ? "bg-gradient-to-tr from-[#c9a227] to-[#e3c873] scale-105 shadow-md shadow-[#c9a227]/30" 
                      : "bg-[#c9a227]/20 hover:bg-[#c9a227]/40 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-[#0c130d] flex items-center justify-center p-1 overflow-hidden">
                    {story.image ? (
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full rounded-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-[#1a2417] flex items-center justify-center text-[#e3c873]">
                        {iconsMap[story.icon]}
                      </div>
                    )}
                  </div>
                </div>

                {/* Story Label */}
                <span className={`text-xs font-eb italic ${
                  isActive ? "text-[#e3c873] font-bold" : "text-[#f4ecd8]/70 group-hover:text-[#f4ecd8]"
                }`}>
                  {story.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlight Content Container */}
        <div className="mt-10 max-w-4xl mx-auto rounded-3xl card-fada p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          
          {/* 1. Flashs Content */}
          {activeHighlight === "flashs" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#c9a227]/20 pb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-cormorant font-medium text-[#f4ecd8]">Flashs Autorais Exclusivos</h3>
                  <p className="text-xs sm:text-sm text-[#f4ecd8]/75 font-eb italic mt-1">Desenhos criados com estética cyber-sigilism, estátuas e fine line.</p>
                </div>
                <a
                  href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de ver o catálogo de flashs disponíveis!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-fada text-xs self-start sm:self-auto"
                >
                  <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                  <span>Pedir Catálogo no WhatsApp →</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center pt-2">
                <div className="sm:col-span-4 rounded-2xl overflow-hidden border border-[#c9a227]/30 shadow-lg">
                  <img 
                    src={`${BASE}assets/flash-statue-anime.jpg`} 
                    alt="Flash Autoral Dan" 
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                </div>
                <div className="sm:col-span-8 space-y-3">
                  <div className="bg-[#0c130d]/60 p-3.5 rounded-2xl border border-[#c9a227]/20">
                    <div className="text-[#e3c873] font-bold text-xs mb-0.5">100% Autoral & Exclusivo</div>
                    <p className="text-xs text-[#f4ecd8]/80 font-eb italic">Cada desenho é exclusivo e tatuado apenas uma vez.</p>
                  </div>
                  <div className="bg-[#0c130d]/60 p-3.5 rounded-2xl border border-[#c9a227]/20">
                    <div className="text-[#e3c873] font-bold text-xs mb-0.5">Aplicação Anatômica</div>
                    <p className="text-xs text-[#f4ecd8]/80 font-eb italic">Artes projetadas para acompanhar as curvas do corpo.</p>
                  </div>
                  <div className="bg-[#0c130d]/60 p-3.5 rounded-2xl border border-[#c9a227]/20">
                    <div className="text-[#6b7d5e] font-bold text-xs mb-0.5">Tintas Premium</div>
                    <p className="text-xs text-[#f4ecd8]/80 font-eb italic">Pigmentos aprovados de altíssima fixação e durabilidade.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Disponíveis Content */}
          {activeHighlight === "disponiveis" && (
            <div className="space-y-6">
              <div className="border-b border-[#c9a227]/20 pb-6">
                <h3 className="text-xl sm:text-2xl font-cormorant font-medium text-[#f4ecd8]">Projetos & Flashs Disponíveis</h3>
                <p className="text-xs sm:text-sm text-[#f4ecd8]/75 font-eb italic mt-1">Veja como reservar sua arte exclusiva diretamente no estúdio.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0c130d]/60 p-5 rounded-2xl border border-[#c9a227]/20">
                  <h4 className="text-[#f4ecd8] font-cormorant font-medium text-lg mb-3">Como reservar:</h4>
                  <ul className="space-y-2.5 text-xs text-[#f4ecd8]/80 font-eb italic">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e3c873] shrink-0" />
                      <span>Envie uma mensagem pelo WhatsApp indicando a arte.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e3c873] shrink-0" />
                      <span>Definimos o tamanho ideal e o local do corpo.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#e3c873] shrink-0" />
                      <span>Sinal de agendamento garante a arte exclusiva para você.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0c130d]/60 p-5 rounded-2xl border border-[#c9a227]/20 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[#f4ecd8] font-cormorant font-medium text-lg mb-2">Projeto 100% Personalizado</h4>
                    <p className="text-xs text-[#f4ecd8]/80 font-eb italic leading-relaxed">
                      Se você tem uma referência ou conceito especial, o Dan cria o projeto sob medida para você.
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de encomendar um projeto de tatuagem 100% personalizado.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 cta-fada justify-center text-xs font-eb italic"
                  >
                    <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                    <span>Criar Projeto Personalizado →</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 3. Cicatrizadas Content */}
          {activeHighlight === "cicatrizadas" && (
            <div className="space-y-6">
              <div className="border-b border-[#c9a227]/20 pb-6">
                <h3 className="text-xl sm:text-2xl font-cormorant font-medium text-[#f4ecd8]">Tatuagens Cicatrizadas</h3>
                <p className="text-xs sm:text-sm text-[#f4ecd8]/75 font-eb italic mt-1">Resultado real na pele após o processo completo de cura.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-4 rounded-2xl overflow-hidden border border-[#c9a227]/30 shadow-xl">
                  <img 
                    src={`${BASE}assets/tattoo-sword-redmoons.jpg`} 
                    alt="Tatuagem Cicatrizada Espada e Luas" 
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="sm:col-span-8 space-y-3">
                  <div className="bg-[#0c130d]/60 p-4 rounded-2xl border border-[#c9a227]/20">
                    <h4 className="text-[#f4ecd8] font-cormorant font-medium text-base mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#e3c873]" />
                      Traço Fino Definido
                    </h4>
                    <p className="text-xs text-[#f4ecd8]/80 font-eb italic leading-relaxed">
                      Aplicação com profundidade e voltagem controladas, garantindo nitidez sem estouro de traço.
                    </p>
                  </div>

                  <div className="bg-[#0c130d]/60 p-4 rounded-2xl border border-[#c9a227]/20">
                    <h4 className="text-[#f4ecd8] font-cormorant font-medium text-base mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#e3c873]" />
                      Suporte de Pós-Atendimento
                    </h4>
                    <p className="text-xs text-[#f4ecd8]/80 font-eb italic leading-relaxed">
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
              <div className="border-b border-[#c9a227]/20 pb-6">
                <h3 className="text-xl sm:text-2xl font-cormorant font-medium text-[#f4ecd8]">Tattoo Honey Studio</h3>
                <p className="text-xs sm:text-sm text-[#f4ecd8]/75 font-eb italic mt-1">Estúdio aconchegante com atendimento individualizado na Asa Norte, Brasília.</p>
              </div>

              <div className="p-4 bg-[#0c130d]/60 rounded-2xl border border-[#c9a227]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#f4ecd8]/85 space-y-1 font-eb italic">
                  <div>📍 <strong>Endereço:</strong> Asa Norte, Brasília - DF</div>
                  <div>🏢 <strong>Estúdio:</strong> Tattoo Honey Studio (@tattoohoneystudio)</div>
                  <div>⏰ <strong>Atendimento:</strong> Com agendamento prévio no WhatsApp</div>
                </div>
                <a
                  href={`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encodeURIComponent("Olá Dan! Gostaria de consultar os horários disponíveis na agenda.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-fada shrink-0 text-xs"
                >
                  <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                  <span>Consultar Agenda →</span>
                </a>
              </div>
            </div>
          )}

          {/* 5. Feedbacks */}
          {activeHighlight === "feedbacks" && (
            <div className="space-y-6">
              <div className="border-b border-[#c9a227]/20 pb-6">
                <h3 className="text-xl sm:text-2xl font-cormorant font-medium text-[#f4ecd8]">Relatos de Clientes</h3>
                <p className="text-xs sm:text-sm text-[#f4ecd8]/75 font-eb italic mt-1">Avaliações reais de quem já se tatuou com o Dan.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CLIENT_FEEDBACKS.map((fb) => (
                  <div key={fb.id} className="bg-[#0c130d]/70 p-5 rounded-2xl border border-[#c9a227]/20 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(fb.stars)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-[#e3c873] fill-[#e3c873]" />
                        ))}
                      </div>
                      <Quote className="w-4 h-4 text-[#c9a227]/40 mb-2" />
                      <p className="text-xs text-[#f4ecd8]/85 italic font-eb leading-relaxed">
                        "{fb.comment}"
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#c9a227]/20">
                      <div className="text-xs font-cormorant font-medium text-[#f4ecd8]">{fb.name}</div>
                      <div className="text-[10px] text-[#e3c873] font-eb italic">{fb.city} • {fb.tattoo}</div>
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
