import { Outlet } from "react-router-dom";

import Navbar from "../HeaderLayout/Navbar/Navbar";



const MainLayout = () => {
    return (
        <section >
            <Navbar></Navbar>
          
                <Outlet></Outlet>
            
        </section>
    );
};

export default MainLayout;