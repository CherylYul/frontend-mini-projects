import React from "react";
import { Link } from "react-router-dom";
import { OpenContext } from "../App";

export default function Navbar() {
  const { toggleOpen } = React.useContext(OpenContext);
  return (
    <nav className="flex">
      <div className="nav--right">
        <Link to="/" className="flex">
          <i className="bi bi-caret-up-square-fill"></i>
          <h3>Adelaide Coffee Shop</h3>
        </Link>
      </div>
      <button className="nav-left flex" onClick={toggleOpen.bind(this, true)}>
        <i className="bi bi-cart-fill"></i>
        <p>SHOPPING CART</p>
      </button>
    </nav>
  );
}
