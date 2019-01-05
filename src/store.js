import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import questionReducer from './reducers/questionReducer'
import gameReducer from './reducers/gameReducer'

const reducer = combineReducers({
  questions: questionReducer,
  state: gameReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store