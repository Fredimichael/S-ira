'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { buildWhatsAppMessage, getWhatsAppLink } from '@/lib/whatsapp'

export default function CartPage() {
  // 1. OBTÉN LOS NUEVOS VALORES DEL HOOK
  // Asegúrate de que esta línea incluya subtotal y discountAmount
  const { items, remove, clear, subtotal, discountAmount, total } = useCart()

  // 2. PASA LOS NUEVOS VALORES A LA FUNCIÓN
  // Ahora la función recibe todos los argumentos que necesita
  const message = buildWhatsAppMessage(items, subtotal, discountAmount, total)
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
        <div className="grid lg:grid-cols-3 gap-12">
          <ul className="divide-y lg:col-span-2">
            {items.map(i => (
              <li key={i.id} className="py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-neutral-100">
                      <Image src={i.images?.[0] || "/placeholder/Anillo_Dual.jpg"} alt={i.title} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{i.title} <span className="opacity-60">x{i.qty}</span></p>
                    <p className="text-sm font-bold">${(i.price * 0.85).toFixed(0)} <span className="line-through opacity-60 font-normal">${i.price.toFixed(0)}</span></p>
                    <p className="text-sm opacity-70">Subtotal: ${(i.price * 0.85 * i.qty).toFixed(0)}</p>
                  </div>
                </div>
                <button onClick={() => remove(i.id)} className="text-sm underline self-start sm:self-center">Quitar</button>
              </li>
            ))}
          </ul>

          <div className="bg-neutral-50 p-6 rounded-lg self-start">
            <h2 className="text-xl font-bold mb-4">Resumen del Pedido</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="opacity-80">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span className="opacity-80">Descuento (15%)</span>
                <span className="font-medium">-${discountAmount.toFixed(0)}</span>
              </div>
              <div className="border-t pt-3 mt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(0)}</span>
              </div>
            </div>
            <div className="mt-6 space-y-2">
               <a href={wa} target="_blank" className="w-full block text-center px-4 py-3 rounded-full bg-black text-white font-semibold hover:opacity-90">Enviar pedido por WhatsApp</a>
               <button onClick={clear} className="w-full px-4 py-2 rounded-full border hover:bg-neutral-100">Vaciar carrito</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}