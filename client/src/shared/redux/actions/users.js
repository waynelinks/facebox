import { SIGNUP_USER, SET_USER, SIGNIN_USER } from '../constants'

export const signupUser = payload => ({
  type: SIGNUP_USER,
  payload
})

export const signinUser = payload => ({
  type: SIGNIN_USER,
  payload
})

export const setUser = user => ({
  type: SET_USER,
  payload: user
})
