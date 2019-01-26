import React from 'react';
import { Link } from 'react-router-dom'
import '../App.scss';

class Navigation extends React.Component {
    render(){
        return(
            <ul>
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
                <li className="nav-item">
                    <Link className="nav-anchor" to="/chat">Chat</Link>
                </li>
            </ul>
        )
    }
}

export default Navigation;