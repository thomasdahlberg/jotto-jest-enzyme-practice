import React from 'react';
import PropTypes from 'prop-types';

const NewWord = (props) => {
  if(props.success) {
    return (
      <div data-test="component-new-word">
        <button data-test="new-word-button">New Word</button>
      </div>
    )
  } else {
    return (
      <div data-test="component-new-word" />
    )
  }
}

NewWord.propTypes = {
  success: PropTypes.bool.isRequired
}

export default NewWord;