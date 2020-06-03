import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:'yonny' , age: 27},
      {name:'manu' , age: 27},
      {name:'stephanie' , age: 27}
    ],
    showPersons: true
  }

  deletePersonHandler = (index)=>{
    const persons = this.state.persons;
    persons.splice(index,1);
    this.setState({
      persons:persons
    })
  }

  togglePersonsHandler = () =>{

    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
 
  }

  nameChangeHandler = (event) =>{
    this.setState({
          persons:[
            {name: 'good' , age: 27},
            {name: event.target.value , age: 27},
            {name:'sasdfas' , age: 27}
        ]
        })
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
                      click={() => this.deletePersonHandler(index)}/> 
                    
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
        <h1>{this.state.showPersons}</h1>
       
        {persons}

      </div>
    );
  }
}

export default App;
