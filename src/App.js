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
  switchNameHaldler=(change)=>{
    // console.log('was click');
    // DON'T DO THIS this.state.persons[0].name = 'jaime';
    this.setState({
      persons:[
        {name: change , age: 27},
        {name:'manu' , age: 27},
        {name:'sasdfas' , age: 27}
    ]}
    )
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
                <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHaldler.bind(this,'ok')}
                > My Hobbies: racing </Person>

                <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                changed = {this.nameChangeHandler}> </Person>

                <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}> </Person>
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
