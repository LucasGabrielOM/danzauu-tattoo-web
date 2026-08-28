import { useState } from "react";
import { X, Send } from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: "✨ Quero reservar um Flash autoral", text: "Olá Dan! Vi seu site e gostaria de reservar um dos flashs disponíveis." },
    { label: "📐 Quero fazer orçamento de ideia própria", text: "Olá Dan! Gostaria de fazer um orçamento para uma tatuagem personalizada." },
    { label: "📅 Consultar datas disponíveis na agenda", text: "Olá Dan! Gostaria de consultar quais datas você tem disponíveis para agendamento." }
  ];

  const handleSend = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-84 rounded-3xl border border-emerald-500/30 bg-zinc-950/95 p-5 shadow-2xl backdrop-blur-xl animate-fade-in text-left">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={ARTIST_INFO.avatarImage} 
                  alt={ARTIST_INFO.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500 shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-zinc-950"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  DAN TATTOO
                  <span className="text-[10px] text-rose-400 font-normal">✣</span>
                </h4>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online para orçamentos
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="py-3">
            <p className="text-xs text-zinc-300">
              E aí! Me manda uma mensagem direta para tirarmos sua ideia do papel ou agendar seu flash na Asa Norte.
            </p>
          </div>

          {/* Quick choices */}
          <div className="space-y-2">
            {quickMessages.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(item.text)}
                className="w-full text-left p-2.5 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-950/30 text-[11px] text-zinc-200 hover:text-white transition-all flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <Send className="w-3 h-3 text-zinc-500 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2 text-[10px] text-zinc-500 text-center flex items-center justify-center gap-1.5">
            <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-3.5 h-3.5" />
            <span>Resposta rápida • Brasília • Asa Norte</span>
          </div>
        </div>
      )}

      {/* Main Floating Button with Real WhatsApp 3D Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 p-2.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 text-white shadow-[0_10px_35px_rgba(16,185,129,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 border border-emerald-400/40"
        aria-label="Abrir WhatsApp"
      >
        {/* Pulsing glow ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"></span>

        <img 
          src={ARTIST_INFO.whatsappIcon} 
          alt="WhatsApp Oficial" 
          className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-md relative z-10 transition-transform group-hover:rotate-6"
        />

        <span className="hidden sm:inline text-xs font-bold tracking-wide relative z-10 pr-1 text-white drop-shadow">
          Chamar no WhatsApp
        </span>
      </button>

    </div>
  );
}
