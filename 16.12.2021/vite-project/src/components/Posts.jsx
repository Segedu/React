import { useEffect, useState } from "react";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data =>
                setPosts(data)
            ).catch(err => console.log(err))
    }

    useEffect(getData, [])

    const postElements = posts.map((post) => <li key={post.id}>{post.title}</li>)

    return (<div>
        <p>{postElements}</p>
        <p>{isLoading ? "loading..." : ""}</p>
    </div>)
}
export default Posts;
