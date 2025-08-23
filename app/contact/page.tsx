import { getWhatsAppLink } from '@/lib/whatsapp'
import Image from 'next/image'

export default function ContactPage() {
  const wa = getWhatsAppLink('Hola, quiero consultar por joyas Sáira')
  return (
    <section className="relative min-h-[60vh] rounded-3xl shadow-soft overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Imagen de fondo */}
      <Image      
        src="/CardContact.png" 
        alt="Contacto" 
        fill
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay opcional (para dar contraste) */}
      <div className="absolute inset-0 bg-black/0" />

      {/* Contenido delante */}
      <div className="relative z-10 p-10 md:p-16 text-white">
        <h1 className="font-heading text-4xl mb-4">Contacto</h1>
        <p className="opacity-80 mb-8 max-w-xl mx-auto">
          Hablemos por WhatsApp o seguinos en Instagram para ver lanzamientos y novedades.
        </p>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          <a href={wa} target="_blank" className="px-6 py-3 rounded-full bg-white text-black text-lg">WhatsApp</a>
          <a href="https://instagram.com/tuusuario" target="_blank" className="px-6 py-3 rounded-full bg-white text-black text-lg">Instagram</a>
        </div>
      </div>
    </section>
  )
}
