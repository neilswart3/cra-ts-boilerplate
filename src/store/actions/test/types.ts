import { Test } from 'src/lib/types'

export enum testTypes {
  FETCH_TEST_REQUEST = 'FETCH_TEST_REQUEST',
  FETCH_TEST_SUCCESS = 'FETCH_TEST_SUCCESS',
  FETCH_TEST_FAILURE = 'FETCH_TEST_FAILURE',
}

export interface TestState {
  tests: Test[]
  error: null | string
  loading: boolean
}

export interface FetchTestSuccessPayload {
  tests: Test[]
}

export interface FetchTestFailurePayload {
  error: string
}

export interface FetchTestRequest {
  type: typeof testTypes.FETCH_TEST_REQUEST
}

export type FetchTestSuccess = {
  type: typeof testTypes.FETCH_TEST_SUCCESS
  payload: FetchTestSuccessPayload
}

export type FetchTestFailure = {
  type: typeof testTypes.FETCH_TEST_FAILURE
  payload: FetchTestFailurePayload
}

export type TestActions = FetchTestRequest | FetchTestSuccess | FetchTestFailure
