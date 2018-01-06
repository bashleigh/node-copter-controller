export default {
    initialState: {
        copter: {
            name: 'Untitled',
            ESCs: 4,
        },
        keyMaps: [],
        driver: {
            input: 'keyboard',
        },
    },
    actions: {
        copter: 'settings/SET_COPTER',
        calibrate: 'settings/CALIBRATE',
    },
};