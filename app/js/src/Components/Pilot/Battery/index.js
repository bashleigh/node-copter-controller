import React , {Component} from 'react';
import {connect} from 'react-redux';

@connect(
    state => (state),
)
export default class Battery extends Component
{
    render = () => {
        return (
            <div className="tile is-child">
                Battery life remaining
                <br/>
                {this.renderBattery()} {this.props.data.battery}%
            </div>
        );
    };

    renderBattery = () => {
        if (this.props.data.battery >= 75) return <span className="fa fa-battery-full"></span>;
        else if (this.props.data.battery >= 50) return  <span className="fa fa-battery-three-quarters"></span>;
        else if (this.props.data.battery >= 25) return  <span className="fa fa-battery-half"></span>;
        else if (this.props.data.battery >= 10) return  <span className="fa fa-battery-quarter"></span>;
        return  <span className="fa fa-battery-empty"></span>;
    }
}