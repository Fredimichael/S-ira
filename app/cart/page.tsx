'use client'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { buildWhatsAppMessage, getWhatsAppLink } from '@/lib/whatsapp'

export default function CartPage() {
  const { items, remove, clear, total } = useCart()

  const message = buildWhatsAppMessage(items, total)
  const wa = getWhatsAppLink(message)

  return (
    <div>
      <h1 className="font-heading text-3xl mb-6">Carrito</h1>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="opacity-70 mb-4">Tu carrito está vacío.</p>
          <Link href="/catalog" className="inline-block bg-black text-white px-6 py-3 rounded-full">Ir al catálogo</Link>
        </div>
      ) : (
        <div className="space-y-6">
          <ul className="divide-y">
            {items.map(i => (
              <li key={i.id} className="py-4 flex items-center justify-between">
                <div>
                  <p className="font-medium">{i.title} <span className="opacity-60">x{i.qty}</span></p>
                  <p className="text-sm opacity-70">${(i.price * i.qty).toFixed(0)}</p>
                </div>
                <button onClick={() => remove(i.id)} className="text-sm underline">Quitar</button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <span className="text-lg">Total: <strong>${total.toFixed(0)}</strong></span>
            <div className="flex gap-2">
              <button onClick={clear} className="px-4 py-2 rounded-full border">Vaciar</button>
              <a href={wa} target="_blank" className="px-4 py-2 rounded-full bg-black text-white">Enviar pedido por WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
