import React from "react";

export default function Card({
  title,
  price,
  coverImg,
  stats,
  location,
  openSpots,
}) {
  let badgeText =
    openSpots === 0 ? "SOLD OUT" : location === "Online" ? "ONLINE" : "";

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${coverImg}`} className="card--image" />
      <div className="card--stats">
        <i className="bi bi-star-fill"></i>
        <span>{stats.rating}</span>
        <span className="gray"> ({stats.reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}
