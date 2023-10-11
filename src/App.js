import './App.css';
import React, {Component} from "react";
import Person from "./Person/Person";

class App extends Component{

    state = {
        persons: [
            { name: "Nuwan", age: 30 },
            { name: "Ruwan", age: 31 },
            { name: "Saman", age: 27 }
        ],
        otherState: "Some other value",
        showPersons: false
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Nuwan', age: 30 },
                { name: event.target.value, age: 31 },
                { name: "Saman", age: 27 }
            ]

        })

    }

    deletePersonsHandler = (personIndex) => {

        const persons = this.state.persons;
        persons.slice(personIndex, 1)
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div >
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonsHandler(index)}
                            name={person.name}
                            age={person.age}/>
                    })}
                </div>
            );
        }

      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>This is really working...</p>
              {/*<button onClick={this.switchNameHandler.bind(this, "Nuwan Samarasinghe")}>Switch Names</button>*/}
              <button
                  style={style}
                  onClick={this.togglePersonsHandler}>Toggle Persons</button> {/*This is very convenient syntax but it can be inefficient*/}
              {persons}
          </div>
      );
      //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    }
}

export default App;
