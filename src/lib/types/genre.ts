export interface Genre {
  genre: string
}

export type GenreWithId = Genre & {
  id: number
}
