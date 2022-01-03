import { Fragment } from "react"

const Authenticated = ({ email }) => {
    return (
        <Fragment>
            <h1>Authenticated page</h1>
            <p>
                User Email:
                {email}
            </p>
        </Fragment>
    )
}

export default Authenticated;