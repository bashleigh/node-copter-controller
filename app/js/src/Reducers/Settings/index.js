import config from './config';

export default (state = config.initialState, action = {}) => {
    switch (action.type) {
        case config.actions.copter:
            return {
                ...state,
                copter: {
                    name: action.name,
                    ESCs: action.ESCs,
                },
            };
            break;
        default:
            return state;
    }
};