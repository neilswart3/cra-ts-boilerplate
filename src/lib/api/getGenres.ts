import axios, { AxiosResponse } from 'axios'

const getGenres = (): Promise<AxiosResponse<any>> => {
  return axios.get('/genres/')
}

export { getGenres }
