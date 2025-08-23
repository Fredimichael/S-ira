'use client'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/data/products'

export default function ProductCard({ p }: { p: Product }) {
  const { add } = useCart()
  return (
    <div className="border rounded-2xl p-4 hover:shadow-sm transition">
      <Link href={`/product/${p.id}`}>
        <div className="relative aspect-square bg-neutral-100 rounded-xl mb-3 overflow-hidden">
          <Image src={p.image} alt={p.title} fill className="object-cover" />
        </div>
      </Link>
      <Link href={`/product/${p.id}`} className="font-heading text-lg block hover:underline">{p.title}</Link>
      <p className="opacity-70 text-sm capitalize">{p.category.replace('-', ' ')} — {p.subcategory}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-medium">${p.price.toFixed(0)}</span>
        <button
          onClick={() => { add(p); toast.success('Producto agregado al carrito') }}
          className="px-3 py-1.5 rounded-full bg-black text-white text-sm hover:opacity-90"
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
