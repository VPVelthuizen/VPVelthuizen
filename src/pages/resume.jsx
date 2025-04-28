import React from "react";
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';
import ResumeComp from "../components/projects/projects.jsx";

const Resume = () => {
return (
    <div className="Landing">
      <Header />
      <ResumeComp  />
      <Footer />
    </div>
  );
}

export default Resume;