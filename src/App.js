import './App.css';
import React, {Component} from "react";
import Person from "./Person/Person";

class App extends Component{
  render() {
      return (
          <div className="App">
              <h1>Hi, I'm a React App</h1>
              <p>This is really working...</p>
              <Person name="Nuwan" age="30"/>
              <Person name="Ruwan" age="31">My Hobbies: Racing</Person> {/*My Hobbies: Racing will work as children on Person.js*/}
              <Person name="Saman" age="27"/>
          </div>
      );
      //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
  }
}

export default App;
