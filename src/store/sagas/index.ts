import { all, fork } from 'redux-saga/effects'
import { testWatcher } from './test'

export function* rootSaga() {
  yield all([fork(testWatcher)])
}
