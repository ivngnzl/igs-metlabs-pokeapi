import { getFirstNinePokemon } from '@/lib/pokeapi'
import PokemonCard from '@/components/PokemonCard'
import { Pokemon } from '@/interfaces/pokemon'
import Link from 'next/link'
import { SparklesIcon } from 'lucide-react'

export default async function Home() {
  const pokemons = (await getFirstNinePokemon()) as Pokemon[]

  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
      <Link
        className="flex items-center gap-x-4 mx-4 mb-10 px-6 py-4 bg-gray-600/50 text-white rounded hover:bg-gray-700/70 transition"
        href="/random"
      >
        <SparklesIcon /> Randomiza 5!
      </Link>
    </>
  )
}
