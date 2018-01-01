import config from './config';

export default (state = config.initialState, action = {}) => {
    switch(action.type) {
        case config.actions.update:
            return {
                ...state,
                ...action.data,
            };
            break;
        default:
            return state;
    }
}