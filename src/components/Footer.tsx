import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-rose-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-zinc-950 font-bold font-display text-lg">
                ✣
              </div>
              <span className="text-xl font-bold font-display tracking-wider text-white">
                DAN <span className="text-rose-400 font-sans text-xs tracking-normal font-normal">TATTOO</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Arte autoral, traços finos (Fine Line), cyber-sigilism e composições conceituais. Atendimento exclusivo no Tattoo Honey Studio em Brasília.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-rose-500/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-300">Navegação</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#" className="hover:text-rose-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#carrossel-3d" className="hover:text-rose-400 transition-colors">Portfólio & Flashs 3D</a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-rose-400 transition-colors">Destaques do Feed</a>
              </li>
              <li>
                <a href="#sobre-o-dan" className="hover:text-rose-400 transition-colors">Sobre o Artista</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-rose-400 transition-colors">Simulador de Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Studio Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-300">Local de Atendimento</h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Tattoo Honey Studio</div>
                  <div>Brasília • Asa Norte, DF</div>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-zinc-500">
                Atendimento exclusivamente com agendamento prévio via WhatsApp.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} DAN (@danzauutattoo). Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com estética autoral para</span>
            <span className="text-rose-400 font-semibold">@danzauutattoo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
