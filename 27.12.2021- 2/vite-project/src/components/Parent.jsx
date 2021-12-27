import { useState, useEffect, useMemo } from 'react';
import Child from './Child';

const Parent = () => {
    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(0);
    const memoChild = useMemo(isIncreased, [count]);

    function isIncreased() {
        return <Child count={count} />
    }
    return (<div>
        <p style={{ color: flag ? "green" : "red" }} onClick={() => {
            setFlag(!flag)
        }} > Hello world</p >
        <button onClick={() => { setCount(count + 1) }}>increase</button>
        {memoChild}
    </div>
    )
}

export default Parent;