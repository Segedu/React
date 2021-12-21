import { Fragment } from 'react';
import Level4 from './Level4';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

const Level3 = () => {
    const context = useContext(UserContext)
    return (
        <Fragment>
            <h2>this is level 3 </h2>
            {context.name}-
            {context.email}-
            <h4>
                {context.description}
            </h4>
            <Level4 />
        </Fragment>
    )
}

export default Level3;