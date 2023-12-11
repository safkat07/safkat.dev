import { Outlet } from "react-router-dom";

import Navbar from "../HeaderLayout/Navbar/Navbar";



const MainLayout = () => {
    return (
        <section >
            <Navbar></Navbar>
            <section className="h-screen">
                <Outlet></Outlet>
            </section>
        </section>
    );
};

export default MainLayout;