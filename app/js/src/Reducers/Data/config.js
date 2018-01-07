export default {
    initialState: {
        ESCs: [
        ],
        battery: 0,
        GPS: {
            long: null,
            lat: null,
        },
        compass: {
            bearing: 0,
        },
    },
    actions: {
        update: 'data/UPDATE',
    },
};