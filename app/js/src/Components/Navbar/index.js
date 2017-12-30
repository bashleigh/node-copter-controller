import React, {Component} from 'react';
import Menu from '../Menu/index';
import {connect} from 'react-redux';

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
                            <h2>Copter Controller</h2>
                        </div>
                    </div>
                </nav>
                <Menu/>
            </header>
        );
    };
}