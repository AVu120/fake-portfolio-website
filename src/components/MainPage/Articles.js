import React from "react";
import Thumbnail from "../Common/Thumbnail";
import expressLogo from "../../images/expressLogo.png";
import reactLogo from "../../images/reactLogo.png";
import reduxLogo from "../../images/reduxLogo.png";

import "../../styles/Articles.css";

function Articles(props) {
  return (
    <div className="Articles-page">
      <hr />
      <h1>My Articles</h1>
      <hr />
      <Thumbnail
        link="/reactArticle"
        src={reactLogo}
        title="Learning React Article"
        category="JS UI Framework"
      />
      <hr />
      <Thumbnail
        link="/reduxArticle"
        src={reduxLogo}
        title="Learning Redux Article"
        category="JS UI Framework"
      />
      <hr />
      <Thumbnail
        link="/expressArticle"
        src={expressLogo}
        title="Learning Express Article"
        category="Web Application Framework for Node.js"
      />
      <hr />
    </div>
  );
}

export default Articles;
