import { API_REQUEST, CLARIFAI_API_REQUEST, API_SUCCESS, API_ERROR } from '../constants'

export const apiRequest = (
  { name, email, password },
  api,
  method,
  url,
  entity
) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: { name, email, password, api, method, url, entity }
})

export const clarifaiApiRequest = (
  { image_input },
  api,
  method,
  url,
  entity
) => ({
  type: `${entity} ${CLARIFAI_API_REQUEST}`,
  payload: { image_input, api, method, url, entity }
})

export const apiSuccess = (response, entity) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: { response, entity }
})

export const apiError = (error, entity) => ({
  type: `${entity} ${API_ERROR}`,
  payload: { error: error.message, entity }
})
