import { GenreWithId } from './genre'

export interface Film {
  imdb_id: string
  title: string
}

export type FilmFull = Film & {
  year: number
  popularity: number
  description: string
  content_rating: string
  movie_length: number
  rating: number
  created_at: string
  trailer: string
  image_url: string
  release: string
  plot: string
  banner: string
  type: 'movie' | string
  gen: GenreWithId[]
  keywords: {
    id: number
    keyword: string
  }[]
}
