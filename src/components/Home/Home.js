import React from 'react';
import Modal from './Modal'
import Card from './card';

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
                {/*<Card currency={currency}/>*/}
                {isOpen ? <Modal/> : null}
            </div>
        )
    }
}

export default Home;