import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Authenticated from './pages/Authenticated';
import { BrowserRouter, Switch, Route, Link, Router, Redirect, } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link><span> | </span>
        <Link to="/Login">Login</Link><span> | </span>
        <Link to="/Register">Register</Link><span> | </span>
        <Link to="/Authenticated">Authenticated</Link>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/Login" render={() => auth ? <Redirect to="/Authenticated" /> : <Login setAuth={setAuth} />} />
          <Route exact path="/Register" render={() => auth ? <Redirect to="/" /> : <Register setAuth={setAuth} />} />
          <Route exact path="/Authenticated" render={() => auth ? <Authenticated email={auth.email} /> : <Redirect to="/Login" />} />
        </Switch>
        {auth ? <Logout setAuth={setAuth} /> : ""}
      </div>
    </BrowserRouter>
  )
}

export default App
