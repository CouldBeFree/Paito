import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions'

class Sibebar extends React.Component{
    onLogoutUser = (e) => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render(){
        return(
            <ul className="nav-holder">
                <li className="nav-item">MAIN</li>
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
                    <Button onClick={this.onLogoutUser}>Logout</Button>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Sibebar);