import './App.css';
import Home from './pages/HomePage';
import Persons from './pages/Persons';
import AddPerson from './pages/AddPerson';
import Details from './pages/Details'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  state = {
    persons: [
      { name: "Avi", age: 23, biography: "living in Tel-Aviv. Student at tech-career" },
      { name: "Dan", age: 25, biography: "living in Jerusalem. Student at The hebrew university" }
    ]
  };
  currentBiography = "";
  currentName = "";
  currentAge = "";

  setCurrentPerson = (name, age, biography) => {
    this.currentName = name;
    this.currentAge = age;
    this.currentBiography = biography;
  }

  addPerson = (name, age, biography) => {
    const newPersons = [...this.state.persons];
    newPersons.push({ name, age, biography });
    this.setState({ persons: newPersons })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to='/'>Home</Link> <span> | </span>
          <Link to='/Persons'>Persons</Link><hr />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Persons' render={() => <Persons setCurrentPerson={this.setCurrentPerson} persons={this.state.persons} />} />
            <Route exact path='/AddPerson' render={() => <AddPerson addPerson={this.addPerson} />} />
            <Route exact path='/Details' render={() => <Details name={this.currentName} age={this.currentAge} biography={this.currentBiography} />} />
          </Switch>
        </div>
      </BrowserRouter>);
  }
}
export default App;
