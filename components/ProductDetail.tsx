'use client'
import { useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/data/products'

export default function ProductDetail({ product }: { product: Product }) {
  const { add } = useCart()
  const [active, setActive] = useState(0)
  const discountRate = 0.15 // 15% de descuento
  const discountedPrice = product.price * (1 - discountRate)

  const images = product.images && product.images.length > 0 ? product.images : []

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden">
          <Image src={images[active]} alt={product.title} fill className="object-cover" />
          <div className="absolute top-3 right-3 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full">
            15% OFF
          </div>
        </div>
        {images.length > 1 && (
          <div className="mt-3 grid grid-cols-5 gap-2">
            {images.map((src, i) => (
              <button key={i} onClick={() => setActive(i)} className={`relative aspect-square rounded-xl overflow-hidden border ${i===active ? 'border-black' : 'border-transparent'}`}>
                <Image src={src} alt={`${product.title} ${i+1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-heading text-3xl">{product.title}</h1>
        <p className="opacity-70 capitalize">{product.category.replace('-', ' ')} — {product.subcategory}</p>
        <p className="opacity-90">{product.description}</p>
        <div className="flex items-baseline gap-3">
          <p className="text-3xl font-bold">${discountedPrice.toFixed(0)}</p>
          <p className="text-xl font-semibold line-through opacity-50">${product.price.toFixed(0)}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => { add(product); toast.success('Producto agregado al carrito') }}
            className="px-6 py-3 rounded-full bg-black text-white"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}