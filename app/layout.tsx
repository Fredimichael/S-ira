import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { Toaster } from 'react-hot-toast'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Sáira — Joyas en acero',
  description: 'Ecommerce minimalista de joyas en acero (Sáira).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans`}>
        <CartProvider>
          <Navbar />
          <main className="container py-8 min-h-[70vh]">{children}</main>
          <Footer />
        </CartProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
