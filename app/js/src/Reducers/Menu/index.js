import config from './config';

export default (state = config.initialState, action = {}) => {
    switch (action.type) {
        case config.OPEN:
            return {
                ...state,
                open: true,
            };
            break;
        case config.CLOSE:
            return {
                ...state,
                open: false,
            };
            break;
        case config.TOGGLE:
            return {
                ...state,
                open: !state.open,
            };
            break;
        default:
            return state;
            break;
    }
};