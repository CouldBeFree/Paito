import React from 'react';
import axios from 'axios';
import preloader from '../../preloader.gif';
import { connect } from 'react-redux';
import { getCoins } from '../../actions/getCoins';

class Modal extends React.Component{
    state = {
        loading: true,
        data: null
    };

    componentDidMount(){
        /*axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(res => {
                console.log(res.data.Data);
                const newData = res.data.Data;
                this.setState({
                    data: Object.keys(newData),
                    loading: false
                })
            })
            .catch(function (error) {
                console.log(error);
            });*/
        // this.props.getCoins();
    }

    filterCoins = (e) => {
        let updatedList = [...this.state.data];
        console.log(updatedList);
        updatedList.filter(function(item){
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({data: updatedList});
    };

    render(){
        const { data } = this.state;
        return(
            <div className="modal-block">
                {
                    this.state.loading ? <img className="preloader" src={preloader} alt="preloader"/> :
                        <div>
                            <div className="d-flex justify-content-between">
                                <input onChange={this.filterCoins} type="text"/>
                                <button className="close-modal"><i className="fas fa-times"></i></button>
                            </div>
                            <ul className="coin-list">
                                {
                                    data.map((item) => {
                                        return <li key={item}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                }
            </div>
        )
    }
}

export default Modal;