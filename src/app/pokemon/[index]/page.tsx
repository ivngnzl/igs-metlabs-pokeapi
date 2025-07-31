import { getPokemon } from '@/lib/pokeapi'
import PokemonDetail from '@/components/PokemonDetail'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  return Array.from({ length: 9 }, (_, i) => ({
    index: (i + 1).toString(),
  }))
}

export default async function PokemonPage({
  params,
}: {
  params: Promise<{ index: string }>
}) {
  const { index } = await params
  const id = parseInt(index)

  if (isNaN(id) || id < 1 || id > 9) {
    return (
      <>
        <div className="p-6 text-center  mt-6 text-balance">
          Solo aceptamos las 3 evoluciones de los 3 pokemons iniciales de la
          primera generación. Somos de la vieja escuela. ¿Algún problema? 😠
        </div>
        <Image
          src="/pikachu.webp"
          alt="Pikachu"
          width={200}
          height={200}
          className="mx-auto mt-4 rounded-2xl aspect-square object-cover shadow-lg"
          priority
        />
        <Link
          href={'/'}
          className="mt-4 block text-gray-100 underline text-center"
        >
          Volver
        </Link>
      </>
    )
  }

  try {
    const pokemon = await getPokemon(id)
    return (
      <main className="p-6">
        <PokemonDetail pokemon={pokemon} />
      </main>
    )
  } catch (error) {
    console.error('Error cargando Pokémon:', error)
    notFound()
  }
}
