import { Pokemon } from '@/interfaces/pokemon'
import Image from 'next/image'
import { Backbutton } from './ui/Backbutton'

type Props = {
  pokemon: Pokemon
}

export default function PokemonDetail({ pokemon }: Props) {
  return (
    <div className=" rounded-xl p-6 max-w-xl mx-auto">
      <Backbutton />
      <Image
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
        className="mx-auto mb-4 w-48 h-48 object-contain"
        priority
      />
      <h2 className="text-2xl font-semibold text-center capitalize mb-4 antialiased tracking-widest">
        {pokemon.name}
      </h2>
      <table className="w-full text-left border-collapse mx-4">
        <thead>
          <tr className="border-b">
            <th className="py-2">Atributo</th>
            <th className="py-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Altura</td>
            <td className="py-2">{pokemon.height / 10} m</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Peso</td>
            <td className="py-2">{pokemon.weight / 10} kg</td>
          </tr>
          <tr>
            <td className="py-2">Exp. Base</td>
            <td className="py-2">{pokemon.base_experience} uds</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
