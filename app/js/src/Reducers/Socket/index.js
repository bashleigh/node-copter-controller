import config from './config';

export default (state = config.initialState, action = {}) => {
    switch (action.type) {
        case config.actions.setStatus:
            return {
                ...state,
                connected: action.connected,
                connecting: action.connecting,
                disconnected: action.disconnected,
            };
            break;
        default:
            return state;
    };
}