import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

/**
 *
 * @param history
 * @param reducers
 * @param sagas
 * @param data
 * @returns {*}
 */
export default (history, reducers = {}, sagas = [], initialState = {}) => {

    const reduxRouterMiddleware =  routerMiddleware(history);
    const reduxSagaMiddleware = createSagaMiddleware();

    const middleware = [
        reduxRouterMiddleware,
        reduxSagaMiddleware,
        thunk,
    ];

    let finalCreateStore;
    if (process.env.ENV === 'development' && window.devToolsExtension) {
        const { persistState } = require('redux-devtools');
        finalCreateStore = compose(
            applyMiddleware(...middleware),
            window.devToolsExtension(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
        )(_createStore);
    } else {
        finalCreateStore = compose(applyMiddleware(...middleware))(_createStore);
    }

    const store = finalCreateStore(reducers, initialState);

    sagas.forEach((saga) => {
        reduxSagaMiddleware.run(saga);
    });

    return store;

}