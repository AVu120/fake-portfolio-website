import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.css";

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.src} alt="Project" height="100px" width="100px" />
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
