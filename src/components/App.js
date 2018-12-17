import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import { Row, Col } from 'reactstrap';
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
import Sidebar from './Sidebar/Sibebar';
import {Provider} from 'react-redux';
import store from '../store';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser } from "../actions/authActions";

import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

const customHistory = createBrowserHistory();

// Check for token
if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime){
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

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
                                    <Sidebar/>
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