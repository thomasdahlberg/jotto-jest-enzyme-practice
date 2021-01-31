import React from 'react';
import PropTypes from 'prop-types';

const NewWord = (props) => {
  if(props.success) {
    return (
      <div data-test="component-new-word">
        <button 
          data-test="new-word-button"
          onClick={props.resetAction}>
            New Word
        </button>
      </div>
    );
  } else {
    return (
      <div data-test="component-new-word" />
    )
  }
}


NewWord.propTypes = {
  success: PropTypes.bool.isRequired,
  resetAction: PropTypes.func,
}

export default NewWord;