import { getFirstNinePokemon } from '@/lib/pokeapi'
import PokemonCard from '@/components/PokemonCard'
import { Pokemon } from '@/interfaces/pokemon'

export default async function Home() {
  const pokemons = (await getFirstNinePokemon()) as Pokemon[]

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </main>
  )
}
