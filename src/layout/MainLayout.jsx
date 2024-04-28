import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="px-3 max-w-7xl mx-auto">
            {/* navbar */}
            <Navbar></Navbar>
            {/* outlets */}
            <Outlet></Outlet>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;