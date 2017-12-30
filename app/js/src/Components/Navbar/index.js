import React, {Component} from 'react';
import Menu from '../Menu/index';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

@connect(
    state => (state),
    dispatch => ({
        toggleMenu: () => dispatch({
            type: 'menu/TOGGLE',
        }),
    }),
)
export default class Navbar extends Component
{
    render = () => {
        return (
            <header>
                <nav className="navbar is-primary level">
                    <div className="navbar-left">
                        <div className="navbar-burger" onClick={(event) => {this.props.toggleMenu()}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="level-item">
                        <div className="">
                            <Link to="/" className="has-text-white">
                                <h2><span className="fa fa-gamepad"></span> Copter Controller</h2>
                            </Link>
                        </div>
                    </div>
                </nav>
                <Menu/>
            </header>
        );
    };
}