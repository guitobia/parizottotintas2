"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star, ThumbsUp } from "lucide-react"

interface ProductReviewsProps {
  rating: number
  reviewCount: number
  productName: string
}

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    author: "Maria S.",
    rating: 5,
    date: "2024-01-15",
    title: "Excelente qualidade!",
    comment: "Produto de ótima qualidade, chegou rápido e bem embalado. Recomendo!",
    helpful: 12,
  },
  {
    id: 2,
    author: "João P.",
    rating: 4,
    date: "2024-01-10",
    title: "Bom custo-benefício",
    comment: "Atendeu minhas expectativas. A cor ficou exatamente como esperava.",
    helpful: 8,
  },
  {
    id: 3,
    author: "Ana L.",
    rating: 5,
    date: "2024-01-05",
    title: "Recomendo!",
    comment: "Já é a segunda vez que compro este produto. Sempre com qualidade impecável.",
    helpful: 15,
  },
]

const ratingDistribution = [
  { stars: 5, count: 89, percentage: 70 },
  { stars: 4, count: 25, percentage: 20 },
  { stars: 3, count: 8, percentage: 6 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 2, percentage: 2 },
]

export function ProductReviews({ rating, reviewCount }: ProductReviewsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Avaliações dos Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rating Summary */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold">{rating}</div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{reviewCount} avaliações</p>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-2 text-sm">
                    <span className="w-8">{item.stars}★</span>
                    <Progress value={item.percentage} className="flex-1 h-2" />
                    <span className="w-8 text-muted-foreground">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Write Review */}
            <div className="space-y-4">
              <h4 className="font-semibold">Compartilhe sua experiência</h4>
              <p className="text-sm text-muted-foreground">
                Conte para outros clientes o que você achou deste produto.
              </p>
              <Button className="w-full">Escrever Avaliação</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Comentários dos Clientes</h3>
        {mockReviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{review.author}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(review.date).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <h4 className="font-medium">{review.title}</h4>
                <p className="text-muted-foreground">{review.comment}</p>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Útil ({review.helpful})
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
