import React, {Component} from 'react';

const speed = 2;

export default class Controller extends Component
{

    state = {
        pitch: 0,
        throttle: 0,
        rotateZ: 0,
        yawY: 0,
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

    componentDidMount = () => {
        this.listeners();
    };

    render = () => {
        return (
            <div className="section">
                <p>Throttle: {this.state.throttle}%</p>
                <p>Pitch: {(this.state.pitch === 1) ? 'forward' : (this.state.pitch === -1) ? 'backwards' : 'stationary'}</p>
                <p>Yaw: {(this.state.yawY === 1) ? 'left' : (this.state.yawY === -1) ? 'right' : 'stationary'}</p>
                <p>Rotate: {(this.state.rotateZ === 1) ? 'rotate left' : (this.state.rotateZ === -1) ? 'rotate right' : 'stationary'}</p>
            </div>
        );
    };

    pitch = (direction = 0) => {
        direction = (direction >= 1) ? 1 : (direction <= -1) ? -1 : 0;
        if (this.state.pitch === direction) return;

        this.setState((state) => ({
            pitch: direction,
        }));
    };

    yawY = (direction = 0) => {
        direction = (direction >= 1) ? 1 : (direction <= -1) ? -1 : 0;
        if (this.state.yawY === direction) return;

        this.setState((state) => ({
            yawY: direction,
        }));
    };

    throttle = (increase = true) => {
        if ((increase && this.state.throttle >= 100) || (!increase && this.state.throttle <= 0)) return;

        this.setState((state) => ({
            throttle: (increase === true) ? state.throttle += speed : state.throttle -= speed,
        }));
    };

    rotateZ = (direction = 0) => {
        direction = (direction >= 1) ? 1 : (direction <= -1) ? -1 : 0;
        if (this.state.rotateZ === direction) return;

        this.setState((state) => ({
            rotateZ: direction,
        }));
    };

    listeners = () => {
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
    }

    keyDown = (event) => {
        if (Object.keys(this.state.keyMap).includes(event.key)) {

            this[Object.keys(this.state.keyMap[event.key])[0]].apply(this, Object.values(this.state.keyMap[event.key])[0]);
        }
    }

    keyUp = (event) => {
        if (Object.keys(this.state.keyMap).includes(event.key)) {

            //Reset to 0 (no spaceships in node...)
            if (['yawY', 'pitch', 'rotateZ'].includes(Object.keys(this.state.keyMap[event.key])[0])) {

                this[Object.keys(this.state.keyMap[event.key])[0]].apply(this, [0]);
            }
        }
    }

}