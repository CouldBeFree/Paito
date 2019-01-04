import React from 'react';
import axios from 'axios';
import preloader from '../../preloader.gif';

class Marketdata extends React.Component{
    state = {
        loadedData: [],
        loading: true
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(res => {
                this.setState({
                    loadedData: res.data.Data,
                    loading: false
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    render(){
        const { loadedData, loading } = this.state;
        return(
            <div className="row">
                <div className="data-wrapper col-sm-5">
                    <ul className="data-list">
                        <li>
                            <div className="head d-flex justify-content-between">
                                <span>Coins</span>
                                <span>Prices</span>
                                <span>Change %</span>
                            </div>
                        </li>
                        {
                            loading ? <img className="preloader" src={preloader} alt="preloader"/> :
                                Object.values(loadedData).map(item => {
                                    return <li key={item.CoinInfo.Id}>
                                        <div className="content d-flex justify-content-between">
                                            <span>{item.CoinInfo.Name}</span>
                                            <span>{item.DISPLAY.USD.PRICE}</span>
                                            <span className={item.DISPLAY.USD.CHANGEPCTDAY > 0 ? 'green' : 'red'}>
                                               <i className="fas fa-chevron-up"></i> {item.DISPLAY.USD.CHANGEPCTDAY} %
                                            </span>
                                        </div>
                                    </li>
                                })
                        }
                    </ul>
                </div>
                <div className="col-sm-7">
                    <h1>Graph</h1>
                </div>
            </div>
        )
    }
}

export default Marketdata;