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
  const [hasReference] = useState<string>("Tenho referências do feed/flash");
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

    let message = `*✣ SOLICITAÇÃO DE ORÇAMENTO - DAN ZAUU TATTOO ✣*\n\n`;
    message += `📍 *Local do Corpo:* ${placement}\n`;
    message += `📏 *Tamanho Estimado:* ${size}\n`;
    message += `🎨 *Estilo Desejado:* ${style}\n`;
    message += `🖼️ *Status da Ideia:* ${hasReference}\n`;
    if (description.trim()) {
      message += `📝 *Detalhes/Ideia:* ${description.trim()}\n`;
    }
    message += `\n*Enviado via site oficial danzauutattoo.com*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${ARTIST_INFO.whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section id="orcamento" className="relative py-24 bg-zinc-950">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 backdrop-blur-md mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Orçamento Rápido em 1 Minuto
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Simule e Envie sua Ideia
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Selecione as opções abaixo para montar uma prévia do seu projeto e enviar direto para o WhatsApp do Dan.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSendWhatsApp} className="space-y-8">
            
            {/* Step 1: Placement */}
            <div>
              <label className="block text-sm font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">1</span>
                Em qual parte do corpo você deseja tatuar?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {placements.map((place) => (
                  <button
                    type="button"
                    key={place}
                    onClick={() => setPlacement(place)}
                    className={`py-3 px-3 rounded-xl text-xs font-medium transition-all text-center border ${
                      placement === place 
                        ? "bg-rose-600/20 border-rose-500 text-white font-bold shadow-md shadow-rose-950" 
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
              <label className="block text-sm font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">2</span>
                Qual o tamanho aproximado da tatuagem?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sizes.map((s) => (
                  <button
                    type="button"
                    key={s.label}
                    onClick={() => setSize(`${s.label} - ${s.desc}`)}
                    className={`p-3.5 rounded-2xl text-left transition-all border ${
                      size.startsWith(s.label)
                        ? "bg-rose-600/20 border-rose-500 text-white shadow-md shadow-rose-950"
                        : "bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{s.label}</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Style */}
            <div>
              <label className="block text-sm font-semibold text-zinc-200 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">3</span>
                Qual estética ou estilo você busca?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {styles.map((st) => (
                  <button
                    type="button"
                    key={st}
                    onClick={() => setStyle(st)}
                    className={`py-3 px-3.5 rounded-xl text-xs font-medium transition-all text-left border ${
                      style === st
                        ? "bg-rose-600/20 border-rose-500 text-white font-bold shadow-md shadow-rose-950"
                        : "bg-zinc-950/60 border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Description / Idea */}
            <div>
              <label className="block text-sm font-semibold text-zinc-200 mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">4</span>
                Descreva sua ideia ou referências (opcional):
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Gostei da espada com luas vermelhas do feed e da arte da deusa anime com estátua, queria uma composição parecida para o antebraço..."
                rows={3}
                className="w-full bg-zinc-950/80 border border-white/10 rounded-2xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500 transition-colors"
              />
            </div>

            {/* Submit Button with Real WhatsApp 3D Icon */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Atendimento rápido direto com o Dan no WhatsApp.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 hover:scale-[1.03] active:scale-[0.98] transition-all border border-emerald-400/40"
              >
                <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain drop-shadow" />
                <span>Enviar Orçamento Pronto no WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
