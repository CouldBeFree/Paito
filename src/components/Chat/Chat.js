import React from 'react';
import subscribeToTimer from '../../utils/subscribeToTimer';

class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timestamp: 'no timestamp yet'
        };
        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));
    }

    render(){
        const { timestamp } = this.state;
        return(
            <div>
                <h1>I am chat component</h1>
                <h2>{timestamp}</h2>
            </div>
        )
    }
}

export default Chat;