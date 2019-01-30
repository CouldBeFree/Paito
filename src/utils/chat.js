import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export const message = (msg, user) => {
    /*const msgObject = {
        author: user,
        message: msg
    };*/
    socket.emit('chat message', msg, user)
};

export const recieveMessage = (mag) => {
    socket.on('chat message', (msg) => {
        return msg
    })
};