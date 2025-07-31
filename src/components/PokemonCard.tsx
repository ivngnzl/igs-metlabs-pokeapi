'use client'

import { Pokemon } from '@/interfaces/pokemon'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <div className="rounded-xl shadow-md p-4 text-center hover:scale-105 transition cursor-default border border-white/10 hover:border-white/30">
      <Image
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        width={96}
        height={96}
        className="w-24 h-24 mx-auto object-contain"
        priority
      />
      <h2 className="capitalize antialiased mt-2 text-neutral-200 hover:text-white">
        {pokemon.name}
      </h2>
      <Link
        href={`/pokemon/${pokemon.id}`}
        className="flex justify-center items-center gap-x-2 mt-2 text-neutral-400 hover:text-neutral-100 hover:underline underline-offset-2 transition-all text-sm"
      >
        <Eye size={18} className="-translate-y-0.5" />
        <small>Ver detalles</small>
      </Link>
    </div>
  )
}
