import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Welcome visitor'
        }
    }
    clickHandler(){
        this.setState({
            message:'Thanks for suscribing'
        })
    }
    
    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.clickHandler()}>Suscribe</button>
                
            </div>
        )
    }
}

export default Message
