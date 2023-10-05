import './App.css';
import React, {useState} from "react";
import Person from "./Person/Person";

const App = props => {

    const [personsState, setPersonsState] = useState(
        {
            persons: [
                { name: "Nuwan", age: 30 },
                { name: "Ruwan", age: 31 },
                { name: "Saman", age: 27 }
            ]
        }
    );

    const [otherState, setOtherState] = useState("Some other value")

    console.log(personsState, otherState)

    const switchNameHandler = () => {
        // console.log("Was clicked!")
        // DO NOT DO THIS personsState.persons[0].name = 'Nuwan Samarasinghe'
        setPersonsState({
            persons: [
                { name: "Nuwan Samarasinghe", age: 30 },
                { name: "Ruwan", age: 31 },
                { name: "Saman", age: 28 }
            ]
        });
    };

    return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working...</p>
            <button onClick={switchNameHandler}>Switch Names</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person> {/*My Hobbies: Racing will work as children on Person.js*/}
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    };

    export default App;
