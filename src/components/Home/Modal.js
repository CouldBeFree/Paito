import React from 'react';
import preloader from '../../preloader.gif';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCoins, updateCoins } from '../../actions/getCoins';
import { selectedCoin } from '../../actions/selectedCoin';

class Modal extends React.Component{
    state = {
        items: [],
        innerLoading: false
    };

    componentDidMount(){
        this.props.getCoins();
    }

    componentWillReceiveProps(nextProps) {
        const list = nextProps.coinsList.coins;
        this.setState({
            items: list
        });
    }

    selectCoin = (e) => {
        const {items} = this.state;
        let newArr = items.filter(item => item !== e);
        axios.get(`https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${e}&tsym=USD`)
            .then(res => {
                const coin = {
                    coinName: e,
                    coinInfo : res.data.Data
                };
                if(res.data.Response === 'Success'){
                    this.props.selectedCoin(coin)
                }
            })
            .catch(err => {
                console.log(err)
            });
        this.setState({
            items: newArr
        });
        this.props.updateCoins(newArr)
    };

    filterCoins = (e) => {
        const {coinsList} = this.props;
        let list = coinsList.coins;
        list = list.filter(function(item){
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            items: list
        })
    };

    render(){
        const {isLoading} = this.props;
        return(
            <div className="modal-block">
                {
                    isLoading.loading ? <img className="preloader" src={preloader} alt="preloader"/> :
                        <div>
                            <div className="d-flex justify-content-between">
                                <input onChange={this.filterCoins} type="text"/>
                            </div>
                            <ul className="coin-list">
                                {
                                    this.state.items.map((item, index) => {
                                        return <li onClick={e => this.selectCoin(item)} key={index}>{item}</li>
                                    })
                                }
                            </ul>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        coinsList: state.coinsList
    }
};

export default connect(mapStateToProps, {getCoins, selectedCoin, updateCoins})(Modal);