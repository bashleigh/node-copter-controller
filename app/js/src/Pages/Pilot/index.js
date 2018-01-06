import React, {Component} from 'react';
import {connect} from 'react-redux';
import components from './../../pilotComponents';

@connect(
    state => (state),
)
export default class Pilot extends Component
{
    render = () => {
        return (
            <div className="tile is-parent pilot">
                {components.map((component, key) => {
                    return React.cloneElement(component, {key: key})
                })}
            </div>
        );
    }
}