import { useState } from 'react';
import './App.css';
import Clock from './components/clock';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Focus from './components/Focus';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setShow(false)}>stop clock</button>
      {show ? <Clock /> : ""} */}
      {/* <Counter1 /> */}
      <Focus />
      <Counter2 />
    </div>
  )
}

export default App
