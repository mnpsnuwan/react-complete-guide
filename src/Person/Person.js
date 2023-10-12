import React from "react";
// import styled from "styled-components";

import classes from './Person.css';
import {error} from "autoprefixer/lib/utils";

// Using styled-components pkg return valid react component
/*const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
      width: 450px;
    }
`;*/

const person = (props) => {
    /*const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }*/

    // To check error boundaries
    const rand = Math.random();

    if(rand > 0.7)
    {
        throw new error('Something went wrong')
    }

  return (
      <div className={classes.Person}>
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
        <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}/>
      </div>
  )
};

export default person;