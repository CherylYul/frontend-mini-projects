import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  const diceFace = [
    <i className="bi bi-dice-1"></i>,
    <i className="bi bi-dice-2"></i>,
    <i className="bi bi-dice-3"></i>,
    <i className="bi bi-dice-4"></i>,
    <i className="bi bi-dice-5"></i>,
    <i className="bi bi-dice-6"></i>,
  ];

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      {diceFace[props.value]}
    </div>
  );
}
