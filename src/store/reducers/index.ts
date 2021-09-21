import { combineReducers } from 'redux'
import { genresReducer } from './genres'

const rootReducer = combineReducers({
  genres: genresReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
