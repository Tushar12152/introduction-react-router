import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    
    
    return (
        <div>
             <h1 className="text-center font-bold text-4xl mt-20 ">not found data</h1>
             <h2 className="w-[50%] mx-auto bg-pink-100 text-center">{error.statusText|| error.message}</h2>
             {
                error.status===404 && <div className="w-[20%] mx-auto bg-pink-600 p-5 rounded ">
                    <h1 className="p-5">page nai bari jan</h1>
                    <Link className="bg-pink-50 p-2 rounded-lg ml-11" to={'/'}><button>Home</button></Link>

                </div>
             }
        </div>
    );
};

export default ErrorPage;