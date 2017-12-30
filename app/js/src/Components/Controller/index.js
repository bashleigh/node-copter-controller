import React, {Component} from 'react';

const speed = 2;
const loopInterval = 100;

export default class Controller extends Component
{

    state = {
        pitch: 0,
        throttle: 0,
        rotateZ: 0,
        yawY: 0,
        nudgeThrottle: 0,
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
        activeKeys: [],
        deactivatingKeys: [],
    };

    loop = null;

    /**
     *
     */
    componentDidMount = () => {
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
        this.loop = setInterval(this.checkKeys, loopInterval);
    };

    /**
     *
     */
    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.keyDown);
        window.removeEventListener('keyup', this.keyUp);
        this.loop = null;
    };

    /**
     *
     * @returns {XML}
     */
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

    /**
     *
     * @param direction
     */
    pitch = (direction = 0) => {
        direction = (direction >= 1) ? 1 : (direction <= -1) ? -1 : 0;
        if (this.state.pitch === direction) return;

        this.setState((state) => ({
            pitch: direction,
        }));
    };

    /**
     *
     * @param direction
     */
    yawY = (direction = 0) => {
        direction = (direction >= 1) ? 1 : (direction <= -1) ? -1 : 0;
        if (this.state.yawY === direction) return;

        this.setState((state) => ({
            yawY: direction,
        }));
    };

    /**
     *
     * @param increase
     */
    throttle = (increase = true) => {
        if ((increase && this.state.throttle >= 100) || (!increase && this.state.throttle <= 0)) return;

        this.setState((state) => ({
            throttle: (increase === true) ? state.throttle += speed : state.throttle -= speed,
        }));
    };

    /**
     * Increase decrease throttle by a margin
     * @param direction
     */
    nudgeThrottle = (direction = 0) => {
        direction = (direction >= 1) ? 1 : (direction <= -1) ? -1 : 0;
        if (this.state.nudgeThrottle === direction) return;

        this.setState((state) => ({
            nudgeThrottle: direction,
            throttle: state.throttle += (direction*2),
        }));
    };

    /**
     *
     * @param direction
     */
    rotateZ = (direction = 0) => {
        direction = (direction >= 1) ? 1 : (direction <= -1) ? -1 : 0;
        if (this.state.rotateZ === direction) return;

        this.setState((state) => ({
            rotateZ: direction,
        }));
    };

    /**
     *
     * @param event
     */
    keyDown = (event) => {
        if (!Object.keys(this.state.keyMap).includes(event.key)) return;

        this.setState((state) => ({
            activeKeys: state.activeKeys.concat([event.key]),
        }));
    };

    /**
     *
     * @param event
     */
    keyUp = (event) => {
        if (!Object.keys(this.state.keyMap).includes(event.key)) return;

        this.setState((state) => ({
            activeKeys: state.activeKeys.filter((i) => {return i !== event.key}),
            deactivatingKeys: state.deactivatingKeys.concat([event.key]),
        }));
    };

    /**
     * Iterator to check which keys are currently pressed
     */
    checkKeys = () => {
        this.state.activeKeys.forEach((keycode) => {
            if (Object.keys(this.state.keyMap).includes(keycode)) {
                this[Object.keys(this.state.keyMap[keycode])[0]].apply(this, Object.values(this.state.keyMap[keycode])[0]);
            }
        });

        this.state.deactivatingKeys.forEach((keycode) => {
            if ([
                    'yawY',
                    'pitch',
                    'rotateZ',
                    'nudgeThrottle',
                ].includes(Object.keys(this.state.keyMap[keycode])[0])) {
                this[Object.keys(this.state.keyMap[keycode])[0]].apply(this, [0]);
            }

            this.setState((state) => ({
                deactivatingKeys: state.deactivatingKeys.filter((i) => {return i !== keycode}),
            }));
        });
    };
}