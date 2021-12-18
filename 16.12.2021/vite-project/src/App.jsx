import { useState } from 'react'
import './App.css'
import Posts from './components/Posts';
import TitleCounter from './components/TitleCounter';
import GetPostById from './components/GetPostById';
import ClearDom from './components/ClearDom';

function App() {
  return (
    <div className="App">
      {/* <Posts /> */}
      {/* <TitleCounter /> */}
      <GetPostById id={5} />
      <ClearDom/>
    </div>
  )
}

export default App
