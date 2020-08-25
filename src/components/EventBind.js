import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
        // Third approch for event binding
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Goodbye'
        })
    }
    //Fourth approach for event binding class function = arrow function
    // clickHandler= () =>{
    //     this.setState({
    //         message:'Goodbye'
    //     })
    // }
    
    render() {
        return (
            <div>
                
                <div>{this.state.message}</div>
                {/* First approch below */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Second approch below */}
                <button onClick={()=>this.clickHandler()}>Click</button>

                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
