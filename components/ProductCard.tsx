'use client'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/data/products'

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart()
  const isOutOfStock = p.outOfStock
  const discountRate = 0.15 // 15% de descuento
  const discountedPrice = p.price * (1 - discountRate)

  return (
    <div className={`border rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition ${isOutOfStock ? 'opacity-50' : ''}`}>
      <div>
        {isOutOfStock ? (
          <div className="pointer-events-none">
            <div className="relative aspect-square bg-neutral-100 rounded-xl mb-3 overflow-hidden">
              <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
            </div>
          </div>
        ) : (
          <Link href={`/product/${p.id}`}>
            <div className="relative aspect-square bg-neutral-100 rounded-xl mb-3 overflow-hidden">
              <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                15% OFF
              </div>
            </div>
          </Link>
        )}
        <div className={`${isOutOfStock ? '' : 'block hover:underline'}`}>
          <h2 className="font-heading text-lg block">{p.title}</h2>
        </div>
        <p className="opacity-70 text-sm capitalize">{p.category.replace('-', ' ')} — {p.subcategory}</p>
      </div>

      {/* --- SECCIÓN MODIFICADA PARA SER RESPONSIVE --- */}
      <div className="mt-4">
        {isOutOfStock ? (
          <span className="block text-center font-bold text-red-500 text-sm py-2">SIN STOCK</span>
        ) : (
          // En móviles (flex-col), los elementos se apilan. En pantallas pequeñas y más grandes (sm:flex-row), se ponen en fila.
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-medium text-lg">${discountedPrice.toFixed(0)}</span>
              <span className="line-through text-sm opacity-60">${p.price.toFixed(0)}</span>
            </div>
            <button
              onClick={() => { add(p); toast.success('Producto agregado al carrito') }}
              // En móviles el botón ocupa todo el ancho (w-full). En pantallas más grandes, el ancho es automático (sm:w-auto).
              className="w-full sm:w-auto px-4 py-2 rounded-full bg-black text-white text-sm hover:opacity-90 transition-all"
            >
              Agregar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}