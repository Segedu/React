import { useEffect, useRef, useState } from 'react';

const Counter2 = () => {
    const [counter, setCounter] = useState(0);
    const counterRef = useRef(0);
    counterRef.current = counter;

    useEffect(() => {
        setInterval(() => {
            console.log("timer");
            setCounter(counterRef.current + 1)
        }, 1000)
    }, [])

    return (<p>{counter}</p>)
}

export default Counter2;