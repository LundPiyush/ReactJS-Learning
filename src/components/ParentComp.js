import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Piyush'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Piyush'
            })
        },2000)
    }
    
    render() {
        console.log('parent comp')
        return (
            <div>
            ParentComp
            {/* <RegComp name={this.state.name}></RegComp>
            <PureComp name={this.state.name}></PureComp> */}
            <MemoComp name={this.state.name}></MemoComp>    
            </div>
        )
    }
}

export default ParentComp
