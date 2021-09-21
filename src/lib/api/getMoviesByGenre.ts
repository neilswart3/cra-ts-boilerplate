import axios, { AxiosResponse } from 'axios'

const getMoviesByGenre = (genre: string): Promise<AxiosResponse<any>> => {
  return axios.get(`/movie/byGen/${genre}/`)
}

export { getMoviesByGenre }
