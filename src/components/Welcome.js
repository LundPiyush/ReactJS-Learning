import React,{Component} from 'react'

class Welcome extends Component {
render(){
    return <h1>Welcome {this.props.className} also known as {this.props.heroName} </h1>
    //props are immutable i.e its value can be changed 
}

}
export default Welcome