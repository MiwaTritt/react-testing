import React, {Component} from 'react';
import {Link} from 'react-router';

import './layout.container.scss';

export default class Layout extends Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="navbar-header">
                            <div className="navbar-brand">SITE TITLE FILLER</div>
                        </div>
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/form">Registration</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="app-content">{this.props.children}</div>
                <footer>
                </footer>
            </div>
        );
    }
}