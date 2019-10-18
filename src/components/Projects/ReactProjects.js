import React from "react";
import Thumbnail from "../Common/Thumbnail";
import hangmanLogo from "../../images/hangmanLogo.png";

const ReactProject = () => {
  return (
    <div>
      <hr />
      <h1>My React Projects Here:</h1>
      <Thumbnail
        link="hangmanProject"
        src={hangmanLogo}
        title="Hangman Project"
        category="Capstone University Browser JavaScript Project"
      />
      <ul>
        <li>
          <a href="">Social Card</a>
        </li>
        <br />
        <li>
          <a href="">Weather App</a>
        </li>
        <br />
        <li>
          <a href="">Calculator</a>
        </li>
        <br />
        <li>
          <a href="">Tech News Search Site</a>
        </li>
        <br />
        <li>
          <a href="">Githib Issues Page</a>
        </li>
        <br />
        <li>
          <a href="">Metronome</a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default ReactProject;
