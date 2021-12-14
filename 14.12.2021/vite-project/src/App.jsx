import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import TwoCounters from './TwoCounters';
import TwoCountersShort from './TwoCountersShort';


function App() {

  return (
    <div className="App">
      <TwoCounters initialValue={3} initialValue2={11} />
      <TwoCountersShort />
    </div>
  )
}

export default App
