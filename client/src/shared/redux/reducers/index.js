import { combineReducers } from 'redux'
import users from './users'
import notifications from './notifications'
import clarifai from './clarifai'

export default combineReducers({
  users,
  notifications,
  clarifai
})
