import React from "react";
import "../styles/Nav.css";

export default function Nav() {
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
          Score: <span id="score">0</span>
        </div>
        <div>
          Best score: <span id="best score">2</span>
        </div>
      </div>
    </nav>
  );
}
