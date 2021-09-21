import { combineReducers } from 'redux'
import { filmsReducer } from './films'
import { genresReducer } from './genres'

const rootReducer = combineReducers({
  genres: genresReducer,
  films: filmsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export { rootReducer }
