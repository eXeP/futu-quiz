import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js'
import Game from './components/Game.js'
import Menu from './components/Menu.js'
import { initializeQuestions } from './reducers/questionReducer'
import { connect } from 'react-redux'

class App extends Component {
  componentWillMount() {
    this.props.initializeQuestions()
  }
  render() {
    return (
      <div>
        <Title/>
        <Menu/>
        <Game/>
      </div>
    );
  }
}

export default connect(
  null,
  { initializeQuestions }
)(App)
