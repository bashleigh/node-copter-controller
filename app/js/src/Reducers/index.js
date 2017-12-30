import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import menu from './Menu';
import controller from './Controller';
import socket from './Socket';

export default combineReducers({
    routing: routerReducer,
    menu,
    controller,
    socket,
});