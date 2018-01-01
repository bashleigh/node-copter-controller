export default {
    initialState: {
        copter: {
            name: 'Untitled',
            ESCs: 4,
        },
        keyMaps: [],
    },
    actions: {
        copter: 'settings/SET_COPTER',
        calibrate: 'settings/CALIBRATE',
    },
};