import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import routes from './../../routes';

export default (props) => {
    return (
        <div>
            {routes.map((route, key) => {
                return <Route
                    key={key}
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    />
            })}
        </div>
    );
}