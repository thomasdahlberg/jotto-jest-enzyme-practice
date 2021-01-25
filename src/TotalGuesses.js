import React from 'react';
import PropTypes from 'prop-types';

const TotalGuesses = (props) => {
  return(
    <p data-test="component-total-guesses">
      Total Guesses: <span data-test="total-guesses-sum">{props.guessedWords.length}</span>
    </p>
  )
}

TotalGuesses.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    }).isRequired
  )
};

export default TotalGuesses;
