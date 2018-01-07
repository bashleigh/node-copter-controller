import React, {Component} from 'react';
import {connect} from 'react-redux';

@connect(
    state => (state),
)
export default class HorizonGyro extends Component
{
    render = () => {
        return (
            <div className="tile is-child">
                <div className="horizon-gyro">
                    <div className="surround">
                        <div className="inner" style={{marginTop: `${-50+this.props.data.pitch}%`, transform: `rotateZ(${this.props.data.yaw}deg)`,}}>
                            <div className="blue">
                                <div className="dial">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="brown">
                                <div className="dial">
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer">
                        <div className="inner">
                            <div className="left">
                            </div>
                            <div className="middle">
                            </div>
                            <div className="right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}