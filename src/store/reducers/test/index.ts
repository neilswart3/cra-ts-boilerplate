import { TestActions, TestState, testTypes } from 'src/store/actions/test/types'

const initialState: TestState = {
  tests: [],
  error: null,
  loading: false,
}

const testReducer = (state = initialState, action: TestActions): TestState => {
  switch (action.type) {
    case testTypes.FETCH_TEST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case testTypes.FETCH_TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tests: action.payload.tests,
      }
    case testTypes.FETCH_TEST_FAILURE:
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

export { testReducer }
