import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Haeder from "../Haeder/Haeder";


const Root = () => {
    return (
        <div>
            <Haeder></Haeder>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;