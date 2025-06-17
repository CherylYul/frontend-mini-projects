import React from "react";
import Hero from "../components/Hero";
import Shop from "../components/Shop";
import data from "../data";

export default function ShopDetail() {
  return (
    <div>
      <Hero />
      <div className="center-container">
        <h1 className="center">ADELAIDE’S BEST COFFEE SHOPS</h1>
        {data.map((shop) => (
          <Shop key={shop.id} {...shop} />
        ))}
      </div>
    </div>
  );
}
