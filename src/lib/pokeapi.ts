export async function getPokemon(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error("Error fetching Pokémon");
  return res.json();
}

export async function getFirstNinePokemon() {
  const requests = Array.from({ length: 9 }, (_, i) => getPokemon(i + 1));
  return Promise.all(requests);
}
