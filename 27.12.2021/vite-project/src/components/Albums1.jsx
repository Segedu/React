import { useEffect, useState } from "react"

const Albums1 = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(getAlbums, [])

    function getAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json(
            ))
            .then(data => {
                setAlbums(data)
            })
    }

    return (<div>
        <h1>Albums</h1>
        <table>

            {albums.map((album, i) => <tr key={i}><td>{album.title}</td></tr>)}
        </table>
    </div>)
}

export default Albums1;