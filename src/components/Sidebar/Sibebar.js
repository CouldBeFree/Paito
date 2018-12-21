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
        const { location } = this.props;
        const isActive = (path, match, location) => !!(match || path === location.pathname);
        return(
            <ul className="nav-holder">
                <li className="nav-item">MAIN</li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/trading">Trading</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  activeClassName="active" to="/marketcap">MarketCap</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  activeClassName="active" to="/ico">Ico</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  activeClassName="active" to="/buyandsell">Buy & Sell Crypto</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  activeClassName="active" to="/wallet">My Wallet</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink  activeClassName="active" to="/exchange">Currency Exchange</NavLink>
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