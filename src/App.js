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
        otherState: "Some other value"
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

    render() {
      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>This is really working...</p>
              {/*<button onClick={this.switchNameHandler.bind(this, "Nuwan Samarasinghe")}>Switch Names</button>*/}
              <button onClick={() => this.switchNameHandler( "Nuwan Samarasinghe!!")}>Switch Names</button> {/*This is very convenient syntax but it can be inefficient*/}
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
          </div>
      );
      //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    }
}

export default App;
