import axios from "axios";
import { Fragment, useState } from "react";
import { API_KEY } from "../logic/keys";

const ChangePassword = ({ auth, setAuth }) => {
    const [password, setPassword] = useState("");

    const changePassword = () => {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`
        axios.post(url, {
            password,
            idToken: auth.idToken,
        }
        ).then(response => {
            setAuth(response.data)
            console.log(response.data);
        }).catch(error => { console.log(error.response.error) })
    }

    return (
        <Fragment>
            <form onSubmit={(e) => {
                e.preventDefault()
                changePassword()
            }}>
                <input type="password" placeholder="Enter New password" onChange={(e) => { setPassword(e.target.value) }} />
                <input type="submit" value="change password" />
            </form>
        </Fragment>)
}

export default ChangePassword;