import React from "react";

import './UserOutput.css'

const userOutput = (props) => {
  return (
      <div className="UserOutput">
        <p>The username is {props.username}</p>
        <p>This is my other text using the username: {props.username}!</p>
      </div>
  );
}

export default userOutput;