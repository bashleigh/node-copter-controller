import React, {Component} from 'react';
import Keyboard from './Keyboard';
import {connect} from 'react-redux';
import io from 'socket.io-client';

@connect(
    state => (state),
)
export default class Driver extends Component
{
    getDriver = () => {

        const socket = io(`${process.env.SECURE_SOCKET ? 'https' : 'http'}://${process.env.SOCKET_URL}:${process.env.SOCKET_PORT}`);

        switch(this.props.settings.driver.input) {
            default:
            case 'keyboard':
                return (<Keyboard socket={socket}/>);
                break;
        }
    };

    render = () => {
        return this.getDriver();
    };
}