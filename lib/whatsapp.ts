import { WHATSAPP_PHONE } from './config'
import type { Product } from '@/data/products'

type Item = (Product & { qty: number })

// La firma de la función ahora acepta subtotal, discountAmount y total.
export function buildWhatsAppMessage(items: Item[], subtotal: number, discountAmount: number, total: number) {
  const discountRate = 0.15

  const lines = [
    `*Pedido ${new Date().toLocaleDateString('es-AR')}*`,
    '',
    // Muestra el subtotal de cada producto ya con el descuento aplicado.
    ...items.map(i => {
      const discountedPrice = i.price * (1 - discountRate)
      return `• ${i.title} x${i.qty} — $${(discountedPrice * i.qty).toFixed(0)}`
    }),
    '',
    '-------------------',
    // Agrega el resumen detallado al final del mensaje.
    `Subtotal: $${subtotal.toFixed(0)}`,
    `Descuento (15%): -$${discountAmount.toFixed(0)}`,
    `*Total a pagar:* $${total.toFixed(0)}`,
  ]
  return lines.join('\n')
}

export function getWhatsAppLink(text: string) {
  const encoded = encodeURIComponent(text)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`
}