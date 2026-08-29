import { ARTIST_INFO } from "@/data/tattoosData";

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Olá Dan! Vi seu site e gostaria de fazer um orçamento para uma tatuagem.");
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip on hover */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-zinc-900 border border-white/10 text-zinc-200 text-xs font-medium rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
        Chamar no WhatsApp
      </div>

      {/* Floating Icon Button */}
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_8px_25px_rgba(16,185,129,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 border border-emerald-300/30"
        aria-label="Chamar no WhatsApp"
      >
        <img 
          src={ARTIST_INFO.whatsappIcon} 
          alt="WhatsApp" 
          className="w-7 h-7 object-contain drop-shadow"
        />
      </button>
    </div>
  );
}
