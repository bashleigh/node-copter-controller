import React from 'react';
import ReactDOM from 'react-dom';

import dotenv from 'dotenv';
dotenv.config();

import App from './src';
import {
    Provider,
} from 'react-redux';
import {
    createHashHistory,
} from 'history';
import {
    syncHistoryWithStore,
} from 'react-router-redux';
import {
    CreateStore,
} from './src/Helpers';
import {
    HashRouter as Router,
} from 'react-router-dom';
import {
    persistCombineReducers,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './src/Reducers';


const browserHistory = createHashHistory();
const store = CreateStore(browserHistory, reducers);
const history = syncHistoryWithStore(browserHistory, store);

persistStore(store);

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store} key="copter-controller">
        <Router>
            <App/>
        </Router>
    </Provider>,
    app
);