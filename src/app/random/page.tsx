import PokemonCard from '@/components/PokemonCard'
import { Backbutton } from '@/components/ui/Backbutton'
import VowelTable from '@/components/VowelTable'
import { getRandomFivePokemon } from '@/lib/pokeapi'
import { countVowels } from '@/lib/utils'

export default async function RandomPage() {
  const pokemons = await getRandomFivePokemon()
  const vowelCounts = countVowels(pokemons.map((p) => p.name))

  return (
    <div className="p-6 mx-auto">
      <Backbutton />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
          {pokemons.map((pokemon) => (
            <div key={pokemon.id} className="relative">
              <PokemonCard pokemon={pokemon} />
              <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                #{pokemon.id}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <VowelTable counts={vowelCounts} />
      </div>
    </div>
  )
}
