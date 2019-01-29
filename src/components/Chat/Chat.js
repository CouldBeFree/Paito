import React from 'react';
import { message } from '../../utils/chat';
import openSocket from 'socket.io-client';
import {connect} from 'react-redux';

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text: '',
            messages: '',
            activeUser: '',
            isOpen: false,
            isTyping: false,
            typingUser: ''
        };

        this.socket = openSocket('http://localhost:8000');

        this.socket.on('recieve', (msg) => {
            addMessage(msg);
        });

        this.socket.on('user typing', (user) => {
            this.setState({
                isTyping: true,
                typingUser: user
            })
        });

        this.socket.on('connected user', user => {
            this.setState({
                activeUser: user
            });
            showUser();
            setTimeout(() => {
                hideUser()
            }, 5000);
        });

        this.socket.on('stop typing', () => {
            this.setState({
                isTyping: false
            })
        });

        const showUser = () => {
            this.setState({
                isOpen: true
            })
        };

        const hideUser = () => {
            this.setState({
                isOpen: false
            })
        };

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
        this.socket.emit('end typing');
        this.setState({
            text: ''
        })
    };

    setMessage = (e) => {
        this.socket.emit('typing', this.props.user.user.name);
        this.setState({
            text: e.target.value
        })
    };

    render(){
        const { messages, isOpen, activeUser, isTyping, typingUser } = this.state;
        return(
            <div>
                { isOpen ? <div>{activeUser} is active</div> : null }
                { isTyping ? `${typingUser} is typing now` : null }
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