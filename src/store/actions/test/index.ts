import {
  FetchTestFailure,
  FetchTestFailurePayload,
  FetchTestRequest,
  FetchTestSuccess,
  FetchTestSuccessPayload,
  testTypes,
} from './types'

export const fetchTestRequest = (): FetchTestRequest => ({
  type: testTypes.FETCH_TEST_REQUEST,
})

export const fetchTestSuccess = (
  payload: FetchTestSuccessPayload
): FetchTestSuccess => ({
  type: testTypes.FETCH_TEST_SUCCESS,
  payload,
})

export const fetchTestFailure = (
  payload: FetchTestFailurePayload
): FetchTestFailure => ({
  type: testTypes.FETCH_TEST_FAILURE,
  payload,
})
