import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        // this.setState({
        //     count:this.state.count+1
        // },
        // //second argument in setState is callback function which is arrow funct i.e.  ()=>{}
        // ()=>{console.log(this.state.count)}
        // )
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }))
        console.log('Callback value ',this.state.count)
    }
    incrementfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <div>Count -{this.state.count}</div>
                <button onClick={()=>this.incrementfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
