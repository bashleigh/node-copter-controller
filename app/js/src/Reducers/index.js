import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import menu from './Menu';

export default combineReducers({
    routing: routerReducer,
    menu,
});