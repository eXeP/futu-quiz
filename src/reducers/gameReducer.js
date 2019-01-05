const gameReducer = (state = {state:'NOT_ACTIVE', currentQuestion:0}, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'NEW_GAME':
    return action.data
  default:
    return state
  }
}

export const newGame = (lastQuestion) => {
  console.log('new game called')
  let newState = {state:'ACTIVE', currentQuestion:lastQuestion+1}
  return {
    type: 'NEW_GAME',
    data: newState
  }
}

export default gameReducer