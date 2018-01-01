import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './Form';
import config from './../../Reducers/Settings/config';

@connect(
    state => (state),
    dispatch => ({
        update: (values) => dispatch({
            type: config.actions.copter,
            name: values.name,
            ESCs: values.ESCs,
        }),
    }),
)
export default class Settings extends Component
{
    render = () => {
        return (
            <div className="section">
                <h1 className="title">Settings</h1>
                <Form onSubmit={this.save}/>
            </div>
        );
    };

    save = (values) => {
        this.props.update(values.copter);
    };
}