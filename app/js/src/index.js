import React, {Component} from 'react';
import Navbar from './navbar';
import Controller from './Controller';

export default class App extends Component
{

    render = () => {
        return (
            <main>
                <Navbar/>
                <Controller/>
            </main>
        );
    }
}