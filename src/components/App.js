import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './Home/Home'
import Dashboard from 'Home/Dashboard';
import Trading from 'Trading/Trading';
import MarketCap from 'MarketCap/MarketCap';
import Ico from 'Ico/Ico';
// import BuyAndSell from 'Buy/Buy';
import Wallet from 'Wallet/Wallet';
import Exchange from 'Trading/Exchange';

import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={customHistory}>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/trading" component={Trading} />
                <Route path="/marketcap" component={MarketCap}/>
                <Route path="/ico" component={Ico}/>
                {/*<Route path="/buyandsell" component={BuyAndSell}/>*/}
                <Route path="/wallet" component={Wallet}/>
                <Route path="/exchange" component={Exchange}/>
            </div>
        </Router>
    );
  }
}

export default App;
