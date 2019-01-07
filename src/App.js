import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js'
import Game from './components/Game.js'
import Menu from './components/Menu.js'
import PauseScreen from './components/PauseScreen.js'
import { initializeQuestions } from './reducers/gameReducer'
import { connect } from 'react-redux'

class App extends Component {
  componentWillMount() {
    this.props.initializeQuestions()
  }
  render() {
    return (
      <div>
        <Title/>
        {this.props.showMenu && <Menu/>}
        {this.props.showGame && <Game/>}
        {this.props.showPause && <PauseScreen/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.state === 'NOT_ACTIVE',
    showGame: state.state === 'ACTIVE',
    showPause: state.state === 'PAUSED'
  }
}

export default connect(
  mapStateToProps,
  { initializeQuestions }
)(App)
