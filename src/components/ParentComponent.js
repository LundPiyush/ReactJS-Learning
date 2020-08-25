import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'parent'
        }
        this.Greet=this.Greet.bind(this)
        //binding the function greet
    }
    Greet(childName){
        alert('Hello '+this.state.parentName+' from '+childName)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.Greet}></ChildComponent>
            {/* we are sending greetHandler to ChildComponent as props and from there we are calling greet function */}
            </div>
        )
    }
}

export default ParentComponent
