/* eslint-disable no-undef */
import React from 'react'
import io from 'socket.io-client';

export const CTX = React.createContext();

const initState = {
    general: [
        {from: 'eshaan', msg: 'Hey'},
        {from: 'aman', msg: 'Hey'},
        {from: 'Ban', msg: 'Hey'},
    ],
    topic2: [
        {from: 'eshaan', msg: 'Hey'},
        {from: 'eshaan', msg: 'Hey'},
        {from: 'eshaan', msg: 'Hey'},    
    ]
}

function reducer(state, action) {
    const {from , msg, topic} = action.payload;
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state, // Overriding in this state spread
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            }   
        default:
            return state 
    }
}

function sendChatAction(socket, value){
    socket.emit('chat message', val());
}

let socket;

export default function Store(props) {

    if(!socket) {
        socket = io(':3001');
    }
    
    const [allChats] = React.useReducer(reducer, initState);
    
    return(
        <CTX.Provider value={{allChats, sendChatAction}}>
            {props.children}
        </CTX.Provider>
    )

}