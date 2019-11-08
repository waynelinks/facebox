import { SIGNUP_USER, SET_USER, SIGNIN_USER } from '../constants'

export const signupUser = payload => ({
  type: SIGNUP_USER,
  payload
})

// export const signinUser = (payload) => async (dispatch, getState, api) => {
//   console.log('Action: ', payload)
//   debugger

//   dispatch({
//     type: SIGNIN_USER,
//     payload
//   });
// };

export const signinUser = payload => ({
  type: SIGNIN_USER,
  payload
})

export const setUser = user => ({
  type: SET_USER,
  payload: user
})
