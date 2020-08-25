import React from 'react'
import Person from './Person'

function NameList() {
    //const names=['Bruce','Diana','Clark']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:30,
            skill:'Angular'

        },
        {
            id:3,
            name:'Diana',
            age:35,
            skill:'Python'
        }
    ]
    //A good rule of thumb is that elements inside the map() call need keys.
    //hence key should be specified inside the map method


    const personList=persons.map(person => <Person key={person.id} person={person}></Person>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
