import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Maximize2,
  X
} from "lucide-react";
import { TATTOO_COLLECTION, TattooItem, ARTIST_INFO } from "@/data/tattoosData";

export default function Tattoo3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedTattoo, setSelectedTattoo] = useState<TattooItem | null>(null);

  const filteredItems = activeCategory === "all" 
    ? TATTOO_COLLECTION 
    : TATTOO_COLLECTION.filter(item => item.category === activeCategory);

  const total = filteredItems.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleSelectCategory = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const handleOrderTattoo = (tattoo: TattooItem) => {
    const text = encodeURIComponent(
      `Olá Dan! Vi o seu site e tenho muito interesse no projeto/flash: *${tattoo.title}* (${tattoo.categoryLabel}). Ainda está disponível?`
    );
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="carrossel-3d" className="relative py-24 bg-zinc-950 overflow-hidden">
      
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 backdrop-blur-md mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-rose-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Galeria & Flashs Autorais 3D
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Coleção de Flashs & Tattoos Reais
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Navegue pelos designs autorais, fotos de trabalhos cicatrizados e composições exclusivas do Dan. Escolha sua arte para reservar no WhatsApp.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "Todas as Artes" },
              { id: "flash", label: "✣ Flashs & Trabalhos Reais" },
              { id: "cyber-sigil", label: "Cyber-Sigilism" },
              { id: "anime-dark", label: "Dark Anime & Estátua" },
              { id: "cicatrizada", label: "Cicatrizadas" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleSelectCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === tab.id
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-900/40 scale-105"
                    : "bg-zinc-900/80 text-zinc-400 border border-white/5 hover:border-white/20 hover:text-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- 3D INTERACTIVE CAROUSEL STAGE --- */}
        {total > 0 ? (
          <div className="relative min-h-[480px] sm:min-h-[540px] flex items-center justify-center perspective-1000 my-8">
            
            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-12 z-30 p-3 rounded-full bg-zinc-900/80 border border-white/15 text-white hover:bg-rose-600 hover:border-rose-500 transition-all hover:scale-110 shadow-xl backdrop-blur-md"
              aria-label="Arte anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-12 z-30 p-3 rounded-full bg-zinc-900/80 border border-white/15 text-white hover:bg-rose-600 hover:border-rose-500 transition-all hover:scale-110 shadow-xl backdrop-blur-md"
              aria-label="Próxima arte"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 3D Cards Rendering */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] h-[460px] sm:h-[500px] flex items-center justify-center">
              {filteredItems.map((item, idx) => {
                let offset = (idx - currentIndex + total) % total;
                if (offset > total / 2) {
                  offset -= total;
                }

                const isVisible = Math.abs(offset) <= 2;
                if (!isVisible) return null;

                const isCurrent = offset === 0;
                const translateX = offset * 140;
                const translateZ = -Math.abs(offset) * 160;
                const rotateY = offset * -25;
                const opacity = isCurrent ? 1 : Math.abs(offset) === 1 ? 0.65 : 0.25;
                const zIndex = 20 - Math.abs(offset) * 5;

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      if (!isCurrent) {
                        setCurrentIndex(idx);
                      } else {
                        setSelectedTattoo(item);
                      }
                    }}
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                      opacity: opacity,
                      zIndex: zIndex,
                      transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"
                    }}
                    className={`absolute inset-0 rounded-3xl overflow-hidden cursor-pointer select-none group border ${
                      isCurrent 
                        ? "border-rose-500/60 shadow-[0_20px_50px_rgba(225,29,72,0.25)] ring-1 ring-rose-500/30" 
                        : "border-white/10 hover:border-white/30"
                    } bg-zinc-900`}
                  >
                    {/* Tattoo Image */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-950/80 backdrop-blur-md border border-white/10 text-rose-300">
                        {item.categoryLabel}
                      </span>

                      {item.status === 'disponivel' ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Disponível
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-600/30 text-rose-300 border border-rose-500/40">
                          {item.categoryLabel === "Trabalho Real" ? "Foto Real" : "Cicatrizada"}
                        </span>
                      )}
                    </div>

                    {/* Bottom Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-rose-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-300 line-clamp-2 mt-1 font-normal">
                        {item.description}
                      </p>

                      {/* Tag badges */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-zinc-300">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button for Active Card with Real WhatsApp Icon */}
                      {isCurrent && (
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOrderTattoo(item);
                            }}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:brightness-110 text-white text-xs font-bold shadow-md hover:scale-[1.02] transition-all border border-emerald-400/30"
                          >
                            <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                            <span>Quero Tatuar no WhatsApp</span>
                          </button>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTattoo(item);
                            }}
                            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                            title="Ver detalhes"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 text-zinc-400">
            Nenhuma arte encontrada nesta categoria.
          </div>
        )}

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {filteredItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? "w-8 bg-rose-500" 
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Direct WhatsApp Quote Prompt with Real WhatsApp Icon */}
        <div className="mt-14 rounded-2xl border border-rose-500/20 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-zinc-900/90 p-6 sm:p-8 backdrop-blur-lg flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <span className="text-2xl font-display">✣</span>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Tem uma ideia autoral ou quer criar um projeto do zero?</h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">O Dan desenvolve artes personalizadas sob medida para a anatomia do seu corpo.</p>
            </div>
          </div>

          <a
            href={ARTIST_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:brightness-110 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950 transition-all hover:scale-105 border border-emerald-400/30"
          >
            <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
            <span>Mandar Ideia no WhatsApp</span>
          </a>
        </div>

      </div>

      {/* --- MODAL DETALHE DA TATUAGEM --- */}
      {selectedTattoo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedTattoo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-950/70 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-full bg-zinc-950 relative">
                <img 
                  src={selectedTattoo.image} 
                  alt={selectedTattoo.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {selectedTattoo.categoryLabel}
                    </span>
                    <span className="text-xs text-zinc-400">Dan Zauu Tattoo</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 font-display">
                    {selectedTattoo.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedTattoo.description}
                  </p>

                  <div className="mt-4 space-y-2 text-xs text-zinc-400 bg-zinc-950/50 p-3.5 rounded-xl border border-white/5">
                    {selectedTattoo.placementSuggestion && (
                      <div>
                        <strong className="text-zinc-200">Sugestão de Local:</strong> {selectedTattoo.placementSuggestion}
                      </div>
                    )}
                    {selectedTattoo.dimensions && (
                      <div>
                        <strong className="text-zinc-200">Dimensão ideal:</strong> {selectedTattoo.dimensions}
                      </div>
                    )}
                    <div>
                      <strong className="text-zinc-200">Local de Atendimento:</strong> Brasília • Asa Norte (Tattoo Honey Studio)
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOrderTattoo(selectedTattoo)}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-emerald-950 transition-all hover:scale-[1.02] border border-emerald-400/30"
                  >
                    <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
                    <span>Reservar este Flash no WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-zinc-500 text-center mt-2">
                    *Resposta rápida direta com o tatuador Dan.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
