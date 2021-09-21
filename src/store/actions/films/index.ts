import {
  FetchFilmsFailure,
  FetchFilmsFailurePayload,
  FetchFilmsRequest,
  FetchFilmsSuccess,
  FetchFilmsSuccessPayload,
  filmsTypes,
} from './types'

export const fetchFilmsRequest = (payload: any): FetchFilmsRequest => ({
  type: filmsTypes.FETCH_FILMS_REQUEST,
  payload,
})

export const fetchFilmsSuccess = (
  payload: FetchFilmsSuccessPayload
): FetchFilmsSuccess => ({
  type: filmsTypes.FETCH_FILMS_SUCCESS,
  payload,
})

export const fetchFilmsFailure = (
  payload: FetchFilmsFailurePayload
): FetchFilmsFailure => ({
  type: filmsTypes.FETCH_FILMS_FAILURE,
  payload,
})
