import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Persons extends Component {
    state = {
        isRedirect: false,
        reDirectToDetails: false,
    };
    render() {
        if (this.state.isRedirect) {
            return <Redirect to="/AddPerson" />
        }
        if (this.state.reDirectToDetails) {
            return <Redirect to="/Details" />
        }
        return (
            <div>
                <button onClick={() => this.setState({ isRedirect: true })}>Add Person</button>
                <h1> Hello. Welcome to Persons Page</h1>
                {this.props.persons.map((person, i) => (
                    <p key={i}> {person.name}, {person.age}
                        <br /> <button onClick={() => {
                            this.props.setCurrentPerson(person.name, person.age, person.biography);
                            this.setState({ reDirectToDetails: true });
                        }
                        } >Details</button>

                    </p>))}

            </div>)
    }
}
export default Persons;