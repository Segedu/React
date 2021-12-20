import { useEffect, useState } from "react";

const Counter1 = () => {
    const [counterWithClosure, setCounterWithClosure] = useState(0);
    useEffect(() => {
        setInterval(() => {
            console.log("timer");
            setCounterWithClosure(counterWithClosure + 1)
        }, 1000)
    }, [])
    return (<p>{counterWithClosure}</p>)
}
export default Counter1;