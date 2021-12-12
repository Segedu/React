import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Persons extends Component {
    state = { isRedirect: false };
    render() {
        if (this.state.isRedirect) {
            return <Redirect to="/AddPerson" />
        }
        return (
            <div>
                <button onClick={() => this.setState({ isRedirect: true })}>Add Person</button>
                <h1> Hello. Welcome to Persons Page</h1>
            </div>)
    }
}
export default Persons;