import { SIGNUP_USER, SET_USER, SIGNIN_USER } from '../constants'

export const signupUser = payload => ({
  type: SIGNUP_USER,
  payload
})

export const signinUser = payload => (dispatch, getState, api) => {
  dispatch({
    type: SIGNIN_USER,
    payload,
    api
  })
}

export const setUser = payload => ({
  type: SET_USER,
  payload
})
