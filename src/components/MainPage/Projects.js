import React from "react";
import Thumbnail from "../Common/Thumbnail";
import expressLogo from "../../images/expressLogo.png";
import reactLogo from "../../images/reactLogo.png";
import reduxLogo from "../../images/reduxLogo.png";

import "../../styles/Projects.css";

function Projects(props) {
  return (
    <div className="Projects-page">
      <hr />
      <h1>My Projects</h1>
      <hr />
      <Thumbnail
        link="/reactProjects"
        src={reactLogo}
        title="Learning React Project"
        category="JS UI Framework"
      />
      <hr />
      <Thumbnail
        link="/reduxProjects"
        src={reduxLogo}
        title="Learning Redux Project"
        category="JS UI Framework"
      />
      <hr />
      <Thumbnail
        link="/expressProjects"
        src={expressLogo}
        title="Learning Express Project"
        category="Web Application Framework for Node.js"
      />
      <hr />
    </div>
  );
}

export default Projects;
