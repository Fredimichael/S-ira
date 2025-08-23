'use client'
import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { items } = useCart()
  const count = items.reduce((s, i) => s + i.qty, 0)

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image        
            src="/Sairapng.png" 
            alt="Logo Sáira" 
            width={120}     // 👈 ajustá según el tamaño real de tu logo
            height={40}
            className="h-auto w-auto"
          />
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/catalog" className="hover:opacity-70">Catálogo</Link>
          <Link href="/contact" className="hover:opacity-70">Contacto</Link>
          <Link href="/cart" className="relative hover:opacity-70">
            Carrito
            <span className="ml-2 inline-flex items-center justify-center text-xs px-2 py-0.5 rounded-full bg-black text-white">{count}</span>
          </Link>
        </nav>

        {/* Botón menú móvil */}
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menú">
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Menú móvil */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
