import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to='/' className='link'>Home</Link><img className='tinkerbell' src="https://cdn-icons-png.flaticon.com/128/1583/1583495.png"></img>
        <Link to='/Login' className='link'>Login</Link><img className='tinkerbell' src="https://cdn-icons-png.flaticon.com/128/1583/1583495.png"></img>
        <Link to='/Register' className='link'>Register</Link>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>);
}
export default App;