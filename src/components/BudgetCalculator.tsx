import React, { useState } from "react";
import { 
  Send, 
  Clock 
} from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function BudgetCalculator() {
  const [placement, setPlacement] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [style, setStyle] = useState<string>("Projetos Autorais & Composição Única");
  const [description, setDescription] = useState<string>("");

  const styles = [
    "Projetos Autorais & Composição Única",
    "Dark Anime / Manga",
    "Espadas, Armas & Luas Carmesim",
    "Esculturas & Linhas Orgânicas",
    "Flash Específico do Perfil",
    "Criação 100% Personalizada"
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `*SOLICITAÇÃO DE ORÇAMENTO - DAN ZAUU TATTOO*\n\n`;
    message += `📍 *Local do Corpo:* ${placement.trim() || "Não especificado"}\n`;
    message += `📏 *Tamanho Estimado:* ${size.trim() || "Não especificado"}\n`;
    message += `🎨 *Estilo:* ${style}\n`;
    if (description.trim()) {
      message += `📝 *Ideia/Detalhes:* ${description.trim()}\n`;
    }
    message += `\n*Enviado via site danzauutattoo*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section id="orcamento" className="relative py-20 bg-transparent">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 mb-3 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Orçamento no WhatsApp
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Simule Seu Projeto
          </h2>
          <p className="text-zinc-400 font-medium text-sm mt-2">
            Preencha os campos abaixo e envie as informações prontas direto para o WhatsApp do Dan.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          <form onSubmit={handleSendWhatsApp} className="space-y-6">
            
            {/* Step 1: Placement (Text Input Box as requested by client) */}
            <div>
              <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                1. Local do Corpo:
              </label>
              <input
                type="text"
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
                placeholder="Digite o local do corpo (ex: Antebraço, Coluna, Canela, Costas...)"
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                required
              />
            </div>

            {/* Step 2: Size (Text Input Box as requested by client) */}
            <div>
              <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                2. Tamanho Estimado (cm ou área):
              </label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Digite o tamanho estimado em cm (ex: 15cm, Fechamento de braço, 20x10cm...)"
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
                required
              />
            </div>

            {/* Step 3: Style (Selectable Buttons preserved as requested by client) */}
            <div>
              <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5">
                3. Estilo / Estética:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {styles.map((st) => (
                  <button
                    type="button"
                    key={st}
                    onClick={() => setStyle(st)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-left border ${
                      style === st
                        ? "bg-rose-600 border-rose-500 text-white font-bold shadow-sm"
                        : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Notes (Preserved as requested by client) */}
            <div>
              <label className="block text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                4. Ideia ou Detalhes (Opcional):
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Quero uma espada autoral com luas no antebraço..."
                rows={3}
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>Resposta direta do tatuador Dan.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-white font-bold text-xs shadow-xl transition-all active:scale-95"
              >
                <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
                <span>Enviar Orçamento no WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
