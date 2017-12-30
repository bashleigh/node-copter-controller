export default {
    initialState: {
        pitch: 0,
        throttle: 0,
        rotateZ: 0,
        yawY: 0,
        nudgeThrottle: 0,
        activeKeys: [],
        deactivatingKeys: [],
    },
    actions: {
        pitch: 'controller/PITCH_CHANGE',
        throttle: 'controller/THROTTLE_CHANGE',
        rotateZ: 'controller/ROTATEZ_CHANGE',
        yawY: 'controller/YAWY_CHANGE',
        nudgeThrottle: 'controller/NUDGE_THROTTLE_CHANGE',
        activateKey: 'controller/ACTIVATE_KEY',
        deactivateKey: 'controller/DEACTIVATE_KEY',
        removeDeactivateKey: 'controller/REMOVE_DEACTIVATE_KEY',
    },
};