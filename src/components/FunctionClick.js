import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
        <button onClick={clickHandler}>Click</button>
        {/* Note :clickHandler is not a function call  */}
            
        </div>
    )
}

export default FunctionClick
