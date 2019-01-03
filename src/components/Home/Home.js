import React from 'react';
import Modal from './Modal';
import Card from './Card';
import Marketdata from "./Marketdata";

class Home extends React.Component {
    state = {
        isOpen: false
    };

    modalHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render(){
        const { isOpen } = this.state;
        return(
            <div>
                <h2>Your Currencies</h2>
                <p>The currencies you have purchased are here</p>
                <button className="add-button" onClick={this.modalHandler}><i className="fas fa-plus"></i></button>
                <Card />
                {isOpen ? <Modal/> : null}
                <Marketdata />
            </div>
        )
    }
}

export default Home;