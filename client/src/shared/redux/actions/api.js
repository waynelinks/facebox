import { API_REQUEST, API_SUCCESS, API_ERROR } from '../constants'

export const apiRequest = (payload, api, method, url, entity) => ({
  type: API_REQUEST,
  payload,
  properties: { api, method, url, entity }
})

export const apiSuccess = (response, entity) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: { response, entity }
})

export const apiError = (error, entity) => ({
  type: `${entity} ${API_ERROR}`,
  payload: { error: error.message, entity }
})
