import { useEffect, useState } from "react"

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(getComments, [])

    function getComments() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json(
            ))
            .then(data => {
                setComments(data)
            })
    }


    return (<div>
        <h1>Comments</h1>
        <table>

            {comments.map((comment, i) => <tr key={i}><td>{comment.name}{comment.body}</td></tr>)}
        </table>
    </div>)
}

export default Comments;
