import React from 'react';
import { message } from '../../utils/chat';
import openSocket from 'socket.io-client';
import {connect} from 'react-redux';

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: '',
            messages: ''
        };

        console.log(props.user.user.name);

        this.socket = openSocket('http://localhost:8000');

        this.socket.on('recieve', (msg) => {
            addMessage(msg);
        });

        this.socket.emit('new user', props.user.user.name);

        const addMessage = data => {
            console.log(data);
            const guidGenerator = () => {
                const S4 = function() {
                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                };
                return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
            };
            const messageObj = {
                id: guidGenerator(),
                message: data
            };
            this.setState({messages: [...this.state.messages, messageObj]});
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
                    <div key={item.id}>
                        <div>{item.message}</div>
                    </div>
                )
            }) : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.auth
    }
};

export default connect(mapStateToProps)(Chat);