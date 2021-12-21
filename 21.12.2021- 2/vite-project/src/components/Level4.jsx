import { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';

const Level4 = () => {
    const context = useContext(RoomContext);

    return (
        <div>
            <h2>this is level 4 </h2>
            {context.name}-
            {context.number}-
            <h4>
                {context.description}
            </h4>
        </div>
    );
};


export default Level4;