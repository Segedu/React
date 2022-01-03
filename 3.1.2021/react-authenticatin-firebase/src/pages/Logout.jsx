import { Fragment } from "react"
import './Logout.css';

const Logout = ({ setAuth }) => {
    return (<Fragment>
        <button onClick={() => {
            setAuth(null)
            window.localStorage.removeItem("auth");
        }}>Logout</button>
    </Fragment >)
}

export default Logout;