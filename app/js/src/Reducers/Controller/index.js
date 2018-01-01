import config from './config';

export default (state = config.initialState, action = {}) => {
    switch (action.type) {
        case config.actions.pitch:
            return {
                ...state,
                pitch: action.direction,
            };
            break;
        case config.actions.yawY:
            return {
                ...state,
                yawY: action.direction,
            };
            break;
        case config.actions.nudgeThrottle:
            return {
                ...state,
                nudgeThrottle: action.direction,
            };
            break;
        case config.actions.rotateZ:
            return {
                ...state,
                rotateZ: action.direction,
            };
            break;
        case config.actions.throttle:
            return {
                ...state,
                throttle: (action.direction === false)
                    ? ((state.throttle - parseInt(process.env.THROTTLE_SPEED)) >= 0 ? state.throttle -= parseInt(process.env.THROTTLE_SPEED) : state.throttle)
                : ((state.throttle + parseInt(process.env.THROTTLE_SPEED)) <= 100) ? state.throttle += parseInt(process.env.THROTTLE_SPEED) : state.throttle,
            };
            break;
        case config.actions.activateKey:
            return {
                ...state,
                activeKeys: state.activeKeys.concat([action.key]),
            };
            break;
        case config.actions.deactivateKey:
            return {
                ...state,
                activeKeys: state.activeKeys.filter((i) => {return i !== action.key;}),
                deactivatingKeys: state.deactivatingKeys.concat([action.key]),
            };
            break;
        case config.actions.removeDeactivateKey:
            return {
                ...state,
                deactivatingKeys: state.deactivatingKeys.filter((i) => {return i !== action.key}),
            };
        default:
            return state;
    }
}