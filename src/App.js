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

    switchNameHandler = (newName) => {
        // console.log("Was clicked!")
        // DO NOT DO THIS this.state.persons[0].name = 'Nuwan Samarasinghe'
        this.setState({
            persons: [
                { name: newName, age: 30 },
                { name: "Ruwan", age: 31 },
                { name: "Saman", age: 28 }
            ]
        })
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
        }

      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>This is really working...</p>
              {/*<button onClick={this.switchNameHandler.bind(this, "Nuwan Samarasinghe")}>Switch Names</button>*/}
              <button
                  style={style}
                  onClick={this.togglePersonsHandler}>Switch Names</button> {/*This is very convenient syntax but it can be inefficient*/}
              { this.state.showPersons === true ?
                  <div >
                      <Person
                          name={this.state.persons[0].name}
                          age={this.state.persons[0].age}/>
                      <Person
                          name={this.state.persons[1].name}
                          age={this.state.persons[1].age}
                          click={this.switchNameHandler.bind(this, "Nuwan!")}
                          changed={this.nameChangeHandler}>My Hobbies: Racing</Person> {/*My Hobbies: Racing will work as children on Person.js*/}
                      <Person
                          name={this.state.persons[2].name}
                          age={this.state.persons[2].age}/>
                  </div> : null
              }
          </div>
      );
      //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    }
}

export default App;
