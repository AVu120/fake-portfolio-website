import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "../Common/Thumbnail";
import expressLogo from "../../images/expressLogo.png";
import reactLogo from "../../images/reactLogo.png";
import reduxLogo from "../../images/reduxLogo.png";

import "../../styles/TechArticles.css";

export const QueryContext = React.createContext();

const TechArticles = () => {
  return (
    <div className="TechArticles-page">
      <hr />
      <h1>Tech Articles From Around the Web</h1>
      <hr />
      <div className="QueryTeachArticles">
        <Link to="/liveQueryTechArticles" className="item">
          <button>Query your own articles</button>
        </Link>
        <br />
      </div>
      <hr />
      <Thumbnail
        link="/reactTechArticles"
        src={reactLogo}
        title="Recent React Articles from the Web"
        category="JS UI Framework"
      />
      <hr />
      <Thumbnail
        link="/reduxTechArticles"
        src={reduxLogo}
        title="Recent Redux Articles from the Web"
        category="JS UI Framework"
      />
      <hr />
      <Thumbnail
        link="/expressTechArticles"
        src={expressLogo}
        title="Recent Express Articles from the Web"
        category="Web Application Framework for Node.js"
      />
      <hr />
    </div>
  );
};

export default TechArticles;
