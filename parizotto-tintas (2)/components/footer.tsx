import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image src="/logo-parizotto.png" alt="Parizotto Tintas" width={150} height={60} className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground">
              Há mais de 20 anos oferecendo as melhores tintas, vernizes e materiais para construção com qualidade e
              tradição.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalogo" className="text-muted-foreground hover:text-primary">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-muted-foreground hover:text-primary">
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalogo?category=Tintas Internas" className="text-muted-foreground hover:text-primary">
                  Tintas Internas
                </Link>
              </li>
              <li>
                <Link href="/catalogo?category=Tintas Externas" className="text-muted-foreground hover:text-primary">
                  Tintas Externas
                </Link>
              </li>
              <li>
                <Link href="/catalogo?category=Vernizes" className="text-muted-foreground hover:text-primary">
                  Vernizes
                </Link>
              </li>
              <li>
                <Link href="/catalogo?category=Pincéis" className="text-muted-foreground hover:text-primary">
                  Pincéis e Rolos
                </Link>
              </li>
              <li>
                <Link href="/catalogo?category=Materiais" className="text-muted-foreground hover:text-primary">
                  Materiais
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">contato@parizottotintas.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Rua das Tintas, 123
                  <br />
                  São Paulo - SP
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Newsletter</h4>
              <p className="text-xs text-muted-foreground">Receba ofertas e novidades</p>
              <div className="flex gap-2">
                <Input placeholder="Seu e-mail" className="text-sm" />
                <Button size="sm">Inscrever</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row gap-4">
            <p>&copy; 2024 Parizotto Tintas. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link href="/termos" className="hover:text-primary">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="hover:text-primary">
                Política de Privacidade
              </Link>
              <Link href="/trocas" className="hover:text-primary">
                Trocas e Devoluções
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Pagamento seguro</span>
            <div className="flex gap-1">
              <div className="w-8 h-5 bg-primary/10 rounded text-xs flex items-center justify-center">💳</div>
              <div className="w-8 h-5 bg-primary/10 rounded text-xs flex items-center justify-center">🏦</div>
              <div className="w-8 h-5 bg-primary/10 rounded text-xs flex items-center justify-center">📱</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
