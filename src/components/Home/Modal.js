import React from 'react';
import axios from 'axios';
import preloader from '../../preloader.gif';

class Modal extends React.Component{
    state = {
        loading: true,
        data: []
    };

    componentDidMount(){
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(res => {
                console.log(res.data);
                const newData = this.state.data.concat(res.data.Data);
                this.setState({
                    data: newData,
                    loading: false
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        const { data } = this.state;
        return(
            <div className="modal-block">
                {
                    this.state.loading ? <img  src={preloader} alt="preloader"/> :
                        <div>
                            <div className="d-flex justify-content-between">
                                <input type="text"/>
                                <button className="close-modal"><i className="fas fa-times"></i></button>
                            </div>
                            <ul className="coin-list">
                                {data.map((item) => {
                                    console.log(item);
                                    return Object.keys(item).map(function(cur) {
                                        return <li key={cur}>{cur}</li>
                                    });
                                })}
                            </ul>
                        </div>
                }
            </div>
        )
    }
}

export default Modal;