import { Pokemon } from "@/interfaces/pokemon";

export async function getPokemon(id: number): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Error fetching Pokémon");
  const data: Pokemon = await res.json();

  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    base_experience: data.base_experience,
    sprites: {
      other: {
        dream_world: {
          front_default: data.sprites.other.dream_world.front_default || "",
        },
      },
    },
  };
}


export async function getFirstNinePokemon() {
  const requests = Array.from({ length: 9 }, (_, i) => getPokemon(i + 1));
  return Promise.all(requests);
}
