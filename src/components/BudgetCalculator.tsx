import React, { useState } from "react";
import { 
  Send, 
  Clock 
} from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function BudgetCalculator() {
  const [placement, setPlacement] = useState<string>("Antebraço");
  const [size, setSize] = useState<string>("Média (10 a 15 cm)");
  const [style, setStyle] = useState<string>("Cyber-Sigilism & Fine Line");
  const [description, setDescription] = useState<string>("");

  const placements = [
    "Antebraço",
    "Braço / Bíceps",
    "Coluna / Costas",
    "Panturrilha / Perna",
    "Esterno / Peito",
    "Costelas",
    "Ombro / Trapézio",
    "Outro Local"
  ];

  const sizes = [
    { label: "Pequena / Delicada", desc: "Aprox. 5 a 8 cm" },
    { label: "Média (Recomendada)", desc: "Aprox. 10 a 15 cm" },
    { label: "Grande / Destaque", desc: "Aprox. 16 a 24 cm" },
    { label: "Fechamento / Projeto Maior", desc: "Coluna, Braço ou Perna" }
  ];

  const styles = [
    "Cyber-Sigilism & Fine Line",
    "Dark Anime / Manga",
    "Espadas, Armas & Luas Carmesim",
    "Esculturas & Linhas Orgânicas",
    "Flash Específico do Perfil",
    "Criação 100% Personalizada"
  ];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    let message = `*SOLICITAÇÃO DE ORÇAMENTO - DAN ZAUU TATTOO*\n\n`;
    message += `📍 *Local:* ${placement}\n`;
    message += `📏 *Tamanho:* ${size}\n`;
    message += `🎨 *Estilo:* ${style}\n`;
    if (description.trim()) {
      message += `📝 *Ideia/Detalhes:* ${description.trim()}\n`;
    }
    message += `\n*Enviado via site danzauutattoo*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section id="orcamento" className="relative py-20 bg-zinc-950/40">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Orçamento no WhatsApp
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Simule Seu Projeto
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Escolha as opções abaixo e envie as informações prontas direto para o WhatsApp do Dan.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          <form onSubmit={handleSendWhatsApp} className="space-y-6">
            
            {/* Step 1: Placement */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
                1. Local do Corpo:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {placements.map((place) => (
                  <button
                    type="button"
                    key={place}
                    onClick={() => setPlacement(place)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all text-center border ${
                      placement === place 
                        ? "bg-rose-600/30 border-rose-500 text-white font-bold" 
                        : "bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                    }`}
                  >
                    {place}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
                2. Tamanho Estimado:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {sizes.map((s) => (
                  <button
                    type="button"
                    key={s.label}
                    onClick={() => setSize(`${s.label} - ${s.desc}`)}
                    className={`p-3 rounded-xl text-left transition-all border ${
                      size.startsWith(s.label)
                        ? "bg-rose-600/30 border-rose-500 text-white"
                        : "bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{s.label}</div>
                    <div className="text-[11px] text-zinc-400">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Style */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2.5">
                3. Estilo / Estética:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {styles.map((st) => (
                  <button
                    type="button"
                    key={st}
                    onClick={() => setStyle(st)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-all text-left border ${
                      style === st
                        ? "bg-rose-600/30 border-rose-500 text-white font-bold"
                        : "bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Notes */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                4. Ideia ou Detalhes (Opcional):
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Quero uma espada fine line com luas no antebraço..."
                rows={3}
                className="w-full bg-zinc-950/80 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Resposta direta do tatuador Dan.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-emerald-500/40 bg-zinc-950 hover:bg-emerald-950/40 hover:border-emerald-400 text-zinc-100 hover:text-white font-bold text-xs shadow-md transition-all active:scale-95"
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
