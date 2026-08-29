import { useState } from "react";
import { 
  Sparkles, 
  Maximize2,
  X,
  Tag
} from "lucide-react";
import { TATTOO_COLLECTION, TattooItem, ARTIST_INFO } from "@/data/tattoosData";

export default function Tattoo3DCarousel() {
  const [activeCategory, setActiveCategory] = useState<string>("disponivel");
  const [selectedTattoo, setSelectedTattoo] = useState<TattooItem | null>(null);

  const filteredItems = activeCategory === "all" 
    ? TATTOO_COLLECTION 
    : TATTOO_COLLECTION.filter(item => item.category === activeCategory || (activeCategory === "disponivel" && item.status === "disponivel"));

  const handleOrderTattoo = (tattoo: TattooItem) => {
    const text = encodeURIComponent(
      `Olá Dan! Vi no site a tatuagem disponível: *${tattoo.title}*. Gostaria de saber valores e agendar!`
    );
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="carrossel-3d" className="relative py-20 bg-transparent">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1 mb-4 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Artes & Flashs Autorais
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight font-display">
            Tatuagens Disponíveis
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-zinc-700 font-medium">
            Explore as artes prontas para tatuar e trabalhos executados pelo Dan. Escolha a sua e entre em contato direto pelo WhatsApp.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {[
              { id: "disponivel", label: "🔥 Disponíveis para Tatuar" },
              { id: "all", label: "Todas as Artes" },
              { id: "cicatrizada", label: "Cicatrizadas & Executadas" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-purple-700 text-white shadow-lg shadow-purple-900/20 scale-105"
                    : "bg-white/90 text-zinc-700 border border-purple-200 hover:bg-purple-50 hover:text-purple-900 shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Grid Gallery */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white/95 border border-purple-100 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-purple-900/5 hover:shadow-2xl"
              >
                {/* Image Container */}
                <div 
                  className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 cursor-pointer"
                  onClick={() => setSelectedTattoo(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    {item.status === 'disponivel' ? (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-md flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        Disponível
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-zinc-900/80 text-white backdrop-blur-md">
                        Cicatrizada
                      </span>
                    )}
                  </div>

                  {/* Expand Icon Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTattoo(item);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-zinc-900 hover:text-purple-700 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                    title="Ampliar Foto"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Info */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-zinc-600 line-clamp-2 mt-1.5 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((t, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-100 font-medium">
                          <Tag className="w-2.5 h-2.5 text-purple-600" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleOrderTattoo(item)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md active:scale-95"
                    >
                      <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                      <span>Tenho Interesse no WhatsApp</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-zinc-600 text-sm font-medium">
            Nenhuma tatuagem encontrada nesta categoria.
          </div>
        )}

      </div>

      {/* --- MODAL DE DETALHE DA TATUAGEM --- */}
      {selectedTattoo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white border border-purple-100 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedTattoo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 border border-purple-100 text-zinc-700 hover:text-purple-700 shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-72 md:h-full bg-zinc-100 relative flex items-center justify-center">
                <img 
                  src={selectedTattoo.image} 
                  alt={selectedTattoo.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    {selectedTattoo.status === 'disponivel' ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-sm">
                        Arte Disponível
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-800 text-white">
                        Cicatrizada
                      </span>
                    )}
                    <span className="text-xs text-zinc-500 font-medium">Dan Zauu Tattoo</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 font-display mb-2">
                    {selectedTattoo.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    {selectedTattoo.description}
                  </p>

                  <div className="mt-4 space-y-2 text-xs text-zinc-700 bg-purple-50/80 p-3.5 rounded-xl border border-purple-100 font-medium">
                    {selectedTattoo.placementSuggestion && (
                      <div>
                        <strong className="text-purple-950 font-bold">Sugestão de Local:</strong> {selectedTattoo.placementSuggestion}
                      </div>
                    )}
                    {selectedTattoo.dimensions && (
                      <div>
                        <strong className="text-purple-950 font-bold">Dimensão recomendada:</strong> {selectedTattoo.dimensions}
                      </div>
                    )}
                    <div>
                      <strong className="text-purple-950 font-bold">Estúdio:</strong> Tattoo Honey Studio • Asa Norte, BSB
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleOrderTattoo(selectedTattoo)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
                  >
                    <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
                    <span>Reservar esta Tatuagem</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
