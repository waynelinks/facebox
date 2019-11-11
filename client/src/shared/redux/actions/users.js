import { SIGNUP_USER, SET_USER, SIGNIN_USER, SIGNOUT_USER } from '../constants'

export const signupUser = payload => (dispatch, getState, api) => {
  dispatch({
    type: SIGNUP_USER,
    payload,
    api
  })
}

export const signinUser = payload => (dispatch, getState, api) => {
  dispatch({
    type: SIGNIN_USER,
    payload,
    api
  })
}

export const signoutUser = payload => ({
  type: SIGNOUT_USER,
  payload
})

export const setUser = payload => ({
  type: SET_USER,
  payload
})
