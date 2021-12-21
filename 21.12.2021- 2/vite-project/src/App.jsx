// import { createContext, useState } from 'react'
import './App.css';
import Level1 from './components/Level1';
import { RoomContext } from './context/RoomContext';

function App() {
  const room = { name: "room", description: "This data sent from App component", number: 1 };

  return (
    <div className="App">
      <RoomContext.Provider value={room}>
        <Level1 />
      </RoomContext.Provider>
    </div >
  )
}

export default App
