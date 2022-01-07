import { useReducer } from 'react';
import counterReducer from '../reducer/counterReducer';

const Counter = ({ initialState }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <>
            Counter: {state.count}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </>
    );
}

export default Counter;