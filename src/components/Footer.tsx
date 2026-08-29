import { Instagram, MapPin } from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

export default function Footer() {
  return (
    <footer className="relative bg-[#0c130d] text-[#f4ecd8] border-t border-[#c9a227]/30 pt-16 pb-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#c9a227]/20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#c9a227] to-[#e3c873] flex items-center justify-center text-[#0c130d] font-bold font-cormorant text-lg shadow-md">
                ✦
              </div>
              <span className="text-xl font-cormorant tracking-wider text-[#f4ecd8]">
                DAN <span className="text-[#e3c873] font-eb italic text-xs tracking-normal">TATTOO</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#f4ecd8]/80 max-w-sm leading-relaxed font-eb italic">
              Arte autoral, traços finos (Fine Line), cyber-sigilism e composições conceituais. Atendimento exclusivo no Tattoo Honey Studio em Brasília.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={ARTIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1a2417] border border-[#c9a227]/30 text-[#f4ecd8] hover:text-[#e3c873] hover:border-[#e3c873] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={ARTIST_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1a2417] border border-[#c9a227]/30 text-[#f4ecd8] hover:text-[#e3c873] hover:border-[#e3c873] transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-eb italic uppercase tracking-widest text-[#e3c873]">Navegação</h4>
            <ul className="space-y-2 text-xs text-[#f4ecd8]/75 font-eb italic">
              <li>
                <a href="#" className="hover:text-[#e3c873] transition-colors">Início</a>
              </li>
              <li>
                <a href="#carrossel-3d" className="hover:text-[#e3c873] transition-colors">Tatuagens Disponíveis</a>
              </li>
              <li>
                <a href="#destaques" className="hover:text-[#e3c873] transition-colors">Destaques</a>
              </li>
              <li>
                <a href="#sobre-o-dan" className="hover:text-[#e3c873] transition-colors">O Artista</a>
              </li>
              <li>
                <a href="#orcamento" className="hover:text-[#e3c873] transition-colors">Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Studio Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-eb italic uppercase tracking-widest text-[#e3c873]">Local de Atendimento</h4>
            <div className="space-y-2 text-xs text-[#f4ecd8]/80 font-eb italic">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c9a227] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#f4ecd8] font-cormorant font-medium text-sm">Tattoo Honey Studio</div>
                  <div>Brasília • Asa Norte, DF</div>
                </div>
              </div>
              <div className="pt-2 text-[11px] text-[#f4ecd8]/60">
                Atendimento com agendamento prévio no WhatsApp.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Refúgio da Fada signature quote */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#f4ecd8]/60 font-eb italic text-center sm:text-left">
          <div>
            — feito com carinho no bosque • DAN TATTOO (@danzauutattoo) —
          </div>
          <div>
            © {new Date().getFullYear()} Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}
