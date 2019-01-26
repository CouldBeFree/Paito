import React from 'react';
import { message } from '../../utils/chat';

class Chat extends React.Component{
    state = {
        text: ''
    };

    submitMessage = (e) => {
        e.preventDefault();
        message(this.state.text);
    };

    setMessage = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    render(){
        return(
            <div>
                <h1>I am chat component</h1>
                <form onSubmit={this.submitMessage}>
                    <input type="text" onChange={this.setMessage}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Chat;