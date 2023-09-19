import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    console.log(post)
    const{id,body}=post
    return (
        <div>
               <div className='bg-red-200 p-5  rounded-xl'>
                   <h1 className='text-xl font-extrabold text-center text-green-950'>Post of id: {id}</h1>
                   <h2 className='mb-5 text-lg font-semibold text-center'>{body}</h2>
                   <Link className='bg-indigo-300 p-2 mt-2 ml-24 rounded-xl' to={`/post/${id}`}>Show Details</Link>


               </div>
        </div>
    );
};
Post.propTypes={
    post:PropTypes.object.isRequired,
}
export default Post;