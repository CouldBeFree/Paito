import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
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
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/marketcap">MarketCap</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/ico">Ico</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/buyandsell">Buy & Sell Crypto</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/wallet">My Wallet</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/chat">Chat</NavLink>
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

export default connect(mapStateToProps, { logoutUser })(withRouter(Sibebar));