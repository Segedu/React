import React, { useState } from "react";

const TwoCountersShort = () => {
    const [{ counter1, counter2 }, setCounter] = useState({ counter1: 0, counter2: 2 })
    return <div>
        <button onClick={() => setCounter({ counter1: counter1 + 1, counter2: counter2 })}>Click</button>
        <p >counter: {counter1}</p>
        <button onClick={() => setCounter({ counter1: counter1, counter2: counter2 + 1 })}>Click</button>
        <p>counter:{counter2}</p>
    </div>
}

export default TwoCountersShort;