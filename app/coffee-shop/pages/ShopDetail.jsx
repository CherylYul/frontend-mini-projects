import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import data from "../data";

export default function ShopDetail() {
  const params = useParams();
  const displayShop = data.filter((shop) => shop.id == params.id)[0];
  const activeStyles = {
    backgroundColor: "rgb(170, 25, 25)",
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="center-container">
        <div className="shop-detail">
          <h1 className="shop-detail--title">{displayShop.title}</h1>
          <p className="shop-detail--location">{displayShop.location}</p>
          <img src={`../images/${displayShop.coverImg}`} />
        </div>
        <div className="shop-detail-nav">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="."
            end
          >
            Description
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="menu"
          >
            Menu
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="facilities"
          >
            Facilities
          </NavLink>
        </div>
        <Outlet context={{ displayShop, params }} />
      </div>
    </div>
  );
}
