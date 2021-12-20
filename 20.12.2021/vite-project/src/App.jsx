import { useState } from 'react';
import './App.css';
import Clock from './components/clock';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(false)}>stop clock</button>
      {show ? <Clock /> : ""}
    </div>
  )
}

export default App
