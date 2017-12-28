import React, {Component} from 'react';
import Menu from './../menu';

export default class Navbar extends Component
{
    state = {
        menu: {
            open: false,
        },
    };

    render = () => {
        return (
            <header>
                <nav className="navbar is-primary level">
                    <div className="navbar-left">
                        <div className="navbar-burger" onClick={(event) => {this.toggleMenu()}}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="level-item">
                        <div className="navbar-item">
                            <h2>Copter Controller</h2>
                        </div>
                    </div>
                </nav>
                <Menu active={this.state.menu.open}/>
            </header>
        );
    }

    toggleMenu = () => {
        this.setState((state) => ({
            menu: {
                open: !state.menu.open,
            },
        }));
    }
}