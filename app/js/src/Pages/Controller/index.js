import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Controller as Con,
} from './../../Components';

@connect(
    state => (state),
)
export default class Controller extends Component
{
    render = () => {
        return (
            <Con/>
        );
    }
}