'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Pokemon } from '@/interfaces/pokemon'

type Props = {
  pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <div className="rounded-xl shadow-md p-4 text-center hover:scale-105 transition cursor-default">
      <Image
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        width={96}
        height={96}
        className="w-24 h-24 mx-auto object-contain"
      />
      <h2 className="capitalize antialiased mt-2 text-neutral-200 hover:text-white">
        {pokemon.name}
      </h2>
      <Link
        href={`/pokemon/${pokemon.id}`}
        className="mt-2 inline-block text-neutral-400 hover:text-neutral-100 underline underline-offset-2 transition-all text-sm"
      >
        <small>Ver detalles</small>
      </Link>
    </div>
  )
}
