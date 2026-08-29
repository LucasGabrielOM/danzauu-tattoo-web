import { Instagram, MapPin } from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function Footer() {
  return (
    <footer className="relative bg-[#0c130d]/90 backdrop-blur-md text-white border-t border-zinc-800/80 pt-8 pb-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-zinc-800/60 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-white font-bold font-display text-xs shadow-md">
                ✣
              </div>
              <span className="text-base font-bold font-display tracking-wider text-white">
                DAN <span className="text-rose-500 font-sans text-[10px] tracking-normal font-normal">TATTOO</span>
              </span>
            </div>

            <p className="text-[11px] text-zinc-400 max-w-sm leading-relaxed font-normal">
              Arte autoral, traços finos (Fine Line) e cyber-sigilism no Tattoo Honey Studio em Brasília.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-3.5 h-3.5 object-contain" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-1.5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Navegação</h4>
            <ul className="flex flex-wrap md:flex-col gap-x-4 gap-y-1 text-[11px] text-zinc-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#carrossel-3d" className="hover:text-white transition-colors">Tatuagens Disponíveis</a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-white transition-colors">Destaques</a>
              </li>
              <li>
                <a href="#sobre-o-dan" className="hover:text-white transition-colors">O Artista</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-white transition-colors">Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Studio Location */}
          <div className="md:col-span-4 space-y-1.5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Local de Atendimento</h4>
            <div className="space-y-1 text-[11px] text-zinc-400 font-medium">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold text-xs">Tattoo Honey Studio</div>
                  <div>Brasília • Asa Norte, DF</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-zinc-500 font-medium">
          <div>
            © {new Date().getFullYear()} DAN (@danzauutattoo). Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido para</span>
            <span className="text-rose-400 font-bold">@danzauutattoo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
