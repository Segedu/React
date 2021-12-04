import { Component } from 'react';

class LogIn extends Component {
    name
    password
    nameChangeHandler = (input) => this.name = input.target.value

    passwordChangeHandler = (input) => this.password = input.target.value

    login = () => {
        console.log(this.name, this.password);
    }

    render() {
        return (
            <div className="LogIn">
                <h3>Log in</h3>
                <input onChange={this.nameChangeHandler} type="text" placeholder="Enter user name" /> <br />
                <input onChange={this.passwordChangeHandler} type="password" placeholder="Enter Password" /> <br />
                <button onClick={this.login} id="button" >log in without validation</button>
            </div>
        )
    }
}

export default LogIn;
