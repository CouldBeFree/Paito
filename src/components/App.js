import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
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
import PrivateRoute from './PrivateRoute/PrivateRoute';

import createBrowserHistory from 'history/createBrowserHistory';
import './App.scss';

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
                            <Row className="child">
                                <Col xs="3" className="sidebar">
                                    <Sidebar />
                                </Col>
                                <Col xs="9" className="wrap">
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                    <Switch>
                                        <PrivateRoute exact path="/" component={Home} />
                                    </Switch>
                                    <Switch>
                                        <PrivateRoute path="/dashboard" component={Dashboard} />
                                    </Switch>
                                    <Switch>
                                        <PrivateRoute path="/trading" component={Trading} />
                                    </Switch>
                                    <Switch>
                                        <PrivateRoute path="/marketcap" component={MarketCap}/>
                                    </Switch>
                                    <Switch>
                                        <PrivateRoute path="/ico" component={Ico}/>
                                    </Switch>
                                    <Switch>
                                        <PrivateRoute path="/buyandsell" component={BuyAndSell}/>
                                    </Switch>
                                    <Switch>
                                        <PrivateRoute path="/wallet" component={Wallet}/>
                                    </Switch>
                                    <Switch>
                                        <PrivateRoute path="/exchange" component={Exchange}/>
                                    </Switch>
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