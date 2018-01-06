import React, {Component} from 'react';
import {
    Link,
} from 'react-router-dom';
import {connect} from 'react-redux';

@connect(
    state => (state),
    dispatch => ({
        closeMenu: () => dispatch({
            type: 'menu/CLOSE',
        }),
    }),
)
export default class Menu extends Component {
    render = () => {
        return (
            <div className={`menu${(this.props.menu.open) ? ' is-active' : ''}`}>
                <Link to="/pilot" className="navbar-item" onClick={(event) => this.props.closeMenu()}>
                    Controller
                </Link>
                <Link to="/settings" className="navbar-item" onClick={(event) => this.props.closeMenu()}>
                    Settings
                </Link>
            </div>
        );
    }
}