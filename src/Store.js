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
            return state ;
    }
}


let socket;

function sendChatAction(value){
    socket.emit('chat message', value);
}

export default function Store(props) {

    if(!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MESSAGE' ,payload: msg});
        });
    }
    
    const user = 'eshaan' + Math.random(100).toFixed(2); 

    const [allChats, dispatch] = React.useReducer(reducer, initState);
    
    return(
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )

}