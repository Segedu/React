import { Component } from 'react';
import './css/LogInWithValidation.css';

class LogInWithValidation extends Component {
    state = { name: "", password: "" }
    nameChangeHandler = (input) => this.setState({ name: input.target.value })
    passwordChangeHandler = (input) => this.setState({ password: input.target.value })
    login = () => { console.log(this.state.name, this.state.password) };
    isValidationOk = () => this.state.password.length > 5 && this.state.name.length > 3;

    render() {
        const { name, password } = this.state;
        const passColor = { color: password.length <= 5 ? "red" : "black" }
        const nameColor = { color: name.length <= 3 ? "red" : "black" }
        const isButtonDisabled = !this.isValidationOk()

        return (
            <div className="LogInWithValidation">
                <h3>Log in with validation</h3>
                <input style={nameColor} onChange={this.nameChangeHandler} type="text" placeholder="Enter user name" /> <br />
                <input style={passColor} onChange={this.passwordChangeHandler} type="password" placeholder="Enter Password" /> <br />
                <button onClick={this.login} id="button" disabled={isButtonDisabled} >log in</button>
            </div>
        )
    }
}
export default LogInWithValidation;