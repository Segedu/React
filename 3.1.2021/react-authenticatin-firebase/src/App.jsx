import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Authenticated from './pages/Authenticated';
import { BrowserRouter, Switch, Route, Link, Router, Redirect, } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <BrowserRouter>
      <ChangePassword setAuth={setAuth} auth={auth} />
      <div className="App">
        {!auth ? (
          <>
            <Link to="/">Home</Link><span> | </span>
            <Link to="/Login">Login</Link><span> | </span>
            <Link to="/Register">Register</Link><span> | </span>
          </>) :
          <Redirect to="/" />}
        {auth ? (<>
          <Link to="/">Home</Link><span> | </span>
          <Link to="/Authenticated">Authenticated</Link><span> | </span>
        </>
        ) : <Redirect to="/Login" />}
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/Login" render={() => <Login setAuth={setAuth} />} />
          <Route exact path="/Register" render={() => <Register setAuth={setAuth} />} />
          <Route exact path="/Authenticated" render={() => <Authenticated email={auth.email} />} />
        </Switch>
        {auth ? <Logout setAuth={setAuth} /> : <Redirect to="/" />}
      </div>
    </BrowserRouter >
  )

}

export default App
