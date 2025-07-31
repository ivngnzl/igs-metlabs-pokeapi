export type Pokemon = {
  id: number
  name: string
  height: number
  weight: number
  base_experience: number
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}
