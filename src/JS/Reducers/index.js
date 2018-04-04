import { combineReducers } from 'redux'
import { getLoginData } from './login.js'

export default combineReducers({
    getLoginData: getLoginData
  });