import React, { Component } from 'react'

class ClassClick extends Component {
    classHandler(){
        console.log('Click the btn')
    }
    render() {
        return (
            <div>
                <button onClick={this.classHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
