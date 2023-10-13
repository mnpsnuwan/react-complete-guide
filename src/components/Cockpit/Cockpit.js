import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {

    const styleClasses = [];

    let buttonClass = '';

    if (props.showPersons)
    {
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        styleClasses.push(classes.red); // styleClasses = ['red']
    }
    if (props.persons.length <= 1) {
        styleClasses.push(classes.bold); // styleClasses = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={styleClasses.join(' ')}>This is really working...</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;