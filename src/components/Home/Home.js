import React from 'react';
import '../App.scss';
import axios from 'axios';

class Home extends React.Component {
    state = {
      crypto: {}
    };

    componentDidMount(){
        // delete axios.defaults.headers.common["Authorization"];
        axios.get('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=USD&e=Kraken')
            .then(res => {
                console.log(res.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;