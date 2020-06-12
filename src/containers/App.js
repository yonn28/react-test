import React, { Component } from 'react';
import styled from 'styled-components';
// import './App.css';
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

import Person from '../components/Persons/Person/Person'
import ErrorBoundary from '../ErrorBundary/ErrorBundary'


class App extends Component {
  
  state = {
    persons: [
      {id:'asbb1',name:'yonny' , age: 27},
      {id:'asbb2',name:'manu' , age: 27},
      {id:'asbb3',name:'stephanie' , age: 27}
    ],
    showPersons: true
  }

  deletePersonHandler = (index)=>{
    const persons = [...this.state.persons];
    // const persons = this.state.persons.slice();
    persons.splice(index,1);
    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler = () =>{

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
 
  }

  nameChangeHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex( p =>{
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})

  }

  render() {


    let persons = null;
 
    if(this.state.showPersons){
       persons =(
         <div>
          <Persons
              persons = {this.state.persons}
              clicked={ this.deletePersonHandler}
              changed = {this.nameChangeHandler}
          />
         </div>
       );
      }


    return (
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            toggler = {this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;
