import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProgressBar from './../../ProgressBar';

@connect(
    state => (state),
)
export default class ESCReading extends Component
{
    render = () => {
        return (
            <div className="tile is-child">
                {this.props.data.ESCs.map((value, key) => (
                    <ProgressBar value={value} key={key}>{value}%</ProgressBar>
                ))}
            </div>
        );
    };
}