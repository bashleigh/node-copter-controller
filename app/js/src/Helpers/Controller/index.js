import React, {Component} from 'react';
import Driver from './Driver';
import {connect} from 'react-redux';

@connect(
    state => state,
)
export default class Controller extends Component
{
    render = () => {
        return (
            <div className="driver">
                <Driver/>
            </div>
        )
    }
}