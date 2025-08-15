import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Truck, CreditCard } from "lucide-react"
import Link from "next/link"

export default function PedidoConfirmadoPage() {
  const orderNumber = "PZ" + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Pedido Confirmado!</h1>
          <p className="text-muted-foreground mb-8">
            Obrigado pela sua compra! Seu pedido foi recebido e está sendo processado.
          </p>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Número do Pedido</p>
                  <p className="text-2xl font-bold text-primary">#{orderNumber}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <CreditCard className="h-8 w-8 text-primary mx-auto" />
                    <p className="text-sm font-medium">Pagamento</p>
                    <p className="text-xs text-muted-foreground">Processando</p>
                  </div>
                  <div className="space-y-2">
                    <Package className="h-8 w-8 text-muted-foreground mx-auto" />
                    <p className="text-sm font-medium">Preparação</p>
                    <p className="text-xs text-muted-foreground">Aguardando</p>
                  </div>
                  <div className="space-y-2">
                    <Truck className="h-8 w-8 text-muted-foreground mx-auto" />
                    <p className="text-sm font-medium">Entrega</p>
                    <p className="text-xs text-muted-foreground">Aguardando</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Você receberá um e-mail de confirmação com todos os detalhes do seu pedido e informações de
              acompanhamento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/catalogo">Continuar Comprando</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Voltar ao Início</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
