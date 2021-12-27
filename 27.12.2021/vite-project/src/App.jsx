import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Comments from './components/Comments';
import Albums from './components/Albums';
import Albums1 from './components/Albums1';
import Comments2 from './components/Comments2';
import useEmailLocalStorage from './components/hooks/useEmailLocalStorage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Comments /> */}
      {/* <Albums /> */}
      <Albums1 />
      <Comments2 />
      <useEmailLocalStorage/>
    </div>
  )
}

export default App
