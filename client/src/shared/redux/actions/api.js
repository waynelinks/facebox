import { API_REQUEST, API_SUCCESS, API_ERROR } from '../constants'

export const apiRequest = (payload, api, method, url, entity) => ({
  type: `${entity} ${API_REQUEST}`,
  payload,
  properties: { api, method, url, entity }
})

// export const apiRequest = (
//   { name, email, password },
//   api,
//   method,
//   url,
//   entity
// ) => ({
//   type: `${entity} ${API_REQUEST}`,
//   payload: { name, email, password, api, method, url, entity }
// })

export const imageApiRequest = (
  { image_input, id },
  api,
  method,
  url,
  entity
) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: {
    image_input: image_input.image_input,
    id,
    api,
    method,
    url,
    entity
  }
})

export const apiSuccess = (response, entity) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: { response, entity }
})

export const apiError = (error, entity) => ({
  type: `${entity} ${API_ERROR}`,
  payload: { error: error.message, entity }
})
