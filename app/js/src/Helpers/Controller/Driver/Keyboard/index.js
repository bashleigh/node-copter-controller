import React, {Component} from 'react';
import {connect} from 'react-redux';
import config from './../../../../Reducers/Controller/config';
import DataConfig from './../../../../Reducers/Data/config';

@connect(
    state => (state),
    dispatch => ({
        pitch: (direction) => dispatch({
            type: config.actions.pitch,
            direction: direction,
        }),
        yawY: (direction) => dispatch({
            type: config.actions.yawY,
            direction: direction,
        }),
        rotateZ: (direction) => dispatch({
            type: config.actions.rotateZ,
            direction: direction,
        }),
        nudgeThrottle: (direction) => dispatch({
            type: config.actions.nudgeThrottle,
            direction: direction,
        }),
        activeKeys: (key) => dispatch({
            type: config.actions.activateKey,
            key: key,
        }),
        deactivateKeys: (key) => dispatch({
            type: config.actions.deactivateKey,
            key: key,
        }),
        removeDeactivateKey: (key) => dispatch({
            type: config.actions.removeDeactivateKey,
            key: key,
        }),
        throttle: (direction) => dispatch({
            type: config.actions.throttle,
            direction: direction,
        }),
        updateData: (data) => dispatch({
            type: DataConfig.actions.update,
            data: data,
        }),
    }),
)
export default class Keyboard extends Component
{

    state = {
        keyMap: {
            w: {
                pitch: [1],
            },
            s: {
                pitch: [-1],
            },
            a: {
                yawY: [1],
            },
            d: {
                yawY: [-1],
            },
            e: {
                nudgeThrottle: [1],
            },
            f: {
                nudgeThrottle: [-1],
            },
            ArrowUp: {
                throttle: [true],
            },
            ArrowDown: {
                throttle: [false],
            },
            ArrowLeft: {
                rotateZ: [-1],
            },
            ArrowRight: {
                rotateZ: [1],
            },
        },
    };

    loop = null;

    componentDidMount = () => {
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
        this.loop = setInterval(this.checkKeys, process.env.LOOP_INTERVAL);
        this.props.socket.on('data', (data) => {
            //TODO delay the call as it seems to slow down react
            this.props.updateData(data);
        });
    };

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.keyDown);
        window.removeEventListener('keyup', this.keyUp);
        this.loop = null;
        this.props.socket.emit('end', null);
    };

    render = () => {
        return (
            <div className="tile is-child">
                <p>Keyboard driver</p>
            </div>
        );
    };

    checkKeys = () => {

        this.props.controller.activeKeys.forEach((keycode) => {
            if (Object.keys(this.state.keyMap).includes(keycode)) {
                this.props[Object.keys(this.state.keyMap[keycode])[0]].apply(this, Object.values(this.state.keyMap[keycode])[0]);
                this.props.socket.emit(Object.keys(this.state.keyMap[keycode])[0], this.props.controller[Object.keys(this.state.keyMap[keycode])[0]]);
            }
        });

        this.props.controller.deactivatingKeys.forEach((keycode) => {
            if ([
                    'yawY',
                    'pitch',
                    'rotateZ',
                    'nudgeThrottle',
                ].includes(Object.keys(this.state.keyMap[keycode])[0])) {
                this.props[Object.keys(this.state.keyMap[keycode])[0]].apply(this, [0]);
                this.props.socket.emit(Object.keys(this.state.keyMap[keycode])[0], 0);
            }

            this.props.removeDeactivateKey(keycode);
        });
    };

    /**
     *
     * @param event
     */
    keyDown = (event) => {
        if (!Object.keys(this.state.keyMap).includes(event.key)) return;

        this.props.activeKeys(event.key);
    };

    /**
     *
     * @param event
     */
    keyUp = (event) => {
        if (!Object.keys(this.state.keyMap).includes(event.key)) return;

        this.props.deactivateKeys(event.key);
    };
}