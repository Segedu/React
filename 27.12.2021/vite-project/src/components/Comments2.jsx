import { useEffect, useState } from "react";
import useFetchResource from "./hooks/useFetch";

const Comments2 = () => {
    const comments = useFetchResource("comments");
    return (<div>
        <h1>Comments</h1>
        <table>
            <tbody>
                {comments.map((comment) => <tr key={comment.id}><td>{comment.name}{comment.body}</td></tr>)}
            </tbody>
        </table>
    </div>)
}

export default Comments2;
