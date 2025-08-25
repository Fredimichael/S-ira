'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BannerCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 4000)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div className="relative w-full h-[220px] md:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-soft">
      {images.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={src} alt={`Banner ${i+1}`} fill priority={i===0} className="object-cover" />
        </div>
      ))}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} aria-label={`Ir al banner ${i+1}`} onClick={() => setIndex(i)} className={`w-2.5 h-2.5 rounded-full ${i===index ? 'bg-black' : 'bg-white/70 border border-black/20'}`} />
        ))}
      </div>
    </div>
  )
}
