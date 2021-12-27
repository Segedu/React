import { useEffect, useState } from "react"
import useFetchResource from "./hooks/useFetch";

const Albums1 = () => {
    const albums = useFetchResource("albums");
    return (<div>
        <h1>Albums</h1>
        <table>
            <tbody>
                {albums.map((album) => <tr key={album.id}><td>{album.title}</td></tr>)}
            </tbody>
        </table>
    </div>)
}

export default Albums1;