import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <HeroSection />

        {/* Categories preview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossas Categorias</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Tintas", image: "paint cans in various colors" },
                { name: "Vernizes", image: "wood varnish bottles" },
                { name: "Pincéis", image: "professional paint brushes" },
                { name: "Materiais", image: "construction materials and tools" },
              ].map((category) => (
                <div
                  key={category.name}
                  className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={`/abstract-geometric-shapes.png?height=120&width=120&query=${category.image}`}
                    alt={category.name}
                    className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                  />
                  <h3 className="font-semibold text-card-foreground">{category.name}</h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/catalogo">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ver Catálogo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
