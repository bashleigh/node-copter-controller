import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect(
    state => (state),
)
export default class ESCReading extends Component
{
    test = [
        30,
        50,
        80,
        91,
    ];

    render = () => {
        return (
            <div>
                {this.test.map((value, i) => (
                    <progress key={i}
                              className={`progress${value >= 70 && value < 90 ? ' is-warning' : (value >= 90) ? ' is-danger' : ' is-success'}`}
                              value={value}
                              max="100">
                        {value}%
                    </progress>
                ))}
            </div>
        );
    }
}