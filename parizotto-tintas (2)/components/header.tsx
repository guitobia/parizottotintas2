import { Search, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CartDrawer } from "./cart-drawer"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-4">
            <span>📞 (11) 99999-9999</span>
            <span>✉️ contato@parizottotintas.com.br</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Frete grátis acima de R$ 200</span>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/logo-parizotto.png" alt="Parizotto Tintas" width={650} height={260} className="h-40 w-auto" />
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Busque por tintas, vernizes, pincéis..." className="pl-10 pr-4 py-2 w-full" />
            </div>
          </div>

          {/* Cart and menu */}
          <div className="flex items-center gap-4">
            <CartDrawer />
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 py-3 border-t border-border">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Tintas
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Vernizes
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Pincéis e Rolos
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Materiais
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Ferramentas
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Ofertas
          </Button>
        </nav>
      </div>
    </header>
  )
}
