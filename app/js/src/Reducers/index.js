import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import menu from './Menu';
import controller from './Controller';
import settings from './Settings';
import {reducer as form} from 'redux-form';
import data from './Data';

export default combineReducers({
    routing: routerReducer,
    menu,
    controller,
    settings,
    form: form,
    data,
});