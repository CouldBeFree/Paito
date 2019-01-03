import React from 'react';
import axios from 'axios';

class Marketdata extends React.Component{
    state = {
        loadedData: [],
        loading: false
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(res => {
                console.log(res.data.Data);
                this.setState({
                    loadedData: res.data.Data
                })
            })
            .catch(err => {
                console.log(err);
            })
    };

    render(){
        const { loadedData, loading } = this.state;
        return(
            <div>
                <h1>Marketdata</h1>
                <ul>

                </ul>
            </div>
        )
    }
}

export default Marketdata;