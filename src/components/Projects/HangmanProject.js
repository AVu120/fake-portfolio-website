import React from "react";
import hangmanLogo from "../../images/hangmanLogo.png";

const HangmanProject = () => {
  return (
    <div>
      <hr />
      <h1>Hangman Project</h1>
      <p>
        Capstone University Project in which I wrote a Hangman Web-Browser Game
        completely via HTML, CSS and Javascript.
      </p>
      <img src={hangmanLogo} alt="Hangman" />
      <h2>Git-hub Repository & READ-ME (with instructions to deploy) Here:</h2>
      <a href="https://github.com/pribala/Hangman-Game">Hangman Game</a>
      <hr />
    </div>
  );
};

export default HangmanProject;
