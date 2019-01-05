import questionService from '../services/questions'

const questionReducer = (state = [], action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
  case 'INIT_NOTES':
    return action.data
  default:
    return state
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

export default questionReducer