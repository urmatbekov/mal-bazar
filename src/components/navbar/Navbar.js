import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

const Navbar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                Username: 
                                {user.data.username}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const msp = ({ user }) => {
    return { user }
}

export default connect(msp)(Navbar);