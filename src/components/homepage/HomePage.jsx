import { Outlet } from "react-router-dom";
import Nav from "../navbar/nav";
import Footer from "../footer/footer";

const HomePage = () => {
    return (
        <div>
             <Nav></Nav>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default HomePage;