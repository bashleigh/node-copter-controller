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
        path: '/pilot',
        component: () => <pages.Pilot/>,
        exact: true,
    },
    {
        path: '/changelog',
        component: () => <pages.ChangeLog/>,
        exact: true,
    },
    {
        path: '/calibrate',
        component: () => <pages.Calibration/>,
        exact: true,
    },
];