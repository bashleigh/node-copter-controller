export default {
    initialState: {
        connected: false,
        disconnected: false,
        connecting: false,
    },
    actions: {
        emit: 'socket/EMIT',
        status: 'socket/STATUS',
        on: 'socket/ON',
        statusAsync: 'socket/STATUS_ASYNC',
        setStatus: 'socket/SET_STATUS',
        connect: 'socket/CONNECT',
    },
};