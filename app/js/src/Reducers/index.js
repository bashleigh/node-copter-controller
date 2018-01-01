import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import menu from './Menu';
import controller from './Controller';
import socket from './Socket';
import settings from './Settings';
import {reducer as form} from 'redux-form';

export default combineReducers({
    routing: routerReducer,
    menu,
    controller,
    socket,
    settings,
    form: form,
});