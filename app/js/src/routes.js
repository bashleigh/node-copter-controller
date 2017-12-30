import React from 'react';
import * as pages from "./Pages";

export default [
    {
        path: '/',
        component: () => <pages.Welcome/>,
        exact: true,
    },
    {
        path: '/settings',
        component: () => <pages.Settings/>,
        exact: true,
    },
    {
        path: '/controller',
        component: () => <pages.Controller/>,
        exact: true,
    },
];