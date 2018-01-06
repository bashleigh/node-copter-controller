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
                <ProgressBar value={this.props.controller.throttle}/>
            </div>
        );
    }
}