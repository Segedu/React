import { useState, useEffect } from "react"

const useFetchResource = (resource,) => {
    const [Data, setData] = useState([]);
    useEffect(getData, []);

    function getData() {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json(
            ))
            .then(data => {
                setData(data)
            })
    }

    return Data;

}

export default useFetchResource;