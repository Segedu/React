import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import TwoCounters from './TwoCounters';
import TwoCountersShort from './TwoCountersShort';
import DoNotMutateState from './DoNotMutate';
import Mounted from './Mounted';

function App() {

  return (
    <div className="App">
      <TwoCounters initialValue={3} initialValue2={11} />
      <TwoCountersShort />
      <DoNotMutateState/>
      <Mounted/>
    </div>
  )
}

export default App
