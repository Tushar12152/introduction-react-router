import { Link,  } from "react-router-dom";

const Nav = () => {
    return (
        <div>
             <div className=" bg-violet-200 w-[90%] mx-auto flex justify-between p-5 mt-2 rounded-lg">
                  <div className="flex gap-5 list-none text-white">
                       {/* <li className="bg-violet-800 p-2 rounded-lg hover:bg-violet-300"><a href="/home">Home</a></li>
                       <li className="bg-violet-800 p-2 rounded-lg hover:bg-violet-300"><a href="/about">About</a></li>
                       <li className="bg-violet-800 p-2 rounded-lg hover:bg-violet-300"><a href="/contact">Contact Us</a></li> */}
                      
                      <Link className="bg-violet-800 p-2 rounded-lg hover:bg-violet-300" to="/home">Home</Link>
                      <Link className="bg-violet-800 p-2 rounded-lg hover:bg-violet-300" to="/about">About</Link>
                      <Link className="bg-violet-800 p-2 rounded-lg hover:bg-violet-300" to="/contact">Contact</Link>
                      <Link className="bg-violet-800 p-2 rounded-lg hover:bg-violet-300" to='/user'>User</Link>
                  </div>

                  <div>
                         <h1>logo</h1>
                  </div>
             </div>
             
        </div>
    );
};

export default Nav;