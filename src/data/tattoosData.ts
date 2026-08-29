const BASE = import.meta.env.BASE_URL;

export interface TattooItem {
  id: string;
  title: string;
  category: 'disponivel' | 'flash' | 'cicatrizada' | 'cyber-sigil' | 'anime-dark';
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
    id: "disponivel-01",
    title: "Flash Cyber-Sigil Autoral #01",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-01.jpeg`,
    description: "Arte autoral exclusiva do Dan com traço fine line refinado e simetria anatômica.",
    placementSuggestion: "Antebraço, Braço ou Canela",
    dimensions: "12cm a 20cm",
    tags: ["Disponível", "Fine Line", "Autoral", "Dan Tattoo"]
  },
  {
    id: "disponivel-02",
    title: "Flash Dark Fantasy Autoral #02",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-02.jpeg`,
    description: "Composição autoral exclusiva com elementos ornamentais e linhas fluidas.",
    placementSuggestion: "Coluna, Costas ou Tríceps",
    dimensions: "15cm a 25cm",
    tags: ["Disponível", "Dark Fantasy", "Exclusivo", "fine Line"]
  },
  {
    id: "disponivel-03",
    title: "Flash Cyber-Sigilism Autoral #03",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-03.jpeg`,
    description: "Design futurista e sigilos minimalistas adaptáveis a diversas curvas corporais.",
    placementSuggestion: "Esterno, Peito ou Antebraço",
    dimensions: "10cm a 18cm",
    tags: ["Disponível", "Cyber-Sigilism", "Futurista"]
  },
  {
    id: "disponivel-04",
    title: "Arte Fine Line Autoral #04",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-04.jpeg`,
    description: "Traços ultrafinos e de alta precisão desenhados sob medida por Dan Zauu.",
    placementSuggestion: "Braço, Panturrilha ou Ombro",
    dimensions: "14cm a 22cm",
    tags: ["Disponível", "Fine Line", "Arte Exclusiva"]
  },
  {
    id: "disponivel-05",
    title: "Projeto Cyber-Sigil #05",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-05.jpg`,
    description: "Estrutura ornamental anatômica pronta para agendamento no Tattoo Honey Studio.",
    placementSuggestion: "Coluna, Antebraço ou Coxa",
    dimensions: "16cm a 28cm",
    tags: ["Disponível", "Cyber-Sigilism", "Anatômico"]
  },
  {
    id: "disponivel-06",
    title: "Flash Anime & Sigilo #06",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-06.jpg`,
    description: "Fusão de estética Dark Anime com sigilos contemporâneos e detalhes delicados.",
    placementSuggestion: "Antebraço, Canela ou Coxa",
    dimensions: "12cm a 20cm",
    tags: ["Disponível", "Dark Anime", "Sigilos"]
  },
  {
    id: "disponivel-07",
    title: "Arte Autoral Exclusiva #07",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-07.jpg`,
    description: "Desenho autoral único disponível para reserva rápida via WhatsApp.",
    placementSuggestion: "Tríceps, Costelas ou Canela",
    dimensions: "10cm a 16cm",
    tags: ["Disponível", "Autoral", "Exclusivo"]
  },
  {
    id: "disponivel-08",
    title: "Flash Neo-Ornamental #08",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-08.jpg`,
    description: "Neo-ornamental em preto intenso com contraste dramático e linhas precisas.",
    placementSuggestion: "Ombro, Trapézio ou Coluna",
    dimensions: "15cm a 25cm",
    tags: ["Disponível", "Neo-Ornamental", "Fine Line"]
  },
  {
    id: "disponivel-09",
    title: "Projeto Especial Autoral #09",
    category: "disponivel",
    categoryLabel: "Disponível para Tatuar",
    status: "disponivel",
    image: `${BASE}assets/tattoos/tattoo-disponivel-09.jpg`,
    description: "Projeto de destaque autoral com composição limpa e estética marcante.",
    placementSuggestion: "Coluna Completa, Braço ou Coxa",
    dimensions: "20cm a 35cm",
    tags: ["Disponível", "Destaque", "Projeto Maior"]
  },
  {
    id: "real-tattoo-01",
    title: "Espada Cerimonial & Luas Carmesim",
    category: "cicatrizada",
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
    status: "cicatrizada",
    image: `${BASE}assets/flash-statue-anime.jpg`,
    description: "Estudo e arte original do Dan com estética neoclássica e dark anime, ornamentos botânicos e estrela quádrupla ✣.",
    placementSuggestion: "Braço completo, Coxa ou Costas",
    dimensions: "20cm a 30cm",
    tags: ["Foto Real", "Flash Autoral", "Anime Dark", "Estátua"]
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

