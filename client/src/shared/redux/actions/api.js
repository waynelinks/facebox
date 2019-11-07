import { API_REQUEST, API_SUCCESS, API_ERROR } from '../constants'

export const apiRequest = ({ body, method, url, entity }) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, entity }
})

export const apiSuccess = ({ response, entity }) => ({
  type: API_SUCCESS,
  payload: response,
  meta: { entity }
})

export const apiERROR = ({ error, entity }) => ({
  type: API_ERROR,
  payload: error,
  meta: { entity }
})
