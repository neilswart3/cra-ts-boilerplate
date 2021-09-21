import { Film } from 'src/lib/types'

export enum filmsTypes {
  FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST',
  FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS',
  FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE',
}

export interface FilmsState {
  data: Film[]
  error: null | string
  loading: boolean
}

export interface FetchFilmsSuccessPayload {
  data: Film[]
}

export interface FetchFilmsFailurePayload {
  error: string
}

export interface FetchFilmsRequest {
  type: typeof filmsTypes.FETCH_FILMS_REQUEST
  payload: any
}

export type FetchFilmsSuccess = {
  type: typeof filmsTypes.FETCH_FILMS_SUCCESS
  payload: FetchFilmsSuccessPayload
}

export type FetchFilmsFailure = {
  type: typeof filmsTypes.FETCH_FILMS_FAILURE
  payload: FetchFilmsFailurePayload
}

export type FilmsActions =
  | FetchFilmsRequest
  | FetchFilmsSuccess
  | FetchFilmsFailure
