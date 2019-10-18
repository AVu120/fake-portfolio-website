import React from "react";

import "../../styles/About.css";

function About(props) {
  return (
    <div className="About-page">
      <hr />
      <h1>About Me</h1>
      <hr />
      <p>
        Hello! I'm a developer constantly looking to expand what I know and what
        I can build. I have experience developing desktop, web and android apps.
        I currently work at Telstra as a full-time Engineer (for 1 year and 2
        months now).
      </p>
      <h2>I have experience in the following programming languages.</h2>
      <ul>
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
        <li>HTML5, CSS3 and JavaScript</li>
        <li>Ansible</li>
      </ul>
      <h2>I also have experience in the following frameworks.</h2>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>"Node.Js and Express"</li>
        <li>Django</li>
      </ul>
      <h2>Finally I have experience in the following technologies</h2>
      <ul>
        <li>Bamboo</li>
        <li>Coverity Code Scan</li>
        <li>Jira and Confluence</li>
        <li>Git and Bitbucket</li>
      </ul>
      <hr />
    </div>
  );
}

export default About;
