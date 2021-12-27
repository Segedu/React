import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Comments from './components/Comments';
import Albums from './components/Albums';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Comments /> */}
      <Albums />
    </div>
  )
}

export default App
