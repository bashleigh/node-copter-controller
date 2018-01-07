import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect(
    state => (state),
)
export default class MagneticCompass extends Component
{
    render = () => {
        return (
            <div className="tile is-child">
                <div className="compass">
                    <span>N</span>
                    <span>E</span>
                    <span>S</span>
                    <span>W</span>
                    <div className="pointer" style={{transform:`rotateZ(${this.props.data.compass.bearing}deg)`,}}>
                        <div className="inner">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}