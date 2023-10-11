import React from "react";

const validation = (props) => {

  let validationMessage = 'The text is too short!';

  if (props.inputLength > 5)
  {
    validationMessage = 'Text long enough.';
  }

  return (
      <div>
        <p>Input length is {props.inputLength}</p>
        <p>{validationMessage}</p>
      </div>
  )
}

export default validation;