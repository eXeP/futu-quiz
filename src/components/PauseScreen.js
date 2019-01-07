import React from 'react'
import { connect } from 'react-redux'
import { newGame, fetchAnswer } from './../reducers/gameReducer'

class PauseScreen extends React.Component {
  componentWillMount() {
    this.props.fetchAnswer(this.props.questionId)
  }

  render() {
    return (
      <div className="text-center mt-4">
        {this.props.answer.length > 0 && <h1 className="p-4">Your answer was:</h1>}
        {this.props.answer.length > 0 && <h1 className="p-4">{this.props.answer}</h1>}
        <h1 className="p-4">The correct answer is:</h1>
        <h1 className="p-4">{this.props.correctAnswer}</h1>
        {this.props.correctAnswer.length !== 0 && <h1 className="p-4">{this.props.correctAnswer === this.props.answer ? 'Good work!' : 'Better luck next time!'}</h1>}
        <button onClick={this.props.newGame} className="mt-4 text-3xl bg-grey-darkest text-white pt-1 pb-1 pl-8 pr-8 border-grey-darkest hover:border-white border-2">{this.props.allAsked ? 'Play again': 'Next Question'}</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    allAsked: state.currentQuestion === state.questions.length-1,
  	answer: state.answer,
    questionId: state.questions[state.currentQuestion].id,
    correctAnswer: state.correctAnswer
  }
}

export default connect(
  mapStateToProps,
  { newGame, fetchAnswer }
)(PauseScreen)