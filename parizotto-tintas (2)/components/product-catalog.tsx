"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "./product-card"
import { ProductFilters } from "./product-filters"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Grid, List, Filter } from "lucide-react"

// Mock data - em produção viria de uma API
const mockProducts = [
  {
    id: "1",
    name: "Tinta Acrílica Premium Branco Neve 18L",
    price: 89.9,
    originalPrice: 109.9,
    image: "/placeholder-i4iqb.png",
    category: "Tintas Internas",
    brand: "Suvinil",
    rating: 4.8,
    inStock: true,
    isPromotion: true,
  },
  {
    id: "2",
    name: "Verniz Marítimo Transparente 900ml",
    price: 45.5,
    image: "/placeholder-46pnh.png",
    category: "Vernizes",
    brand: "Coral",
    rating: 4.6,
    inStock: true,
    isPromotion: false,
  },
  {
    id: "3",
    name: "Tinta Látex Econômica Azul Céu 3.6L",
    price: 32.9,
    originalPrice: 42.9,
    image: "/blue-paint-can.png",
    category: "Tintas Internas",
    brand: "Eucatex",
    rating: 4.2,
    inStock: true,
    isPromotion: true,
  },
  {
    id: "4",
    name: "Kit Pincel Profissional 3 Peças",
    price: 28.9,
    image: "/placeholder-dlof3.png",
    category: "Pincéis",
    brand: "Atlas",
    rating: 4.7,
    inStock: false,
    isPromotion: false,
  },
  {
    id: "5",
    name: "Esmalte Sintético Vermelho Ferrari 900ml",
    price: 38.9,
    image: "/red-enamel-paint-can.png",
    category: "Esmaltes",
    brand: "Sherwin Williams",
    rating: 4.9,
    inStock: true,
    isPromotion: false,
  },
  {
    id: "6",
    name: "Rolo de Lã Natural 23cm",
    price: 15.9,
    originalPrice: 19.9,
    image: "/paint-roller-wool.png",
    category: "Rolos",
    brand: "Anjo",
    rating: 4.4,
    inStock: true,
    isPromotion: true,
  },
]

interface FilterState {
  categories: string[]
  brands: string[]
  priceRange: [number, number]
  inStock: boolean
  onSale: boolean
}

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    priceRange: [0, 500],
    inStock: false,
    onSale: false,
  })

  const filteredProducts = useMemo(() => {
    const filtered = mockProducts.filter((product) => {
      // Search filter
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false
      }

      // Sale filter
      if (filters.onSale && !product.isPromotion) {
        return false
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Keep original order for relevance
        break
    }

    return filtered
  }, [searchTerm, filters, sortBy])

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 500],
      inStock: false,
      onSale: false,
    })
    setSearchTerm("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Catálogo de Produtos</h1>

        {/* Search and controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevância</SelectItem>
                <SelectItem value="price-low">Menor preço</SelectItem>
                <SelectItem value="price-high">Maior preço</SelectItem>
                <SelectItem value="rating">Melhor avaliação</SelectItem>
                <SelectItem value="name">Nome A-Z</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center border rounded-md">
              <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
                <List className="h-4 w-4" />
              </Button>
            </div>

            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <aside className={`w-80 ${showFilters ? "block" : "hidden"} md:block`}>
          <ProductFilters filters={filters} onFiltersChange={setFilters} onClearFilters={clearFilters} />
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-muted-foreground">{filteredProducts.length} produtos encontrados</p>
          </div>

          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nenhum produto encontrado</p>
              <Button onClick={clearFilters}>Limpar filtros</Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
