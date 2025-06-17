import React from "react";
import data from "./data.js";
import Spot from "./components/Spot.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <div>
      <Header />
      {data.map((spot) => (
        <Spot key={spot.id} {...spot} />
      ))}
    </div>
  );
}
