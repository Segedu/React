import axios from "axios";
import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom";
import { API_KEY } from "../logic/keys";
import './Log.css';

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorFromServer, setErrorFromServer] = useState(false);
    const AUTH = "auth";

    useEffect(getLocalStorageData, [email])

    const Login = () => {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
        axios
            .post(url, {
                email,
                password,
            })
            .then(function (response) {
                setAuth(response.data);
                window.localStorage.setItem(AUTH, JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error)
                setErrorFromServer(error)
            });
    }

    function getLocalStorageData() {
        if (AUTH !== null) {
            let data = localStorage.getItem(AUTH);
            setAuth(data);
        }
    }

    return (<div className="Register">
        <h3>Login Here</h3>
        <form onSubmit={(e) => {
            e.preventDefault(),
                Login()
        }}>
            <input type="emil" placeholder="Enter Your Email" onChange={(e) => { setEmail(e.target.value) }} /><br></br>
            <input type="password" placeholder="Enter Your Password" onChange={(e) => { setPassword(e.target.value) }} /><br></br>
            <input type="submit" value="Log-In" />
        </form>
        <h3>{errorFromServer ? "Error from server during Login" : ""}</h3>
    </div>)
}

export default Login