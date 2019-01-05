import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js'
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
      </div>
    );
  }
}

export default connect(
  null,
  { initializeQuestions }
)(App)
