export interface PopcornCategory {
  id: 'salgada' | 'doce' | 'mista';
  name: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  options: string[];
  disclaimer?: string;
  popularCombo: string;
}

export interface PopcornSize {
  id: string;
  name: string;
  containerType: 'saquinho' | 'caixinha' | 'saco';
  categoryLabel: string;
  price: number;
  description: string;
  serving: string;
  highlight?: boolean;
}

export const OFFICIAL_ASSETS = {
  logo: 'https://i.postimg.cc/jSHfcCPz/logo-popcorn.jpg',
  character: 'https://i.postimg.cc/KjK59FDh/IMG-20261001-210219.jpg',
  character3D: '/src/assets/images/popcorn_character_3d_shiny_1790910960141.jpg',
  images: {
    salgada: '/images/salgada.jpg',
    doce: '/images/doce.jpg',
    mista: '/images/mista.jpg',
  },
};

export const CONTACT_INFO = {
  phoneDisplay: '21 96580-2404',
  phoneRaw: '5521965802404',
  whatsappUrl: 'https://wa.me/5521965802404',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Popcorn+Centro+de+Concei%C3%A7%C3%A3o+de+Jacare%C3%AD',
  locationCity: 'Centro de Conceição de Jacareí',
  region: 'Costa Verde - RJ',
  openingHours: 'Terça a Domingo — a partir das 17h até as 23h (Pipoca quentinha na hora!)',
};

export const POPCORN_CATEGORIES: PopcornCategory[] = [
  {
    id: 'salgada',
    name: 'PIPOCA SALGADA',
    badge: 'Crocante & Feita na Hora',
    tagline: 'Pipoca salgada com manteiga e muito sabor',
    description: 'Nossa pipoca clássica, estourada no calor certo com manteiga derretida artesanal e temperada com ingredientes frescos e sabor marcante.',
    image: OFFICIAL_ASSETS.images.salgada,
    options: [
      'Sal e manteiga',
      'Queijo ralado',
      'Bacon',
      'Calabresa',
    ],
    popularCombo: 'Manteiga especial + Queijo ralado + Bacon crocante',
  },
  {
    id: 'mista',
    name: 'PIPOCA MISTA',
    badge: 'A Favorita dos Clientes',
    tagline: 'Combine pipoca salgada + pipoca doce',
    description: 'Para quem não consegue escolher só uma: o encontro perfeito do salgadinho amanteigado com o doce crocante caramelizado.',
    image: OFFICIAL_ASSETS.images.mista,
    options: [
      'Base Salgada temperada',
      'Base Doce caramelizada',
      'Coberturas doces e queijo',
      'Combinação sob medida',
    ],
    popularCombo: 'Metade salgadinha com manteiga + Metade doce com leite condensado',
  },
  {
    id: 'doce',
    name: 'PIPOCA DOCE',
    badge: 'Caramelizada & Irresistível',
    tagline: 'Caramelizada, crocante e cheia de sabor',
    description: 'Pipoca envolvida em calda de caramelo dourada e finalizada com coberturas generosas de chocolates, cremes e confeitos deliciosos.',
    image: OFFICIAL_ASSETS.images.doce,
    options: [
      'Leite condensado',
      'Chocolate',
      'Chocolate branco',
      'Cobertura de dentadura',
      'Beijinho',
      'Banana',
      'Caramelo',
      'Coberturas Fini',
    ],
    disclaimer: '*Opções selecionadas com coberturas especiais e guloseimas tipo Fini disponíveis no carrinho.',
    popularCombo: 'Caramelo dourado + Leite condensado + Fini',
  },
];

export const SALGADA_TOPPINGS = [
  { id: 'sal_manteiga', name: 'Sal e manteiga', icon: '🧈' },
  { id: 'queijo_ralado', name: 'Queijo ralado', icon: '🧀' },
  { id: 'bacon', name: 'Bacon', icon: '🥓' },
  { id: 'calabresa', name: 'Calabresa', icon: '🍖' },
];

export const DOCE_TOPPINGS = [
  { id: 'leite_condensado', name: 'Leite condensado', icon: '🥛' },
  { id: 'chocolate', name: 'Chocolate', icon: '🍫' },
  { id: 'chocolate_branco', name: 'Chocolate branco', icon: '🤍' },
  { id: 'dentadura', name: 'Cobertura de dentadura', icon: '🍬' },
  { id: 'beijinho', name: 'Beijinho', icon: '🥥' },
  { id: 'banana', name: 'Banana', icon: '🍌' },
  { id: 'caramelo', name: 'Caramelo', icon: '🍯' },
  { id: 'fini', name: 'Coberturas Fini', icon: '🍭' },
];

// Valores exatos especificados no prompt (não alterar)
export const POPCORN_SIZES: PopcornSize[] = [
  {
    id: 'saquinho_pequeno',
    name: 'Saquinho Pequeno',
    containerType: 'saquinho',
    categoryLabel: 'Saquinho',
    price: 5.0,
    description: 'A porção individual clássica para um lanche rápido na praça.',
    serving: 'Individual (1 pessoa)',
  },
  {
    id: 'caixinha_pequena',
    name: 'Caixinha Pequena',
    containerType: 'caixinha',
    categoryLabel: 'Caixinha',
    price: 7.0,
    description: 'Caixa prática anti-gordura, mantém a crocância e o calor por mais tempo.',
    serving: 'Individual caprichado',
  },
  {
    id: 'saquinho_medio',
    name: 'Saquinho Médio',
    containerType: 'saquinho',
    categoryLabel: 'Saquinho',
    price: 8.0,
    description: 'Tamanho perfeito para matar a vontade durante o passeio.',
    serving: '1 a 2 pessoas',
  },
  {
    id: 'caixinha_media',
    name: 'Caixinha Média',
    containerType: 'caixinha',
    categoryLabel: 'Caixinha',
    price: 9.0,
    description: 'Muito querida pelos clientes! Cabe bastante pipoca com muito topping.',
    serving: '1 a 2 pessoas',
    highlight: true,
  },
  {
    id: 'saquinho_grande',
    name: 'Saquinho Grande',
    containerType: 'saquinho',
    categoryLabel: 'Saquinho',
    price: 10.0,
    description: 'Generoso para quem não quer que a pipoca acabe no meio do filme.',
    serving: '2 pessoas',
  },
  {
    id: 'caixinha_grande',
    name: 'Caixinha Grande',
    containerType: 'caixinha',
    categoryLabel: 'Caixinha',
    price: 12.0,
    description: 'A favorita para turbinar com várias coberturas doces e queijo.',
    serving: '2 a 3 pessoas',
    highlight: true,
  },
  {
    id: 'saco_xg',
    name: 'Saco XG',
    containerType: 'saco',
    categoryLabel: 'Mega Saco',
    price: 17.0,
    description: 'Super porção para turmas de amigos e passeios pela orla da Costa Verde.',
    serving: '3 a 4 pessoas',
  },
  {
    id: 'saco_g',
    name: 'Saco G',
    containerType: 'saco',
    categoryLabel: 'Saco Família',
    price: 20.0,
    description: 'O maior tamanho da casa! Pipoca de sobra para toda a família e amigos.',
    serving: 'Família inteira (4+ pessoas)',
    highlight: true,
  },
];

export interface OrderState {
  type: 'salgada' | 'doce' | 'mista';
  sizeId: string;
  salgadaToppings: string[];
  doceToppings: string[];
  quantity: number;
  notes: string;
}

export function buildWhatsAppOrderMessage(order: OrderState): string {
  const selectedSize = POPCORN_SIZES.find((s) => s.id === order.sizeId) || POPCORN_SIZES[0];
  const unitPrice = selectedSize.price;
  const totalPrice = unitPrice * order.quantity;

  const typeName =
    order.type === 'salgada'
      ? 'Pipoca Salgada 🧈'
      : order.type === 'doce'
      ? 'Pipoca Doce 🍫'
      : 'Pipoca Mista (Salgada + Doce) 🍿';

  // Gather toppings
  const toppingsList: string[] = [];
  if (order.type === 'salgada' || order.type === 'mista') {
    order.salgadaToppings.forEach((topId) => {
      const found = SALGADA_TOPPINGS.find((t) => t.id === topId);
      if (found) toppingsList.push(`[Salgado] ${found.name}`);
    });
  }
  if (order.type === 'doce' || order.type === 'mista') {
    order.doceToppings.forEach((topId) => {
      const found = DOCE_TOPPINGS.find((t) => t.id === topId);
      if (found) toppingsList.push(`[Doce] ${found.name}`);
    });
  }

  const toppingsFormatted =
    toppingsList.length > 0 ? toppingsList.join(', ') : 'Padrão da casa';

  const notesFormatted = order.notes.trim() ? order.notes.trim() : 'Nenhuma observação';

  const message = `🍿 *NOVO PEDIDO — POPCORN JACAREÍ* 🍿
━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Local de Retirada:* Centro de Conceição de Jacareí

• *Tipo de Pipoca:* ${typeName}
• *Tamanho:* ${selectedSize.name} (R$ ${unitPrice.toFixed(2).replace('.', ',')} unid.)
• *Sabores / Coberturas:* ${toppingsFormatted}
• *Quantidade:* ${order.quantity}x
• *Observações:* ${notesFormatted}
━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *VALOR TOTAL: R$ ${totalPrice.toFixed(2).replace('.', ',')}*
━━━━━━━━━━━━━━━━━━━━━━━━━
Olá! Gostaria de confirmar esse pedido feito no site para retirar com vocês quentinho!`;

  return encodeURIComponent(message);
}
