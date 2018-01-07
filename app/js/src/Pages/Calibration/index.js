import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect(
    state => (state),
    dispatch => ({

    }),
)
export default class Settings extends Component
{
    render = () => {
        return (
            <div className="section">
                <h1 className="title">Calibration</h1>
            </div>
        );
    };

}