import React from 'react';
import { message } from '../../utils/chat';
import openSocket from 'socket.io-client';

class Chat extends React.Component{
    state = {
        text: '',
        messages: ''
    };

    socket = openSocket('http://localhost:8000');

    submitMessage = (e) => {
        e.preventDefault();
        message(this.state.text);
        this.setState({
            text: ''
        })
    };

    setMessage = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    render(){
        this.socket.on('chat message', (msg) => {
            this.setState({
                messages: msg
            })
        });

        return(
            <div>
                <h1>I am chat component</h1>
                <form onSubmit={this.submitMessage}>
                    <input type="text" value={this.state.text} onChange={this.setMessage}/>
                    <input type="submit"/>
                </form>
                Message: {this.state.messages}
            </div>
        )
    }
}

export default Chat;