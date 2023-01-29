import React, { useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
    const [posts, sePosts] = useState([
        { id: 1, title: "js" },
        { id: 2, title: "React" },
        { id: 3, title: "Vue" },
        { id: 4, title: "Angular" },
        { id: 5, title: "micro front end" },
    ]);
    return (
        <div>
            {posts.map((post) => (
                <div key={post?.id}>
                    <Link to={`/post/${post?.id}`}>{post.title}</Link>
                </div>
            ))}
        </div>
    );
};

export default Posts;
