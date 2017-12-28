import React, {Component} from 'react';

export default class Menu extends Component {
    render = () => {
        return (
            <div className={`menu${(this.props.active) ? ' is-active' : ''}`}>
                <a href="#" className="navbar-item">Stuff</a>
                <a href="#" className="navbar-item">Settings</a>
            </div>
        );
    }
}