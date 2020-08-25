import React from 'react'

function ChildComponent(props) {

    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>Greet parent</button>
            {/* //passing parameter child in the greetHandler using arrow function and we'll recive it in ParentCo */}
        </div>
    )
}

export default ChildComponent
