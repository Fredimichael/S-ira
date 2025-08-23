'use client'
import { useState } from 'react'
import Filters from '@/components/Filters'
import ProductGrid from '@/components/ProductGrid'
import { products as data, type Product } from '@/data/products'

export default function CatalogPage() {
  const [items, setItems] = useState<Product[]>(data)

  return (
    <div>
      <h1 className="font-heading text-3xl mb-6">Catálogo</h1>
      <Filters data={data} onChange={setItems} />
      <ProductGrid items={items} />
    </div>
  )
}
