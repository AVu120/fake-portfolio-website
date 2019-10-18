import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        My Projects
      </NavLink>
      {" | "}
      <NavLink to="/articles" activeStyle={activeStyle}>
        My Articles
      </NavLink>
      {" | "}
      <NavLink to="/techArticles" activeStyle={activeStyle}>
        Tech Articles
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About Me
      </NavLink>
      {" | "}
      <NavLink to="/suscribe" activeStyle={activeStyle}>
        Suscribe
      </NavLink>
      {" | "}
      <NavLink to="/comments" activeStyle={activeStyle}>
        Comments
      </NavLink>
    </nav>
  );
};

export default NavBar;
