import React from 'react';
import preloader from '../../preloader.gif';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCoins } from '../../actions/getCoins';
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
        /*const list = nextProps.coinsList.coins;
        let newCoins =[];
        for (let key in list){
            newCoins.push(list[key].CoinInfo.Name)
        }
        this.setState({
            items: newCoins
        });*/
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
        })
    };

    filterCoins = (e) => {
        const {coinsList} = this.props;
        const list = coinsList.coins;
        let newCoins =[];
        for (let key in list){
            newCoins.push(list[key].CoinInfo.Name)
        }
        newCoins = newCoins.filter(function(item){
            return item.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            items: newCoins
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
                            {/*<ul className="coin-list">
                                {
                                    this.state.items.map((item, index) => {
                                        return <li onClick={e => this.selectCoin(item)} key={index}>{item}</li>
                                    })
                                }
                            </ul>*/}
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

export default connect(mapStateToProps, {getCoins, selectedCoin})(Modal);