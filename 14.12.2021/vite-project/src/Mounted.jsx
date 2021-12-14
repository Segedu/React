import React, { useState } from "react";
import { useEffect } from 'react';


const Mounted = ({ initialValue, initialValue2 }) => {
    const [count, setCount] = useState(initialValue)
    const [count2, setCount2] = useState(initialValue2)
    useEffect(() => {
        console.log("mounted");
    }, []);
    return <div>

        <button onClick={() => setCount(count + 1)}>Click</button>
        <p >counter: {count}</p>

        <button onClick={() => setCount2(count2 + 1)}>Click</button>
        <p >counter: {count2}</p>
    </div>
}

export default Mounted;