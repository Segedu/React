import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class AddPerson extends Component {
    state = { name: "", age: "", biography:"", redirect: false}
    addPerson = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state.name, this.state.age, this.state.biography);
        this.setState({redirect: true})
    }
    render() {
        if (this.state.redirect == true) {
            return <Redirect to="/Persons" />
        }
        return (<div>
            <h3> Hello.<br></br> Welcome to Add Persons Page.</h3>
            <form action="">
                <input type="text" placeholder="NAME" onChange={(e) => { this.setState({ name: e.target.value }) }}></input><br></br>
                <input type="number" placeholder="AGE" onChange={(e) => { this.setState({ age: e.target.value }) }}></input><br></br><br></br>
                <textarea onChange={(e) => { this.setState({ biography: e.target.value }) }} placeholder="biography" rows="4" cols="30"  /><br></br>
                <button onClick={this.addPerson}>Add to Person List</button>
            </form>
        </div>)
    }
}
export default AddPerson;