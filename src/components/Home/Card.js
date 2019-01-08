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
            });
    }

    componentDidMount(){
        const { selectedCoins } = this.props;
        let selectedItems = [];
        if(!isEmptyObj(selectedCoins.selectedCoins)){
            selectedCoins.selectedCoins
                .map(item => {
                    selectedItems.push(item.coinInfo);
                    this.setState({
                        coinData: selectedItems
                    });
                })
        }
    }

    render(){
        const { coinData } = this.state;
        return(
            <div>
                <ul className="card-holder row">
                    {
                        isEmptyObj(coinData) ? 'Select your first coin' :
                            Object.values(coinData)
                                .map(item => {
                                    return <li key={item.CoinInfo.Id} className="col-12 col-sm-6 col-md-3">
                                        <div className="content-wrap d-flex justify-content-between align-items-center">
                                            <div className="info">
                                                <p>{item.CoinInfo.FullName}</p>
                                                <p>{item.AggregatedData.PRICE} $</p>
                                            </div>
                                            <div className="coin-image">
                                                <img src={`https://www.cryptocompare.com/${item.CoinInfo.ImageUrl}`} alt="image"/>
                                            </div>
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