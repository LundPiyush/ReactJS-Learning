import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIN:false
        }
    }
    
    render() {
        //Approach 4: short-circuit if first part is true it will render JSX in second part ,if 1st part is false it will not render anything and o/p will be nothing  
        return this.state.isLoggedIN && <div>welcome Piyush</div>
        
        // return (
        //     //Approach 3 using ternary operator (it can be used in JSX)
        //     this.state.isLoggedIN ?<div>welcome Piyush</div> : <div>welcome Guest</div>
        // )

        //Approach 2 using element variable
        // let message          //message is variable which store the data to be displayed
        // if(this.state.isLoggedIN){
        //     message=<div>welcome Piyush</div>
        // }
        // else{
        //     message=<div>welcome Guest</div>
        // }
        // return <div>{message}</div>

        //Approach 1 using if else
        // if(this.state.isLoggedIN){
        //     return(
        //         <div>welcome Piyush</div>
        //     )
        // }
        // else{
        //     return(
        //     <div>welcome guest</div>
        //     )
        // }

        // return (
        //     <div>
        //        <div> welcome Piyush</div>
        //        <div>welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
