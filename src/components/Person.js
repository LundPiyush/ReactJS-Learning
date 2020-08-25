import React from 'react'

function Person(props) {
    return (
        <div>
           <h2>I'm {props.person.name}.I'm {props.person.age} years of age.I know {props.person.skill}</h2> 
        </div>
    )
}

export default Person
