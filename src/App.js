import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import { CardModule } from "./components/CardModule";

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function App() {
  let [scoreBoard, setScoreBoard] = useState({ score: 0, bestScore: 0 });
  let [cards, setCards] = useState([...CardModule.cards_]);

  let domCards = cards.map((card) => (
    <Card
      src={card.imgsrc}
      id={card.id}
      description={card.description}
      key={card.id}
    />
  ));
  shuffle(domCards);

  useEffect(() => {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", fire);
    });
    return () => {
      cards.forEach((card) => {
        card.removeEventListener("click", fire);
      });
    };
  });

  function endGame() {
    console.log("end");
    setScoreBoard({
      ...scoreBoard,
      score: 0,
      bestScore:
        scoreBoard.score > scoreBoard.bestScore
          ? scoreBoard.score
          : scoreBoard.bestScore,
    });

    setCards(
      cards.map((card) => {
        if (card.isClicked) card.isClicked = false;
        return card;
      })
    );
  }

  function fire() {
    let id = this.getAttribute("id");
    let selCard = cards.find((card) => card.id === id);
    // if the card has been already clicked
    if (selCard.isClicked === true) {
      endGame();
    } else {
      setCards(
        cards.map((card) => {
          if (shallowEqual(card, selCard)) {
            card.isClicked = true;
          }
          return card;
        })
      );

      setScoreBoard({
        ...scoreBoard,
        score: scoreBoard.score + 1,
        bestScore: scoreBoard.bestScore,
      });
    }
  }

  return (
    <div className="App">
      <Nav scoreBoard={scoreBoard} />
      <p>
        Get points by clicking on an image but don&#39;t click on any more than
        once&#33;
      </p>
      <div className="cardWrapper">{domCards}</div>
    </div>
  );
}

export default App;
