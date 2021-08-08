import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState({
        value: 0,
        name: "increment",
    });

    console.log(window.localStorage.setItem("user_name", "mohimenol islam munna"));

    const onIncrementHandler = () => {

        setCount((previousState) => {

            return {
                ...previousState,
                value: count.value + 10,
            }
        });

        console.log(localStorage.getItem("user_name"))

    }

    return (
        <div>
            <h2>useState hook</h2>
            <div>
                <h2>Count: -{count.value}</h2>
                <button onClick={onIncrementHandler}>Increment</button>
            </div>
        </div>
    )
}

export default UseState
