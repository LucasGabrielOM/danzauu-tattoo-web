const BASE = import.meta.env.BASE_URL;

export interface TattooItem {
  id: string;
  title: string;
  category: 'flash' | 'cicatrizada' | 'cyber-sigil' | 'anime-dark';
  categoryLabel: string;
  status: 'disponivel' | 'reservado' | 'cicatrizada';
  image: string;
  description: string;
  placementSuggestion?: string;
  dimensions?: string;
  tags: string[];
}

export const ARTIST_INFO = {
  name: "DAN",
  handle: "@danzauutattoo",
  instagramUrl: "https://www.instagram.com/danzauutattoo/",
  whatsappNumber: "556183054651",
  whatsappUrl: "https://wa.me/556183054651",
  whatsappIcon: `${BASE}assets/whatsapp-icon.png`,
  avatarImage: `${BASE}assets/dan-profile.jpg`,
  actionImage: `${BASE}assets/dan-studio-action.jpg`,
  studioName: "Tattoo Honey Studio",
  studioInstagram: "@tattoohoneystudio",
  location: "Brasília • Asa Norte, DF",
  specialties: [
    "Cyber-Sigilism",
    "Fine Line Autoral",
    "Dark Fantasy & Anime",
    "Neo-Ornamental",
    "Projetos Exclusivos",
    "Biossegurança Hospitalar"
  ],
  stats: {
    projectsDelivered: "500+",
    clientSatisfaction: "100%",
    yearsExperience: "4+",
    support: "24/7",
    quality: "100% Autoral"
  }
};

export const HIGHLIGHTS_STORIES = [
  {
    id: "flashs",
    title: "✣ flashs ✣",
    subtitle: "Artes exclusivas prontas para tatuar",
    gradient: "from-amber-600 to-rose-700",
    icon: "Sparkles",
    count: "12 disponíveis",
    image: `${BASE}assets/flash-statue-anime.jpg`
  },
  {
    id: "disponiveis",
    title: "✣ disponíveis...",
    subtitle: "Projetos autorais em aberto",
    gradient: "from-orange-500 to-amber-700",
    icon: "Compass",
    count: "Artes autorais",
    image: `${BASE}assets/flash-statue-anime.jpg`
  },
  {
    id: "cicatrizadas",
    title: "cicatrizadas",
    subtitle: "Resultado real na pele após a cura",
    gradient: "from-zinc-700 to-zinc-900",
    icon: "ShieldCheck",
    count: "Traço intacto",
    image: `${BASE}assets/tattoo-sword-redmoons.jpg`
  },
  {
    id: "tattoos",
    title: "tattoos",
    subtitle: "Trabalhos recentes executados",
    gradient: "from-rose-600 to-red-900",
    icon: "Flame",
    count: "Galeria ativa",
    image: `${BASE}assets/tattoo-sword-redmoons.jpg`
  },
  {
    id: "feedbacks",
    title: "feedbacks",
    subtitle: "Avaliações e relatos de clientes",
    gradient: "from-yellow-600 to-amber-900",
    icon: "Star",
    count: "5.0 estrelas",
    image: `${BASE}assets/dan-studio-action.jpg`
  }
];

export const TATTOO_COLLECTION: TattooItem[] = [
  {
    id: "real-tattoo-01",
    title: "Espada Cerimonial & Luas Carmesim",
    category: "flash",
    categoryLabel: "Trabalho Real",
    status: "cicatrizada",
    image: `${BASE}assets/tattoo-sword-redmoons.jpg`,
    description: "Tatuagem autoral real executada pelo Dan: lâmina com asas e sigilos detalhados em Fine Line, complementada por luas fluidas em tinta vermelha carmesim.",
    placementSuggestion: "Braço superior / Tríceps",
    dimensions: "Aprox. 18cm",
    tags: ["Foto Real", "Fine Line", "Tinta Vermelha", "Espada"]
  },
  {
    id: "real-flash-02",
    title: "Composição Estátua & Musa Anime",
    category: "anime-dark",
    categoryLabel: "Flash Autoral",
    status: "disponivel",
    image: `${BASE}assets/flash-statue-anime.jpg`,
    description: "Estudo e arte original do Dan com estética neoclássica e dark anime, ornamentos botânicos e estrela quádrupla ✣.",
    placementSuggestion: "Braço completo, Coxa ou Costas",
    dimensions: "20cm a 30cm",
    tags: ["Foto Real", "Flash Autoral", "Anime Dark", "Estátua"]
  },
  {
    id: "flash-03",
    title: "Cyber-Sigil Spine Armor",
    category: "cyber-sigil",
    categoryLabel: "Cyber-Sigilism",
    status: "disponivel",
    image: "https://images.unsplash.com/photo-1590246814883-578336ff3265?auto=format&fit=crop&w=1000&q=85",
    description: "Estrutura longitudinal pensada especificamente para a anatomia da coluna e trapézio com simetria futurista.",
    placementSuggestion: "Coluna completa ou Cervical",
    dimensions: "25cm a 40cm",
    tags: ["Anatômico", "Spine Tattoo", "Cyberpunk", "Dark"]
  },
  {
    id: "healed-01",
    title: "Ornamental Fine Line Dark",
    category: "cicatrizada",
    categoryLabel: "Cicatrizada",
    status: "cicatrizada",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=1000&q=85",
    description: "Trabalho cicatrizado há meses no Tattoo Honey Studio. Traço negro profundo e micro-detalhes perfeitamente nítidos.",
    placementSuggestion: "Ombro e Braço Superior",
    dimensions: "Peça Única",
    tags: ["Cicatrizada", "Preto Intenso", "Fine Line"]
  },
  {
    id: "flash-04",
    title: "Adaga Cerimonial & Constelações",
    category: "flash",
    categoryLabel: "Flash Autoral",
    status: "disponivel",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1000&q=85",
    description: "Composição de adaga gótica com linhas finas e pontos astrais.",
    placementSuggestion: "Esterno, Canela ou Antebraço interno",
    dimensions: "14cm a 20cm",
    tags: ["Ornamental", "Adaga", "Dotwork", "Gótico"]
  }
];

export const CLIENT_FEEDBACKS = [
  {
    id: 1,
    name: "Beatriz Lima",
    city: "Brasília - DF",
    comment: "O Dan é um gênio! A espada com luas vermelhas ficou surreal, traço fininho que cicatrizou perfeito!",
    tattoo: "Espada com Luas Carmesim",
    stars: 5
  },
  {
    id: 2,
    name: "Gabriel Santos",
    city: "Asa Norte - DF",
    comment: "Ambiente do Tattoo Honey Studio impecável, biossegurança nota 1000 e o desenho em cyber-sigilism superou todas as expectativas!",
    tattoo: "Cyber-Sigil Spine",
    stars: 5
  },
  {
    id: 3,
    name: "Larissa M.",
    city: "Águas Claras - DF",
    comment: "Fiz um flash autoral de anime com ele e a atenção aos detalhes foi impressionante. Mão super leve!",
    tattoo: "Musa Anime Fine Line",
    stars: 5
  }
];
