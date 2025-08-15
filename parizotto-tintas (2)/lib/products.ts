export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  brand: string
  rating: number
  reviewCount: number
  inStock: boolean
  isPromotion?: boolean
  description: string
  specifications: Record<string, string>
  features: string[]
  stockQuantity: number
}

// Mock data expandido - em produção viria de uma API
export const products: Product[] = [
  {
    id: "1",
    name: "Tinta Acrílica Premium Branco Neve 18L",
    price: 89.9,
    originalPrice: 109.9,
    image: "/placeholder-i4iqb.png",
    images: ["/placeholder-i4iqb.png", "/white-paint-detail.png", "/paint-application.png", "/paint-finish.png"],
    category: "Tintas Internas",
    brand: "Suvinil",
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    isPromotion: true,
    stockQuantity: 45,
    description:
      "Tinta acrílica premium de alta qualidade, ideal para ambientes internos. Oferece excelente cobertura, durabilidade e acabamento impecável. Fácil aplicação e secagem rápida.",
    specifications: {
      Tipo: "Acrílica",
      Acabamento: "Fosco",
      Rendimento: "12-14 m²/L",
      Secagem: "30 minutos ao toque",
      Diluição: "Água (até 20%)",
      Aplicação: "Pincel, rolo ou pistola",
      Cor: "Branco Neve",
      Volume: "18 Litros",
    },
    features: [
      "Alta cobertura e rendimento",
      "Secagem rápida",
      "Fácil limpeza com água",
      "Baixo odor",
      "Resistente a fungos e bactérias",
      "Acabamento uniforme",
    ],
  },
  {
    id: "2",
    name: "Verniz Marítimo Transparente 900ml",
    price: 45.5,
    image: "/placeholder-46pnh.png",
    images: ["/placeholder-46pnh.png", "/varnish-application.png", "/wood-protection.png"],
    category: "Vernizes",
    brand: "Coral",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    isPromotion: false,
    stockQuantity: 23,
    description:
      "Verniz marítimo de alta resistência, especialmente desenvolvido para proteção de madeiras expostas a condições extremas. Oferece proteção UV e resistência à água.",
    specifications: {
      Tipo: "Poliuretano",
      Acabamento: "Brilhante",
      Rendimento: "16-18 m²/L",
      Secagem: "4-6 horas",
      Diluição: "Aguarrás (até 10%)",
      Aplicação: "Pincel ou rolo",
      Volume: "900ml",
      "Proteção UV": "Sim",
    },
    features: [
      "Proteção UV avançada",
      "Resistente à água e maresia",
      "Flexibilidade e aderência",
      "Não amarela com o tempo",
      "Ideal para madeiras externas",
    ],
  },
  {
    id: "3",
    name: "Tinta Látex Econômica Azul Céu 3.6L",
    price: 32.9,
    originalPrice: 42.9,
    image: "/blue-paint-can.png",
    images: ["/blue-paint-can.png", "/blue-paint-wall.png", "/latex-texture.png"],
    category: "Tintas Internas",
    brand: "Eucatex",
    rating: 4.2,
    reviewCount: 156,
    inStock: true,
    isPromotion: true,
    stockQuantity: 67,
    description:
      "Tinta látex econômica com excelente custo-benefício. Ideal para renovação de ambientes internos com cor vibrante e acabamento de qualidade.",
    specifications: {
      Tipo: "Látex PVA",
      Acabamento: "Fosco",
      Rendimento: "10-12 m²/L",
      Secagem: "2-4 horas",
      Diluição: "Água (até 30%)",
      Aplicação: "Pincel ou rolo",
      Cor: "Azul Céu",
      Volume: "3.6 Litros",
    },
    features: ["Ótimo custo-benefício", "Cor vibrante e duradoura", "Fácil aplicação", "Lavável", "Secagem rápida"],
  },
  {
    id: "4",
    name: "Kit Pincel Profissional 3 Peças",
    price: 28.9,
    image: "/placeholder-dlof3.png",
    images: ["/placeholder-dlof3.png", "/brush-set-detail.png", "/professional-brushes.png"],
    category: "Pincéis",
    brand: "Atlas",
    rating: 4.7,
    reviewCount: 203,
    inStock: false,
    isPromotion: false,
    stockQuantity: 0,
    description:
      "Kit com 3 pincéis profissionais de diferentes tamanhos, ideais para trabalhos de precisão e acabamento. Cerdas de alta qualidade para melhor resultado.",
    specifications: {
      Material: "Cerdas sintéticas",
      Tamanhos: "1', 2' e 3'",
      Cabo: "Madeira envernizada",
      Virola: "Aço inoxidável",
      Uso: "Tintas e vernizes",
      Quantidade: "3 peças",
    },
    features: [
      "Cerdas de alta qualidade",
      "Diferentes tamanhos",
      "Cabo ergonômico",
      "Durabilidade superior",
      "Fácil limpeza",
    ],
  },
  {
    id: "5",
    name: "Esmalte Sintético Vermelho Ferrari 900ml",
    price: 38.9,
    image: "/red-enamel-paint-can.png",
    images: ["/red-enamel-paint-can.png", "/red-enamel-finish.png", "/metal-protection.png"],
    category: "Esmaltes",
    brand: "Sherwin Williams",
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    isPromotion: false,
    stockQuantity: 34,
    description:
      "Esmalte sintético de alta qualidade com cor vibrante e acabamento brilhante. Ideal para superfícies metálicas e madeiras, oferecendo proteção e beleza.",
    specifications: {
      Tipo: "Sintético",
      Acabamento: "Brilhante",
      Rendimento: "12-14 m²/L",
      Secagem: "6-8 horas",
      Diluição: "Aguarrás (até 15%)",
      Aplicação: "Pincel, rolo ou pistola",
      Cor: "Vermelho Ferrari",
      Volume: "900ml",
    },
    features: [
      "Cor intensa e duradoura",
      "Acabamento brilhante",
      "Proteção anticorrosiva",
      "Resistente a intempéries",
      "Fácil aplicação",
    ],
  },
  {
    id: "6",
    name: "Rolo de Lã Natural 23cm",
    price: 15.9,
    originalPrice: 19.9,
    image: "/paint-roller-wool.png",
    images: ["/paint-roller-wool.png", "/wool-roller-texture.png", "/roller-application.png"],
    category: "Rolos",
    brand: "Anjo",
    rating: 4.4,
    reviewCount: 145,
    inStock: true,
    isPromotion: true,
    stockQuantity: 89,
    description:
      "Rolo de lã natural de 23cm, ideal para aplicação de tintas em superfícies lisas e semi-lisas. Proporciona acabamento uniforme e absorção adequada.",
    specifications: {
      Material: "Lã natural",
      Tamanho: "23cm",
      Pelo: "Médio (12mm)",
      Cabo: "Plástico ergonômico",
      Uso: "Tintas látex e acrílicas",
      Superfície: "Lisa e semi-lisa",
    },
    features: ["Lã natural de qualidade", "Absorção uniforme", "Acabamento liso", "Durabilidade", "Fácil limpeza"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(productId: string, category: string, limit = 4): Product[] {
  return products.filter((product) => product.id !== productId && product.category === category).slice(0, limit)
}
