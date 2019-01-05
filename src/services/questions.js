import axios from 'axios'

const url = 'https://futu-quiz-api.now.sh/'

const getAll = async () => {
  const response = await axios.get(url+'questions')
  return response.data
}

const getAnswer = async (id) => {
  const response = await axios.get(url+'answer/'+id.toString())
  return response.data
}

export default {
  getAll, getAnswer
}