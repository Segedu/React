import { Fragment } from "react"
import './Logout.css';

const Logout = ({ setAuth }) => {

    setTimeout(() => {
        window.localStorage.removeItem("auth");
    }, 1200000)

    return (<Fragment>
        <button onClick={() => {
            setAuth(null)
            window.localStorage.removeItem("auth");
        }}>Logout</button>
    </Fragment >)
}

export default Logout;