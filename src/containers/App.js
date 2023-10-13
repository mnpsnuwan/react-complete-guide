import React, {Component} from "react";

import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component{

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: "p001", name: "Nuwan", age: 30 },
            { id: "p002", name: "Ruwan", age: 31 },
            { id: "p003", name: "Saman", age: 27 }
        ],
        otherState: "Some other value",
        showPersons: false
    }

    static getDerivedStateFromProps(props,state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount')
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
        console.log('[App.js] render')
        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonsHandler}
                    changed={this.nameChangeHandler}/>
            );
        }

      return (
          <div className={classes.App}>
              <Cockpit
                  title={this.props.appTitle}
                  showPersons={this.state.showPersons}
                  persons={this.state.persons}
                  clicked={this.togglePersonsHandler}/>
              {persons}
          </div>
      );
      //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'))
    }
}

export default App;
