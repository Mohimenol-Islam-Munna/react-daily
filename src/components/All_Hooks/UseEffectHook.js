import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {

    const [start, setStart] = useState(false);

    useEffect(() => {
        console.log("use effect hook");
    }, [])



    return (
        <div>
            <h2>Practice UseEffect Hook</h2>

        </div>
    )
}

export default UseEffectHook
