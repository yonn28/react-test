import React, { Component } from 'react';
// import './App.css';
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'




class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {
    persons: [
      {id:'asbb1',name:'yonny' , age: 27},
      {id:'asbb2',name:'manu' , age: 27},
      {id:'asbb3',name:'stephanie' , age: 27}
    ],
    showPersons: true,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[app.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(){
    console.log('[Appjs] shouldComponentUpdate');
    return true
  }

  componentDidUpdate(){
    console.log('[Appjs] componentDidUpadate');
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
     console.log('[App.js] render');

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
          <button 
          onClick={()=>{ 
              this.setState({showCockpit:false})
            }}> 
             remove Cockpit
            </button>

               { this.state.showCockpit?
                  <Cockpit
                  showPersons={this.state.showPersons}
                  persons={this.state.persons}
                  toggler = {this.togglePersonsHandler}
                  />
                  : null
              }
              {persons}
        </div>
    );
  }
}

export default App;
