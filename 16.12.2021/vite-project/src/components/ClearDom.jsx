import { useEffect, useState } from "react";

const ClearDom = () => {

    useEffect(() => {
        console.log('mount');
        return () => {
            console.log("unmount");
        }
    }
    )

    return (<div>
        <h3>hello</h3>
    </div>)

}
export default ClearDom;