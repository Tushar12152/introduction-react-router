import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const navigate=useNavigate();

    const postdata=useLoaderData();
    const{id,title,body}=postdata;
   
    const handleGoBack=()=>{
        navigate(-1);
    }
    return (

        <div>
             <div className="border-2 border-pink-600 mt-10 p-10 rounded w-[80%] mx-auto ">
             <h1>post Details</h1>
             <p>{id}</p>
             <p>{title}</p>
             <p>{body}</p>
             <button className="bg-pink-400 p-2 rounded ml-[360px] mt-10" onClick={handleGoBack}>Go back</button>
             
             </div>
        </div>
    );
};

export default PostDetails;