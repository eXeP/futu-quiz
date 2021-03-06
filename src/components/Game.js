import React from 'react'
import ChoiceButton from './ChoiceButton.js'
import { connect } from 'react-redux'
import { submitAnswer } from './../reducers/gameReducer'
import './Game.css'

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class Game extends React.Component {
  submitAnswer = async (event) => {
  	clearTimeout(this.timerId)
    event.preventDefault()
    const content = event.target.answer.value
    event.target.answer.value = ''
    this.props.submitAnswer(content)
  }

  multipleChoiceClicked = (answer) => {
  	return () => {
  	  clearTimeout(this.timerId)
  	  this.props.submitAnswer(answer)
  	}
  }

  timeOver = () => {
  	this.props.submitAnswer()
  }

  timer = () => setTimeout(this.timeOver, 20000)

  render(){
  	if (this.props.gameActive) {
  		this.timerId = this.timer()
  	}
  	const multipleChoice = this.props.question.choices
  	if (multipleChoice) {
  		return (
	  	<div className="flex flex-col items-center mt-4 p-4">
	  		<div className="sm:max-w-md text-center m-4">
	  			<p className="text-3xl">{this.props.question.question}</p>
	  		</div>
	  		<div className="max-w-xl flex flex-wrap">
	  			{shuffle(this.props.question.choices).map(choice => 
	  				<ChoiceButton onClick={this.multipleChoiceClicked(choice)} key={choice} text={choice}/>)}
	  		</div>
	    </div>)
  	}
  	else {
  		return (
	  	<div className="flex flex-col items-center mt-4">
	  		<div className="sm:max-w-md text-center m-4">
	  			<p className="text-3xl">{this.props.question.question}</p>
	  		</div>
		  	<form onSubmit={this.submitAnswer}>
			  	<div className="flex flex-col items-center">
			  		<div>
			        	<input className="p-4 text-2xl" name="answer" />
			        </div>
			        <div className="mt-4">
			        	<button className="text-3xl bg-grey-darkest text-white pt-1 pb-1 pl-8 pr-8 border-grey-darkest hover:border-white border-2">Submit</button>
		      		</div>
		      	</div>
	      	</form>
	    </div>)
	}
  }
}

const mapStateToProps = (state) => {
  return {
  	question: state.questions[state.currentQuestion],
    gameActive: state.state === 'ACTIVE'
  }
}

export default connect(
  mapStateToProps,
  { submitAnswer }
)(Game)