import React from "react";

const person = (props) => {
  return (
      <div>
        <p>I'm {props.name} and I'm {props.age} years old!</p>
        <p onClick={props.click}>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}/>
      </div>
  )
};

export default person;