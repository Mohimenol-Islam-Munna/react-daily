import React, { useRef, useEffect } from 'react'

const UseRefHook = () => {

    const useRefHook = useRef();

    useEffect(() => {
        useRefHook.current.focus();
    }, []);



    return (
        <div style={{ marginTop: "30px" }}>
            <button ref={useRefHook}>This is the useRef hook</button>
        </div>
    )
}

export default UseRefHook
