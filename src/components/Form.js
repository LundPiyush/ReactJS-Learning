import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'react'

        }
    }
    HandleUsernameChange=(event)=>{
        this.setState({
          username:event.target.value  
        })

    }
    HandleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    HandleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        }
        )
    }
    HandleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
        event.preventDefault() 
    }
    
    render() {
        return (
            <form onSubmit={this.HandleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.HandleUsernameChange}></input>
                </div>
                <br/>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.HandleCommentsChange} ></textarea>
                </div>
                <div>
                <label>Topic</label>
                    <select value={this.state.topic} onChange={this.HandleTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
