import { useState } from 'react'
import './App.css'
import Posts from './components/Posts';
import TitleCounter from './components/TitleCounter';
import GetPostById from './components/GetPostById';
import ClearDom from './components/ClearDom';

function App() {
  const [flag, setFlag] = useState(true);

  const click = () => {
    setFlag(!flag)
  }

  return (
    <div className="App">
      {/* <Posts /> */}
      <hr />
      {/* <TitleCounter /> */}
      <hr />
      {/* <GetPostById id={5} /> */}
      <hr />
      <button onClick={click}>{flag ? "Unmount" : "Mount"}</button>
      {flag ? <ClearDom /> : ""}
    </div>
  )
}

export default App
