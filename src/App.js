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
    ]
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
    return (
      <div className="App">
        <h1>hi I'm a react app</h1>
        <p>this is working</p>
        <button onClick={() => this.switchNameHaldler('fuck')}> Switch Name </button>

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
    );
  }
}

export default App;
