import './App.css';
import Home from './pages/HomePage';
import Persons from './pages/Persons';
import AddPerson from './pages/AddPerson';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to='/'>Home</Link> <span> | </span>
        <Link to='/Persons'>Persons</Link><hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Persons' component={Persons} />
          <Route exact path='/AddPerson' component={AddPerson} />
        </Switch>
      </div>
    </BrowserRouter>);
}
export default App;
