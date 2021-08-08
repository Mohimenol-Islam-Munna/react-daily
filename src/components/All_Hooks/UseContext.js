import React, { useContext } from 'react'

import { CounterContext } from './UseReducerHook'


function UseContext() {

    const count = useContext(CounterContext);

    return (
        <div>
            <h2>Use context hook</h2>
            <h2>Count :- {count.count.value}</h2>

            <button onClick={() => count.countDispatch({ type: "INCREMENT", payload: 5 })}>
                increment
            </button>

            <button onClick={() => count.countDispatch({ type: "DECREMENT", payload: 5 })}>
                decrement
            </button>

            <button onClick={() => count.countDispatch({ type: "RESET" })}>
                reset
            </button>
        </div>
    )
}

export default UseContext
