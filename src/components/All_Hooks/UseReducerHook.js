import React, { useReducer } from 'react'

import UseContext from './UseContext'


// inital state 
const initialState = {
    value: 10,
}

// reducer function 
const countReducer = (state, action) => {

    switch (action.type) {

        case "INCREMENT":
            return {
                value: state.value + action.payload,
            }

        case "DECREMENT":
            return {
                value: state.value - action.payload,
            }

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

// counter context 
export const CounterContext = React.createContext();

const UseReducerHook = () => {

    const [count, countDispatch] = useReducer(countReducer, initialState);

    return (
        <CounterContext.Provider value={{ count: count, countDispatch: countDispatch }}>
            <div>
                <UseContext />
            </div>
        </CounterContext.Provider>
    )
}

export default UseReducerHook
