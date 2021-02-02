import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './input';
import NewWord from './NewWord';
import { getSecretWord, resetGame } from './actions';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <NewWord resetAction={this.props.resetGame} success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>

    )
  }
}

const actions = {
  getSecretWord,
  resetGame,
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };

}

export default connect(mapStateToProps, actions)(UnconnectedApp);
