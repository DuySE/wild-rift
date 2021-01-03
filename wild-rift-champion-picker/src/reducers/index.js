import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import heroes from './heroes'
import heroSlots from './heroSlots'

export default function rootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    heroes,
    heroSlots,
  })
}
