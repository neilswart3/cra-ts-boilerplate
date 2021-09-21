import { all, fork } from 'redux-saga/effects'
import { genresWatcher } from './genres'

export function* rootSaga() {
  yield all([fork(genresWatcher)])
}
