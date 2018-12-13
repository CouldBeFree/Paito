import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

class Navigation extends React.Component {
    render(){
        return(
            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link className="nav-anchor" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-anchor" to="/blog/post/:id">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-anchor" to="/portfolio/:id">Pages</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-anchor" to="/elements/:id">Elements</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-anchor" to="/item/:id">eCommerse</Link>
                </li>
            </ul>
        )
    }
}

export default Navigation;