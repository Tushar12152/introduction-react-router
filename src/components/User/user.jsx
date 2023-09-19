import { useLoaderData } from "react-router-dom";
import UserCard from "./UserCard";

const User = () => {
    const data=useLoaderData();
    return (
        <div>
            <div className="w-[80%] mx-auto bg-green-200  mt-10 p-32 rounded-xl text-white ">
        <h1 className='font-bold text-4xl text-center p-10'> users:{data.length}</h1> 
        <p className='font-semibold text-2xl text-center '>this is Users</p>

        <div className="grid grid-cols-3 gap-6  ">
                 {
                    data.map(user=><UserCard key={user.id} user={user} ></UserCard>)
                 }
             </div>
     </div>
             
        </div>
    );
};

export default User;