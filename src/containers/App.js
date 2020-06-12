import React, { Component } from 'react';
import styled from 'styled-components';
// import './App.css';
import classes from './App.css'

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
    let btnClass = [classes.Button]


    if(this.state.showPersons){
       persons =(
            <div >
                {this.state.persons.map( (person, index)  =>{
                  return (
                      <Person 
                        name={person.name} 
                        age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        key = {person.id}
                        changed = {(event)=> this.nameChangeHandler(event,person.id)}
                        />         
                  )
                })}
            </div>
       );
       btnClass.push(classes.Red)
       
      }

      const Assignedclasses = [];

      if(this.state.persons.length <= 2){
        Assignedclasses.push(classes.red);
      }

      if(this.state.persons.length <= 1){
        Assignedclasses.push(classes.bold);
      }

    return (
        <div className={classes.App}>
          <h1>hi I'm a react app</h1>
          <p className={Assignedclasses.join(' ')} >This is working from Javascript and react !!!!!</p>
          <button className={btnClass.join(' ')} alt={this.state.showPersons.toString()}
                  onClick={this.togglePersonsHandler}> Toggle Persons </button>
          {persons}
        </div>
    );
  }
}

export default App;
