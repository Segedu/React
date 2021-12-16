import { useEffect, useState } from "react";

const GetPostById = ({ id }) => {
    const [post, setPost] = useState({ id });

    const getPostById = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data =>
                setPost(data)
            ).catch(err => console.log(err))
    }

    useEffect(getPostById, [id])

    const element = post ? post.body : "";

    return (<div>
        {element}
    </div>)

}

export default GetPostById;