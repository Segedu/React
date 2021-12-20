import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {

    useEffect(() => {
        handle = setInterval(writeTime, 500);
        console.log('useEffect is called');
        return unmountHandler;
    }, []);

    let handle = null;
    function unmountHandler() {
        console.log("unmount phase - clock");
        clearInterval(handle);
    }

    function writeTime() {
        const now = moment();
        document.title = now.format("HH:mm:ss");
    }

    return (<div>
        <h1>clock</h1>
    </div>)
};
export default Clock;



