import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressBar from './../../ProgressBar';

@connect(
    state => (state),
)
export default class Throttle extends Component
{
    render = () => {
        return (
            <div className="tile is-child">
                Throttle
                <ProgressBar value={this.props.controller.throttle}/>
            </div>
        );
    }
}