import { useEffect, useState } from "react"

const Albums = () => {
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
            <tbody>
                {albums.map((album) => <tr key={album.id}><td>{album.title}</td></tr>)}
            </tbody>
        </table>
    </div>)
}

export default Albums