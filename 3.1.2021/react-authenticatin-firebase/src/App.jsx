import { useState } from 'react'
import './App.css';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <div className="App">
      {/* <Register setAuth={setAuth} /> */}
      {auth ? <Logout setAuth={setAuth} /> : <Login setAuth={setAuth} />}
    </div>
  )
}

export default App
