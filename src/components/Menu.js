import React from 'react'
import { connect } from 'react-redux'
import { newGame } from './../reducers/gameReducer'

const Menu = (props) => {
  return (
  	<div className="text-center mt-4">
    	<button onClick={props.newGame} className="text-3xl bg-grey-darkest text-white pt-1 pb-1 pl-8 pr-8 border-solid border-white border-2">Play</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    visible: state.state.state === 'NON_ACTIVE'
  }
}

export default connect(
  mapStateToProps,
  { newGame }
)(Menu)