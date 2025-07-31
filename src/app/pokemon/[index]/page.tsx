export default async function PokemonByIndexPage({
  params,
}: {
  params: Promise<{ index: string }>
}) {
  const { index } = await params

  return (
    <div>
      <h1>{index}</h1>
    </div>
  )
}
