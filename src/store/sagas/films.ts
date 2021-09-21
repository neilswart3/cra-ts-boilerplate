import { call, put, all, takeLatest } from 'redux-saga/effects'
import { getMoviesByGenre } from 'src/lib/api/getMoviesByGenre'
import { fetchFilmsFailure, fetchFilmsSuccess } from '../actions/films'
import { filmsTypes } from '../actions/films/types'
import { getErrorMessage, ResponseGenerator } from './helpers'

function* fetchFilms({ payload }: any) {
  try {
    const res: ResponseGenerator = yield call(getMoviesByGenre, payload.args)

    console.log('res:', res)

    yield put(
      fetchFilmsSuccess({
        data: res.data.Data,
      })
    )
  } catch (error) {
    const message = getErrorMessage(error as Error)
    yield put(fetchFilmsFailure({ error: message }))
  }
}

export function* filmsWatcher() {
  yield all([takeLatest(filmsTypes.FETCH_FILMS_REQUEST, fetchFilms)])
}
