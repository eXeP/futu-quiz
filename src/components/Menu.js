import React from 'react'
import { connect } from 'react-redux'
import { newGame } from './../reducers/gameReducer'

const Menu = (props) => {
  return (
  	<div className="text-center mt-4">
  		<h1 className="p-4">You have 20 seconds to answer a question.</h1>
    	<button onClick={props.newGame} className="mt-4 text-4xl bg-grey-darkest text-white pt-1 pb-1 pl-8 pr-8 border-grey-darkest hover:border-white border-2">Play</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  	state: state
  }
}

export default connect(
  mapStateToProps,
  { newGame }
)(Menu)