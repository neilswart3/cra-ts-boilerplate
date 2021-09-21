import {
  FilmsState,
  FilmsActions,
  filmsTypes,
} from 'src/store/actions/films/types'

const initialState: FilmsState = {
  data: [],
  error: null,
  loading: false,
}

const filmsReducer = (
  state = initialState,
  action: FilmsActions
): FilmsState => {
  switch (action.type) {
    case filmsTypes.FETCH_FILMS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case filmsTypes.FETCH_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      }
    case filmsTypes.FETCH_FILMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}

export { filmsReducer }
