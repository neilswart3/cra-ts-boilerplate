import { combineReducers } from 'redux'
import { testReducer } from './test'

const rootReducer = combineReducers({
  test: testReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
