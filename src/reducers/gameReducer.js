import questionService from '../services/questions'

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const gameReducer = (state = {questions:[], state:'NOT_ACTIVE', currentQuestion:-1, answer:'', correctAnswer:''}, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'NEW_QUESTION': {
    let newState = JSON.parse(JSON.stringify(state))
    newState.state = action.data
    if (state.currentQuestion === -1 || state.currentQuestion >= state.questions.length-1) {
      shuffle(newState.questions)
      newState['currentQuestion'] = 0
    }
    else {
      newState['currentQuestion'] = state['currentQuestion']+1
    }
    newState.correctAnswer = ''
    return newState
  }
  case 'INIT_QUESTIONS': {
    let newState = state
    newState.questions = action.data
    return newState
  }
  case 'SUBMIT_ANSWER': {
    let newState = JSON.parse(JSON.stringify(state))
    newState.state = action.data.state
    newState.answer = action.data.answer
    return newState
  }
  case 'GOT_ANSWER':
    let newState = JSON.parse(JSON.stringify(state))
    newState.correctAnswer = action.data.answer
    return newState
  default:
    return state
  }
}

export const newGame = () => {
  console.log('new game called')
  let newState = 'ACTIVE'
  return {
    type: 'NEW_QUESTION',
    data: newState
  }
}

export const submitAnswer = (answer='') => {
  console.log('game ended called', answer)
  let newState = {state:'PAUSED', answer:answer}
  return {
    type: 'SUBMIT_ANSWER',
    data: newState
  }
}

export const initializeQuestions = () => {
  return async (dispatch) => {
    const questions = await questionService.getAll()
    dispatch({
      type: 'INIT_QUESTIONS',
      data: questions
    })
  }
}

export const fetchAnswer = (id) => {
  return async (dispatch) => {
    const answer = await questionService.getAnswer(id)
    dispatch({
      type: 'GOT_ANSWER',
      data: answer
    })
  }
}

export default gameReducer