import React from 'react';
import isEmptyObj from '../../utils/isEmptyObj'
import {connect} from 'react-redux';

class Card extends React.Component{
    state = {
        selected: [],
        coinData: []
    };

    componentWillReceiveProps(nextProps){
        nextProps.selectedCoins.selectedCoins
            .map(item => {
                this.setState({
                    coinData: this.state.coinData.concat(item.coinInfo)
                })
            })
        /*console.log(nextProps.selectedCoins.selectedCoins);
        console.log(Object.values(nextProps.selectedCoins.selectedCoins
            .map(item => item.coinInfo.CoinInfo.FullName)));*/
    }

    render(){
        const { selected, coinData } = this.state;
        return(
            <div>
                <h1>Card</h1>
                <ul className="card-holder row">
                    {
                        isEmptyObj(coinData) ? 'Select your first coin' :
                            Object.values(coinData)
                                .map(item => {
                                    return <li key={item.CoinInfo.Id} className="d-flex col-sm-3">
                                        <p>{item.CoinInfo.FullName}</p>
                                        <p>{item.AggregatedData.PRICE}</p>
                                        <div className="coin-image">
                                            <img src={`https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`} alt="image"/>
                                        </div>
                                    </li>
                                })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        selectedCoins: state.selectedCoins
    }
};

export default connect(mapStateToProps)(Card);