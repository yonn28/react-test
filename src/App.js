import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;


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
                }
                )}
            </div>
       )    
      }

    return (
      <div className="App">
        <h1>hi I'm a react app</h1>
        <p>this is working</p>
        <button style={style} 
                onClick={this.togglePersonsHandler}> Toggle Persons </button>
        {persons}

      </div>
    );
  }
}

export default App;
