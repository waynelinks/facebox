import { PROCESS_IMAGE, SET_ENTRIES, DETECT_FACE } from '../constants'

export const processImage = payload => (dispatch, getState, api) => {
  dispatch({
    type: PROCESS_IMAGE,
    payload,
    api
  })
}

export const detectFace = payload => ({
  type: DETECT_FACE,
  payload
})

export const setEntries = payload => ({
  type: SET_ENTRIES,
  payload
})
