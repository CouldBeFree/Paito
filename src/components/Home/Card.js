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
        // console.log(Object.values(nextProps.selectedCoins));
        /*this.setState({
            selected: nextProps
        })*/
    }

    render(){
        const { selected, coinData } = this.state;
        return(
            <div>
                <h1>Card</h1>
                <ul className="card-holder">
                    {
                        isEmptyObj(coinData) ? 'Select your first coin' :
                            Object.values(coinData)
                                .map(item => {
                                    return <li key={item.Id}>{item.FullName}</li>
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