import Aurora from '@/components/ui/Aurora'
import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: 'Metlabs x Iván Gonzalez x PokeAPI',
  description: 'Prueba técnica para Metlabs con NextJS + PokeAPI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <div className="fixed inset-0 z-[-10] ">
          <Aurora
            colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
            blend={0.5}
            amplitude={1.0}
            speed={0.3}
          />
        </div>

        <nav className="flex gap-x-4 items-center justify-center p-4">
          <Image
            src="/metlabs-logo.webp"
            alt="Metlabs Logo"
            width={180}
            height={38}
            className="w-32 h-auto object-contain"
            priority
          />
          x
          <Image
            src="/pokeapi-logo.webp"
            alt="PokeAPI Logo"
            width={180}
            height={38}
            className="w-32 h-auto object-contain"
            priority
          />
        </nav>

        <main className="flex flex-col items-center justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
