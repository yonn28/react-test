import React, {useEffect} from 'react'
import classes from './Cockpit.css'

const cockpit = (props) =>{

    useEffect(() =>{
      console.log('[cockpit.js] UseEffect');
      //Http Request..
      const timer = setTimeout(() =>{
        alert('Saved data to cloud!');
      }, 1000);
      return () => {
        clearTimeout(timer)
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, [] )

    useEffect(()=>{
      console.log('[cockpit.js] 2nd usedEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    })

    let btnClass = [classes.Button]

    if(props.showPersons){
        btnClass.push(classes.Red)
    }

    const Assignedclasses = [];

    if(props.persons.length <= 2){
      Assignedclasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      Assignedclasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Person Manager</h1>
            <p className={Assignedclasses.join(' ')} >This is really working!!</p>
            <button className={btnClass.join(' ')} alt={props.showPersons.toString()}
                    onClick={props.toggler}> Toggle Persons </button>
        </div>
    );
}

export default cockpit