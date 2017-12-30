import React, {Component} from 'react';
import {
    Navbar,
    Router,
} from './Components';

export default class App extends Component
{
    render = () => {
        return (
            <main>
                <Navbar/>
                <Router/>
            </main>
        );
    }
}