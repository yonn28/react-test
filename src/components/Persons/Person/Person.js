
import React, {Component} from 'react'
import classes from './Person.css';

class Person extends Component{
    render(){
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
                <p onClick= {this.props.click} >I'm a {this.props.name} and I am {this.props.age} years old! </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
             </div>
        )
    }
}

// const person = (props) => {
// }


// export default person;

export default Person