import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const posts=useLoaderData();
   
    return (
        <div>
             <h1 className="text-center font-bold text-4xl ">total data: {posts.length}</h1>
             <div className="grid grid-cols-3 gap-6 w-[80%] mx-auto ">
                 {
                    posts.map(post=><Post key={post.id} post={post}></Post>)
                 }
             </div>
        </div>
    );
};

export default Posts;