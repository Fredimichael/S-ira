import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'
import { products } from '@/data/products'
import Image from 'next/image'

export default function HomePage() {
  const highlighted = products.filter(p => p.featured).slice(0, 8) 
  return (
    <div className="space-y-12">
      <section className="text-center py-16 flex flex-col items-center justify-center">
        
        {/* Logo grande */}
        <Image        
          src="/Sairapng.png" 
          alt="Logo Sáira" 
          width={600}      // 👈 ajustá el tamaño a gusto
          height={200}
          className="h-auto w-auto mb-6"
        />

        {/* Subtítulo */}
        <p className="text-base md:text-lg opacity-80">
          Joyas en acero.
        </p>

        {/* Botón catálogo */}
        <div className="mt-6">
          <Link 
            href="/catalog" 
            className="inline-block bg-black text-white px-6 py-3 rounded-full"
          >
            Ver catálogo
          </Link>
        </div>
      </section>

      {/* Productos destacados */}
      <section>
        <h2 className="font-heading text-2xl mb-4">Destacados</h2>
        <ProductGrid items={highlighted} />
      </section>
    </div>
  )
}
