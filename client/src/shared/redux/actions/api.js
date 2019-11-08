import { API_REQUEST, API_SUCCESS, API_ERROR } from '../constants'

export const apiRequest = ({ email, password }, method, url, entity) => ({
  type: `${entity} ${API_REQUEST}`,
  payload: { email, password, method, url, entity }
})

export const apiSuccess = (response, entity) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: { response, entity }
})

export const apiERROR = (error, entity) => ({
  type: `${entity} ${API_ERROR}`,
  error
})
