import React from 'react';
import Modal from './Modal'
import Card from './card';
import axios from 'axios';

class Home extends React.Component {
    state = {
        // currency: []
        // addittionalData: []
    };
    
    render(){
        // const { currency } = this.state;
        return(
            <div>
                <h2>Your Currencies</h2>
                <p>The currencies you have purchased are here</p>
                <button className="add-button"><i className="fas fa-plus"></i></button>
            {/*<Card currency={currency}/>*/}
            <Modal/>
            </div>
        )
    }
}

export default Home;