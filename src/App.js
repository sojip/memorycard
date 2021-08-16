import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import uniqid from "uniqid";

const imgFolder = require.context("./img", false, /\.(png|jpe?g|svg)$/);

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(imgFolder);

function App() {
  let domCards = [];
  for (const imgName in images) {
    domCards.push(
      <Card
        src={images[imgName].default}
        id={uniqid}
        description={imgName}
        key={uniqid()}
      />
    );
  }

  return (
    <div className="App">
      <Nav />
      <p>
        Get points by clicking on an image but don&#39;t click on any more than
        once&#33;
      </p>
      <div className="cardWrapper">{domCards}</div>
    </div>
  );
}

export default App;
