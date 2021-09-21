import { takeLatest, call, put, all } from 'redux-saga/effects'
import { getGenres } from 'src/lib/api/getGenres'
import { fetchTestFailure, fetchTestSuccess } from '../actions/test'
import { testTypes } from '../actions/test/types'

function* fetchTest() {
  try {
    const res = yield call(getGenres)

    yield put(
      fetchTestSuccess({
        tests: res.data.Genres,
      })
    )
  } catch (error) {
    yield put(
      fetchTestFailure({
        error: error.message,
      })
    )
  }
}

export function* testWatcher() {
  yield all([takeLatest(testTypes.FETCH_TEST_REQUEST, fetchTest)])
}
