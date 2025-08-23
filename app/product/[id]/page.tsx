'use client'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import Image from 'next/image'
import { notFound, useParams } from 'next/navigation'
import toast from 'react-hot-toast'

export default function ProductDetailPage() {
  const params = useParams()
  const id = Array.isArray(params?.id) ? params?.id[0] : (params?.id as string)
  const product = products.find(p => p.id === id)

  const { add } = useCart()

  if (!product) return notFound()

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-neutral-100 rounded-2xl overflow-hidden relative aspect-square">
        <Image src={product.image} alt={product.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-heading text-3xl">{product.title}</h1>
        <p className="opacity-70 capitalize">{product.category.replace('-', ' ')} — {product.subcategory}</p>
        <p className="opacity-90">{product.description}</p>
        <p className="text-2xl font-semibold">${product.price.toFixed(0)}</p>
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
