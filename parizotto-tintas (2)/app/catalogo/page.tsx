import { Header } from "@/components/header"
import { ProductCatalog } from "@/components/product-catalog"
import { Footer } from "@/components/footer"

export default function CatalogoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <ProductCatalog />
      </div>
      <Footer />
    </main>
  )
}
