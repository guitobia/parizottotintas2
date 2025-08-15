"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  brand: string
  rating: number
  inStock: boolean
  isPromotion?: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
    })

    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <Link href={`/produto/${product.id}`}>
      <Card className="group hover:shadow-lg transition-shadow duration-300 relative overflow-hidden cursor-pointer">
        {product.isPromotion && (
          <Badge className="absolute top-2 left-2 z-10 bg-secondary text-secondary-foreground">-{discount}%</Badge>
        )}

        <div className="relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{product.brand}</p>
            <h3 className="font-semibold text-card-foreground line-clamp-2 leading-tight">{product.name}</h3>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
              <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="w-full space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">R$ {product.price.toFixed(2).replace(".", ",")}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
            </div>

            <Button
              className="w-full"
              disabled={!product.inStock || isAdding}
              variant={product.inStock ? "default" : "secondary"}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isAdding ? "Adicionando..." : product.inStock ? "Adicionar ao Carrinho" : "Fora de Estoque"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
