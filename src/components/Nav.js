import React from "react";
import "../styles/Nav.css";
import PropTypes from "prop-types";

Nav.propTypes = {
  scoreBoard: PropTypes.object,
};

export default function Nav(props) {
  return (
    <nav>
      <div className="logo">
        <img src="https://img.icons8.com/emoji/48/000000/hugging-face.png" />
        <h1>
          <span>Personnality</span>
          <br></br>Memory Game
        </h1>
      </div>
      <div className="score">
        <div>
          Score: <span id="score">{props.scoreBoard.score}</span>
        </div>
        <div>
          Best score: <span id="best score">{props.scoreBoard.bestScore}</span>
        </div>
      </div>
    </nav>
  );
}
