import React, { Component } from 'react'

class FragmentDemo extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>ReactFragment</h1>
                <p>Have a good day</p>
            </React.Fragment>
            // Another shorthand also exists for the above method 
            // in which we make use of ‘<>’ and ‘</>’ instead of the ‘React.Fragment’.
        )
    }
}

export default FragmentDemo
