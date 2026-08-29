import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Instagram, MapPin } from "lucide-react";
import { ARTIST_INFO } from "@/data/tattoosData";

interface NavbarProps {
  onExploreGallery?: () => void;
}

const navigationLinks = [
  { href: "#", label: "Início", active: true },
  { href: "#carrossel-3d", label: "Tatuagens Disponíveis" },
  { href: "#destaques", label: "Destaques" },
  { href: "#sobre-o-dan", label: "O Artista" },
  { href: "#orcamento", label: "Orçamento" },
];

export default function Navbar({ onExploreGallery }: NavbarProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#carrossel-3d" && onExploreGallery) {
      e.preventDefault();
      onExploreGallery();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c130d]/90 backdrop-blur-md border-b border-zinc-800/80 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-9 md:hidden border border-zinc-800 bg-zinc-950 text-white"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-52 p-2 md:hidden bg-zinc-950 border border-zinc-800 text-white">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-1 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="py-2 px-3 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 block"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Brand logo & title */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-rose-600 to-amber-500 group-hover:scale-105 transition-transform shadow-md">
              <img 
                src={ARTIST_INFO.avatarImage} 
                alt={ARTIST_INFO.name} 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display tracking-widest text-sm font-bold text-white group-hover:text-rose-400 transition-colors flex items-center gap-1">
                DAN <span className="text-[10px] text-rose-500 font-sans font-normal">TATTOO</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                <MapPin className="w-2.5 h-2.5 text-rose-500" />
                <span>Asa Norte • BSB</span>
              </div>
            </div>
          </a>

          {/* Main nav for desktop */}
          <div className="hidden md:flex items-center gap-6 ml-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-zinc-300 hover:text-white px-3 py-1.5 text-xs font-semibold rounded-full hover:bg-zinc-800/60 transition-all"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side action buttons */}
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-xs text-zinc-300 hover:text-white border border-zinc-800/60 bg-zinc-950/60 rounded-full px-3.5 hidden sm:inline-flex">
            <a href={ARTIST_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5 text-rose-500" />
              <span>@danzauutattoo</span>
            </a>
          </Button>
          <Button asChild size="sm" className="text-xs font-bold bg-zinc-950 text-white hover:bg-zinc-800 border border-zinc-800 rounded-full px-4 shadow-md transition-all active:scale-95">
            <a href={ARTIST_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <img src={ARTIST_INFO.whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
              <span>Orçamento</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
