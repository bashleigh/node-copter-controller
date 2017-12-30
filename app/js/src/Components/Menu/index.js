import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';

export default class Menu extends Component {
    render = () => {
        return (
            <div className={`menu${(this.props.active) ? ' is-active' : ''}`}>
                <Link to="/controller" className="navbar-item">
                    Controller
                </Link>
                <Link to="/settings" className="navbar-item">
                    Settings
                </Link>
            </div>
        );
    }
}