import React from 'react'
// function Greet(){
//     return <h1>hello Piyush</h1>
// }
//using arrow function syntax(ES6)
const Greet=(props)=>{
    return (
<div>
<h1>hello {props.className} also known as {props.heroName}</h1>
{props.children}
</div>
    )
}
export default Greet