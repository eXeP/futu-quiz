import React from 'react'
import { connect } from 'react-redux'

const ChoiceButton = (props) => {
  return (
    <button onClick={props.onClick} className="flex-auto m-1 text-3xl bg-grey-darkest text-white pt-1 pb-1 pl-8 pr-8 border-grey-darkest hover:border-white border-2">{props.text}</button>
  )
}

export default ChoiceButton