import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-card to-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Transforme seus
              <span className="text-primary block">projetos</span>
              com qualidade
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Há mais de 20 anos oferecendo as melhores tintas, vernizes e materiais para construção. Qualidade
              profissional com atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/catalogo">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Fale Conosco
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/paint-store.png"
              alt="Loja de tintas profissional"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
