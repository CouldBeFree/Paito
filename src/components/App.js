import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
//Reactstrap
import { Row, Col } from 'reactstrap';
//Components
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Trading from './Trading/Exchange';
import MarketCap from './MarketCap/MarketCap';
import Ico from './Ico/Ico';
import BuyAndSell from './Buy/Buy';
import Wallet from './My wallet/Wallet';
import Exchange from './Trading/Exchange';
import Login from './Auth/Login';
import Register from './Auth/Register';
//Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

const store = createStore(() => [], {}, applyMiddleware());

const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={customHistory}>
                    <div>
                        {/*<div className="top-bar">
                        <Row>
                            <Col xs="3">
                                <div className="logo-holder">

                                </div>
                            </Col>
                            <Col xs="9">
                                <div className="top-holder">

                                </div>
                            </Col>
                        </Row>
                    </div>*/}
                        <div className="main-wrapper">
                            <Row>
                                <Col xs="3">
                                    <ul className="nav-holder">
                                        <li className="nav-item">
                                            <Link className="nav-anchor" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-anchor" to="/dashboard">Dashboard</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-anchor" to="/trading">Trading</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-anchor" to="/marketcap">MarketCap</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-anchor" to="/ico">Ico</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-anchor" to="/buyandsell">Buy & Sell Crypto</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-anchor" to="/wallet">My Wallet</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-anchor" to="/exchange">Currency Exchange</Link>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs="9">
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                    <Route path="/dashboard" component={Dashboard} />
                                    <Route path="/trading" component={Trading} />
                                    <Route path="/marketcap" component={MarketCap}/>
                                    <Route path="/ico" component={Ico}/>
                                    <Route path="/buyandsell" component={BuyAndSell}/>
                                    <Route path="/wallet" component={Wallet}/>
                                    <Route path="/exchange" component={Exchange}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
