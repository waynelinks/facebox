import { combineReducers } from 'redux'
import users from './users'
import notifications from './notifications'
import image from './image'

export default combineReducers({
  users,
  notifications,
  image
})
