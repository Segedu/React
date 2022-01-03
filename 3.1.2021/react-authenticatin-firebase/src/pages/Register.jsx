import { Fragment, useState } from "react";
import axios from "axios";
import { API_KEY } from '../logic/keys'
import './Log.css';

const Register = ({ setAuth }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorFromServer, setErrorFromServer] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    function register() {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

        axios
            .post(url, {
                email: userEmail,
                password: userPassword,
            }
            )
            .then(function (response) {
                setAuth(response.data);
            })
            .catch(function (error) {
                console.log(error)
                setErrorFromServer(error)
            });
    }

    const emailValidation = (e) => {
        setUserEmail(e.target.value)
    }
    const passwordValidation = (e) => {
        if (e.target.value.length > 8 && e.target.value !== ""
            && e.target.value != 0 && e.target.value !== null) {
            setUserPassword(e.target.value);
            setIsDisabled(false);
        }
    }

    return (
        <div className="Register">
            <h3>Register Here</h3>
            <form onSubmit={(e) => { e.preventDefault(), register() }}>
                <input type="email" onChange={(e) => { emailValidation(e) }} placeholder="Enter Email" /><br></br>
                <input type="password" onChange={(e) => { passwordValidation(e) }} placeholder="Enter Password" /><br></br>
                <input type="submit" value="Register" disabled={isDisabled} />
            </form>
            <h3>{errorFromServer ? "Error from server during Registration" : ""}</h3>
        </div>
    )
}

export default Register;