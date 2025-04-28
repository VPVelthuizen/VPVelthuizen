import React from "react";
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import ProjectsComp from "../components/projects/projects.jsx";

const Projects = () => {
return (
    <div className="Landing">
      <Header />
      <ProjectsComp  />
      <Footer />
    </div>
  );
}

export default Projects;