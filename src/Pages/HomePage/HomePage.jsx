import Banner from "../../Layouts/HeaderLayout/Banner/Banner";
import AboutPage from "../AboutPage/AboutPage";
import ContactMe from "../ContactMe/ContactMe";
import ProjectsPage from "../ProjectsPage/ProjectsPage";


const HomePage = () => {
    return (
        <div >
           
            <Banner></Banner>
            <AboutPage></AboutPage>
            <ProjectsPage></ProjectsPage>
            
        </div>
    );
};

export default HomePage