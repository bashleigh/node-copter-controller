import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect(
    state => (state),
)
export default class Settings extends Component
{
    render = () => {
        return (
            <div>
                <h1>Settings</h1>
            </div>
        );
    };
}