import { Fragment } from 'react';
import Level2 from './Level2';
import { UserContext } from '../context/UserContext';

const Level1 = () => {
    const user = { name: "David", email: "David@gmail.com", description: "This data sent from level 1" };


    return (
        <Fragment>
            <h2>this is level 1 </h2>
            <UserContext.Provider value={user}>
                <Level2 />
            </UserContext.Provider>
        </Fragment>
    )
}

export default Level1;