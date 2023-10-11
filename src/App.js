import React, {Component} from "react";
import styled from "styled-components";

import './App.css';
import Person from "./Person/Person";

// Using styled-components pkg return valid react component
const StyledButton = styled.button`
      background-color: green;
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
  
      &:hover {
        background-color: lightgreen;
        color: black
      }
`;

class App extends Component{

    state = {
        persons: [
            { id: "p001", name: "Nuwan", age: 30 },
            { id: "p002", name: "Ruwan", age: 31 },
            { id: "p003", name: "Saman", age: 27 }
        ],
        otherState: "Some other value",
        showPersons: false
    }

    nameChangeHandler = (event, personId) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personId
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]) //Old approach

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })

    }

    deletePersonsHandler = (personIndex) => {
        // const persons = this.state.persons;
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {

        // Need to install 'radium' pkg for enable css hover style in the inline css
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div >
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonsHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                    color: 'black'
            }
        }

        const styleClasses = [];

        if(this.state.persons.length <= 2)
        {
            styleClasses.push('red'); // styleClasses = ['red']
        }
        if(this.state.persons.length <= 1)
        {
            styleClasses.push('bold'); // styleClasses = ['red', 'bold']
        }

      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p className={styleClasses.join(' ')}>This is really working...</p>
              {/*<button onClick={this.switchNameHandler.bind(this, "Nuwan Samarasinghe")}>Switch Names</button>*/}
              <StyledButton
                  onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton> {/*This is very convenient syntax but it can be inefficient*/}
              {persons}
          </div>
      );
      //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    }
}

export default App;
