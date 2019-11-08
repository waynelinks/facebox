import { API_REQUEST, API_SUCCESS, API_ERROR, USER } from '../constants'

// export const apiRequest = ({ body, method, url, entity }) => ({
//   type: API_REQUEST,
//   payload: body,
//   meta: { method, url, entity }
// })

export const apiRequest = (payload, method, url, entity) => ({
  type: `${USER} ${API_REQUEST}`,
  payload: { data: payload, meta: { method, url, entity } }
})

export const apiSuccess = ({ response, entity }) => ({
  type: `${USER} ${API_SUCCESS}`,
  payload: response,
  meta: { entity }
})

export const apiERROR = ({ error, entity }) => ({
  type: `${USER} ${API_ERROR}`,
  payload: error,
  meta: { entity }
})
