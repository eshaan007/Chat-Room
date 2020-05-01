/* eslint-disable no-undef */
import React from 'react'

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

export default function Store(props) {
    
    const reducerHook = React.useReducer(reducer, initState);
    
    return(
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )

}