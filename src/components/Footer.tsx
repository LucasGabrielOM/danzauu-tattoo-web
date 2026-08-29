import { Instagram, MapPin } from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function Footer() {
  return (
    <footer className="relative bg-purple-900/90 text-white border-t border-purple-800 pt-16 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-800/60">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-rose-400 flex items-center justify-center text-white font-bold font-display text-lg shadow-md">
                ✣
              </div>
              <span className="text-xl font-bold font-display tracking-wider text-white">
                DAN <span className="text-purple-300 font-sans text-xs tracking-normal font-normal">TATTOO</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-purple-100/90 max-w-sm leading-relaxed font-normal">
              Arte autoral, traços finos (Fine Line), cyber-sigilism e composições conceituais. Atendimento exclusivo no Tattoo Honey Studio em Brasília.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-purple-950/60 border border-purple-700 text-purple-200 hover:text-white hover:border-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-purple-950/60 border border-purple-700 text-purple-200 hover:text-emerald-400 hover:border-emerald-500 transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-300">Navegação</h4>
            <ul className="space-y-2 text-xs text-purple-100/80 font-medium">
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
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-purple-300">Local de Atendimento</h4>
            <div className="space-y-2 text-xs text-purple-100/90 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-bold">Tattoo Honey Studio</div>
                  <div>Brasília • Asa Norte, DF</div>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-purple-200/70">
                Atendimento com agendamento prévio no WhatsApp.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-purple-200/80 font-medium">
          <div>
            © {new Date().getFullYear()} DAN (@danzauutattoo). Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido para</span>
            <span className="text-purple-300 font-bold">@danzauutattoo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
