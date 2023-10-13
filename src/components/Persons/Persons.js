import React from "react";
import Person from "./Person/Person";

// Next gen feature '=> ()' instead of '=> { return () }' `Here we can write without '()' also`
const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return (
            <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}/>
        );
    });
};

export default persons;