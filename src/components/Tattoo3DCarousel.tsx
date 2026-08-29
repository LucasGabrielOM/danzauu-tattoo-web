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
      
      {/* Golden SVG Ornament Divider matching refugio-da-fada.html */}
      <div className="flex items-center justify-center pb-12" aria-hidden="true">
        <svg className="w-80 sm:w-96 h-auto" viewBox="0 0 400 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 45 C 60 10, 90 80, 140 45 S 220 10, 260 45 S 330 80, 390 45" stroke="#c9a227" strokeWidth="1.2" opacity="0.75"/>
          <circle cx="200" cy="45" r="5" fill="#e3c873"/>
          <circle cx="140" cy="45" r="2.5" fill="#c9a227" opacity="0.7"/>
          <circle cx="260" cy="45" r="2.5" fill="#c9a227" opacity="0.7"/>
          <path d="M195 30 Q200 10 205 30 Q220 35 205 40 Q200 60 195 40 Q180 35 195 30 Z" fill="#e3c873" opacity="0.9"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-1 mb-4">
            <span className="text-xs font-eb italic tracking-widest text-[#e3c873] uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
              Coleção de Flashs & Tattoos Reais
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-cormorant font-medium text-[#f4ecd8] tracking-tight">
            Tatuagens Disponíveis
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-[#f4ecd8]/80 font-eb italic">
            Navegue pelos desenhos autorais e fotos de trabalhos cicatrizados executados pelo Dan. Escolha a sua arte para reservar no WhatsApp.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {[
              { id: "disponivel", label: "✦ Disponíveis para Tatuar" },
              { id: "all", label: "Todas as Artes" },
              { id: "cicatrizada", label: "Cicatrizadas & Executadas" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-eb italic transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#c9a227] text-[#0c130d] font-bold shadow-lg shadow-[#c9a227]/20 scale-105"
                    : "bg-[#1a2417]/80 text-[#f4ecd8]/80 border border-[#c9a227]/30 hover:border-[#e3c873] hover:text-[#e3c873]"
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
                className="group relative rounded-2xl overflow-hidden card-fada transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Image Container */}
                <div 
                  className="relative aspect-[4/5] w-full overflow-hidden bg-[#0c130d] cursor-pointer"
                  onClick={() => setSelectedTattoo(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c130d] via-transparent to-transparent opacity-80" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    {item.status === 'disponivel' ? (
                      <span className="px-3 py-1 rounded-full text-[11px] font-eb italic font-bold bg-[#c9a227]/20 text-[#e3c873] border border-[#c9a227]/40 backdrop-blur-md flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#e3c873] animate-pulse"></span>
                        Disponível
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[11px] font-eb italic font-bold bg-[#1a2417]/80 text-[#f4ecd8]/80 border border-[#c9a227]/20 backdrop-blur-md">
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
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#0c130d]/80 text-[#f4ecd8] hover:text-[#e3c873] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-[#c9a227]/30"
                    title="Ampliar Foto"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Info */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-cormorant font-medium text-[#f4ecd8] tracking-tight group-hover:text-[#e3c873] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-[#f4ecd8]/75 line-clamp-2 mt-1.5 font-eb italic leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((t, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-md bg-[#c9a227]/10 text-[#e3c873] border border-[#c9a227]/20 font-eb italic">
                          <Tag className="w-2.5 h-2.5 text-[#c9a227]" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleOrderTattoo(item)}
                      className="w-full cta-fada justify-center text-xs font-eb italic"
                    >
                      <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                      <span>Tenho Interesse no WhatsApp →</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[#f4ecd8]/60 font-eb italic">
            Nenhuma tatuagem encontrada nesta categoria.
          </div>
        )}

      </div>

      {/* --- MODAL DE DETALHE DA TATUAGEM --- */}
      {selectedTattoo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c130d]/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl card-fada rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedTattoo(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0c130d]/80 border border-[#c9a227]/30 text-[#f4ecd8] hover:text-[#e3c873]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-72 md:h-full bg-[#0c130d] relative flex items-center justify-center">
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
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-eb italic font-bold bg-[#c9a227]/20 text-[#e3c873] border border-[#c9a227]/40">
                        Arte Disponível
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-eb italic font-bold bg-[#1a2417] text-[#f4ecd8]/80 border border-[#c9a227]/20">
                        Cicatrizada
                      </span>
                    )}
                    <span className="text-xs text-[#f4ecd8]/60 font-eb italic">Dan Zauu Tattoo</span>
                  </div>

                  <h3 className="text-2xl font-cormorant font-medium text-[#f4ecd8] mb-2">
                    {selectedTattoo.title}
                  </h3>

                  <p className="text-sm text-[#f4ecd8]/80 font-eb italic leading-relaxed">
                    {selectedTattoo.description}
                  </p>

                  <div className="mt-4 space-y-2 text-xs text-[#f4ecd8]/80 bg-[#0c130d]/60 p-3.5 rounded-xl border border-[#c9a227]/20 font-eb italic">
                    {selectedTattoo.placementSuggestion && (
                      <div>
                        <strong className="text-[#e3c873] not-italic">Sugestão de Local:</strong> {selectedTattoo.placementSuggestion}
                      </div>
                    )}
                    {selectedTattoo.dimensions && (
                      <div>
                        <strong className="text-[#e3c873] not-italic">Dimensão recomendada:</strong> {selectedTattoo.dimensions}
                      </div>
                    )}
                    <div>
                      <strong className="text-[#e3c873] not-italic">Estúdio:</strong> Tattoo Honey Studio • Asa Norte, BSB
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleOrderTattoo(selectedTattoo)}
                    className="w-full cta-fada justify-center text-sm font-eb italic"
                  >
                    <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
                    <span>Reservar esta Tatuagem →</span>
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
