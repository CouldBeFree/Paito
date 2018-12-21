import React from 'react';
import '../App.scss';
import axios from 'axios';

class Home extends React.Component {
    state = {
      crypto: {}
    };

    componentDidMount(){
        /*axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&page=3&tsym=EUR&extraParams=paito')
            .then(res => {
                console.log(res.data)
            });*/
        const url = "https://min-api.cryptocompare.com/data/all/includedexchanges"; // site that doesn’t send Access-Control-*
        fetch(url)
            .then(response =>response.text())
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
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