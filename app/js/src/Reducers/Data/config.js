export default {
    initialState: {
        ESCs: [
            23,
            45,
            46,
            82,
        ],
        battery: 0,
        GPS: {
            long: null,
            lat: null,
        },
        compass: {
            bearing: 0,
        },
        yaw: 0,
        pitch: 0,
    },
    actions: {
        update: 'data/UPDATE',
    },
};