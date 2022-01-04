import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter initialState={{ count: 0 }} />
    </div>
  )
}

export default App
