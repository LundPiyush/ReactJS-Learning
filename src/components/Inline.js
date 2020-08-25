import React from 'react'
const heading={
    fontSize:'72px',
    color:'blue'
}
//create an object(say heading) and write the CSS propeties in camel cased(say fontSize)
//and apply the style inline we use style attribute on tag(h1) style={object name}
function Inline() {
    return (
        <div>
        <h1 style={heading}>Inline</h1>
            
        </div>
    )
}

export default Inline
