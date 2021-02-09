import React from 'react';

const GiveUp = (props) => {
  if(props.success) {
    return (
      <div data-test="component-give-up"/>
    )
  } else {
    return (
      <div data-test="component-give-up">
        <button data-test="give-up-button">Give Up</button>
      </div>
    )
  }
}

export default GiveUp;