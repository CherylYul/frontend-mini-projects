import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bold">
      <div className="nav-left">
        <i className="bi bi-journal-album"></i>
        <Link className="main" to="/">
          My Learning Journal
        </Link>
      </div>
      <div className="nav-right">
        <Link className="home" to="/home">
          HOME
        </Link>
        <Link className="about" to="/about">
          ABOUT ME
        </Link>
      </div>
    </nav>
  );
}
