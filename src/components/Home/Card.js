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
                    coinData: this.state.coinData.concat(item.coinInfo.CoinInfo)
                })
            })
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
                                    return <li key={item.Id} className="d-flex col-sm-3">
                                        <p>{item.FullName}</p>
                                        <div className="coin-image">
                                            <img src={`https://www.cryptocompare.com/${item.ImageUrl}`} alt="image"/>
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