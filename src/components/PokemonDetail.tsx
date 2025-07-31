import { Pokemon } from '@/interfaces/pokemon'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  pokemon: Pokemon
}

export default function PokemonDetail({ pokemon }: Props) {
  return (
    <div className=" rounded-xl shadow-md p-6 max-w-xl mx-auto">
      <Link href="/" className="mb-4 block underline text-center">
        Volver
      </Link>
      <Image
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
        className="mx-auto mb-4 w-48 h-48 object-contain rounded-full shadow-lg"
      />
      <h2 className="text-2xl font-bold text-center capitalize mb-4">
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
            <td className="py-2">{pokemon.height}</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Peso</td>
            <td className="py-2">{pokemon.weight}</td>
          </tr>
          <tr>
            <td className="py-2">Experiencia Base</td>
            <td className="py-2">{pokemon.base_experience}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
