import React from 'react';
import { message } from '../../utils/chat';
import openSocket from 'socket.io-client';
import {connect} from 'react-redux';
import '../App.scss';

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

        this.socket.on('recieve', (msg, user) => {
            addMessage(msg, user);
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

        const addMessage = (msg, user) => {
            const guidGenerator = () => {
                const S4 = function() {
                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                };
                return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
            };
            const messageObj = {
                id: guidGenerator(),
                message: msg,
                author: user
            };
            this.setState({messages: [...this.state.messages, messageObj]});
        };
    }

    componentWillUnmount(){
        this.socket.close();
    }

    submitMessage = (e) => {
        e.preventDefault();
        message(this.state.text, this.props.user.user.name);
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
            <div className="main-window">
                { isOpen ? <div className="notification-block">{activeUser} is active</div> : null }
                <div className="block-holder">
                    <ul className="chat-window">
                        {messages.length ? messages.map(item => {
                            return(
                                <li key={item.id}>
                                    <span className="author">{item.author}</span>:
                                    <span className="message">{item.message}</span>
                                </li>
                            )
                        }) : null}
                    </ul>
                    <div className="user-info">

                    </div>
                </div>
                <div>
                    { isTyping ? `${typingUser} is typing now` : null }
                    <form onSubmit={this.submitMessage}>
                        <input type="text" value={this.state.text} onChange={this.setMessage}/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
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