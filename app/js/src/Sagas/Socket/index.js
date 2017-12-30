import openSocket from 'socket.io-client';
import {effects} from 'redux-saga';
import config from './../../Reducers/Socket/config';

let socket = null;

export default function* saga() {
    yield effects.all([
        effects.fork(emit),
        effects.fork(on),
        effects.fork(setStatus),
        effects.fork(connect),
    ]);
}

function* connect() {
    while(true) {
        const action = yield effects.take(config.actions.connect);

        socket = openSocket(`${process.env.SECURE_SOCKET ? 'https' : 'http'}://${process.env.SOCKET_URL}:${process.env.SOCKET_PORT}`);
    }
}

function* emit() {
    while(true) {
        const action = yield effects.take(config.actions.emit);

        socket.emit(action.name, action.payload);

    }
}

function* on() {
    while(true) {
        const action = yield effects.take(config.actions.on);

        socket.on(action.on, action.func);
    }
}

function* setStatus() {
    while(true) {
        const action = yield effects.take(config.actions.statusAsync);

        if (socket) {
            effects.put({
                type: config.actions.setStatus,
                connected: socket.connected,
                disconnected: socket.disconnected,
                connecting: socket.connecting,
            });
        }
    }
}