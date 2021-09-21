import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const options: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://data-imdb1.p.rapidapi.com/genres/',
  headers: {
    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
    'x-rapidapi-key': 'ba2618e220mshc1e7f7aa2c0eceap1a123ejsncda8e0ca61b5',
  },
}

const getGenres = (): Promise<AxiosResponse<any>> => {
  return axios.request(options)
}

export { getGenres }
