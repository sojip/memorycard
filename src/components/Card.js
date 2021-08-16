import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";

Card.propTypes = {
  id: PropTypes.func,
  src: PropTypes.string,
  description: PropTypes.string,
};

export default function Card(props) {
  return (
    <div className="card" id={props.id()}>
      <img className="cardImage" src={props.src} alt="" />
      <div className="cardDescription">{props.description.split(".")[0]}</div>
    </div>
  );
}
