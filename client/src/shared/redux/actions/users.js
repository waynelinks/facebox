import { SIGNUP_USER, SET_USER, SIGNIN_USER } from '../constants'

export const signupUser = ({ query }) => ({
  type: SIGNUP_USER,
  payload: query
})

export const signinUser = ({ query }) => ({
  type: SIGNIN_USER,
  payload: query
})

export const setUser = user => ({
  type: SET_USER,
  payload: user
})
