import React from 'react';
import { message } from '../../utils/chat';
import openSocket from 'socket.io-client';

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: '',
            messages: ''
        };

        this.socket = openSocket('http://localhost:8000');

        this.socket.on('recieve', (msg) => {
            addMessage(msg);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };
    }

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
        const { messages } = this.state;
        return(
            <div>
                <h1>I am chat component</h1>
                <form onSubmit={this.submitMessage}>
                    <input type="text" value={this.state.text} onChange={this.setMessage}/>
                    <input type="submit"/>
                </form>
                Message: {messages.length ? messages.map(item => {
                    return(
                        <div>
                            <div key={messages.length}>{item}</div>
                        </div>
                    )
            }) : null}
            </div>
        )
    }
}

export default Chat;