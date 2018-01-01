import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Controller as Con,
    ESCReading,
} from './../../Components';

@connect(
    state => (state),
)
export default class Controller extends Component
{
    render = () => {
        return (
            <div className="tile is-parent">
                <div className="tile">
                    <div className="tile is-child box">
                        <Con/>
                    </div>
                    <div className="tile is-child box">
                        <ESCReading/>
                    </div>
                </div>
            </div>
        );
    }
}